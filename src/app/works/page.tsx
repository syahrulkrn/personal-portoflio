"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Search, Code2, Database, Layout } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, ChangeEvent } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function WorksListingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allProjects = Object.entries(projects).map(([slug, project]) => ({
    ...project,
    slug,
  }));

  // Define specific tags to display as requested
  const allTags = ["Next / React", "Shopify", "WordPress"];

  const filteredProjects = allProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (project.shortDescription &&
        project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tools.some((tool) =>
        tool.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesTag = selectedTag
      ? selectedTag === "Next / React"
        ? project.tools.some((tool) => tool === "Next.js" || tool === "React")
        : project.tools.includes(selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  return (
    <main className="min-h-screen bg-black text-white selection:bg-green-500/30">
      <Navbar />

      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif"
          >
            Works
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            A showcase of projects that I've worked on.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-md mx-auto mt-8 relative"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full pl-10 pr-4 bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-full h-12 transition-all"
                value={searchQuery}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setSearchQuery(e.target.value)
                }
              />
            </div>
          </motion.div>

          {/* Tech Stack Filter Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto mt-6"
          >
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                selectedTag === null
                  ? "bg-white text-black border-white"
                  : "bg-white/5 text-gray-400 border-white/5 hover:bg-white/10 hover:border-white/20"
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  selectedTag === tag
                    ? "bg-white text-black border-white"
                    : "bg-white/5 text-gray-400 border-white/5 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={project.slug}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                    >
                        <Link href={`/works/${project.slug}`} className="group block h-full">
                            <div className="bg-[#111] border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-all duration-300 h-full flex flex-col p-6">
                                
                                {/* Header */}
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm line-clamp-3 h-[60px]">
                                        {project.shortDescription}
                                    </p>
                                </div>

                                {/* Tech Stack Icons */}
                                <div className="flex gap-3 mb-6">
                                    {/* Display generic icons based on tools or just first few tool names if no icons mapping */}
                                    {/* Since we don't have specific icons for every tool, we'll use a generic icon approach or text badges if preferred. 
                                        The design shows icons. We'll try to map common ones or use a generic code icon. */}
                                    {project.tools.slice(0, 3).map((tool, i) => (
                                        <div key={i} className="relative group/tooltip">
                                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-gray-400">
                                                {tool.toLowerCase().includes("react") || tool.toLowerCase().includes("next") ? <Code2 size={14} /> : 
                                                 tool.toLowerCase().includes("sql") || tool.toLowerCase().includes("data") ? <Database size={14} /> :
                                                 <Layout size={14} />}
                                            </div>
                                            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-black border border-white/10 rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                                {tool}
                                            </span>
                                        </div>
                                    ))}
                                    {project.tools.length > 3 && (
                                         <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-gray-400 text-xs font-medium">
                                            +{project.tools.length - 3}
                                         </div>
                                    )}
                                </div>

                                {/* Image */}
                                <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-4 border border-white/5 bg-white/5">
                                    <Image 
                                        src={project.heroImage || "/placeholder.png"} 
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* Footer */}
                                <div className="mt-auto pt-2">
                                    <span className="text-sm font-medium flex items-center gap-2 text-white group-hover:gap-3 transition-all">
                                        See more <ArrowRight size={16} />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        ) : (
             <div className="text-center py-20">
                <p className="text-gray-400 text-lg">No projects found matching "{searchQuery}"</p>
             </div>
        )}

      </section>

      <Footer showPhysics={false} />
    </main>
  );
}
