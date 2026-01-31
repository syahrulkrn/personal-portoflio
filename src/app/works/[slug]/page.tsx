"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Link as LinkIcon,
  Eye,
  Heart,
  Users,
  Github,
  PlayCircle,
} from "lucide-react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { projects } from "@/data/projects";

export default function WorkDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects[slug];

  if (!project) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-green-500/30">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-52 pb-24">
        {/* Header Section */}
        <div className="mb-16 border-b border-white/10">
          <h1 className="text-5xl font-serif font-bold mb-2 tracking-tight">
            {project.title}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mb-8 leading-relaxed">
            {project.company} • {project.year} • {project.role}
          </p>

          {/* <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Team of {project.teamSize || 1}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>{project.views || "1,000"} views</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                <span>{project.likes || 100} likes</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
               {project.repoUrl && (
                   <Link href={project.repoUrl} target="_blank">
                       <Button variant="ghost" className="text-gray-400 hover:text-white gap-2">
                          <Github className="w-4 h-4" />
                          Repository
                       </Button>
                   </Link>
               )}
               {project.link && (
                   <Link href={project.link} target="_blank">
                       <Button variant="ghost" className="text-gray-400 hover:text-white gap-2">
                          <PlayCircle className="w-4 h-4" />
                          Demo Video
                       </Button>
                   </Link>
               )}
            </div>
          </div> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content - Left Column */}
          <div className="lg:col-span-8 space-y-16">
            {/* Overview / Short Explanation */}
            <div>{project.overview}</div>

            {/* Main Content Sections */}
            <div>{project.content}</div>

            {/* Image Gallery (Placeholder for now as existing data doesn't have multiple images) */}

            {/* Attribution / Footer of Content */}
            {/* <div className="pt-24 flex flex-col items-center justify-center space-y-4">
                 <div className="text-8xl font-bold text-white/5 relative group cursor-pointer select-none">
                     <span className="group-hover:text-white/10 transition-colors duration-300">{project.likes || 522}</span>
                     <Heart className="w-12 h-12 text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:text-primary transition-colors duration-300 group-hover:scale-110" />
                 </div>
            </div> */}

            {/* Comments Section Placeholder */}
            {/* <div className="pt-12 border-t border-white/10">
                <h3 className="text-sm font-bold text-gray-400 mb-4">Comments</h3>
                <div className="bg-[#111] rounded-lg border border-white/10 p-4">
                    <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
                        <span className="text-xs font-bold text-white px-2 py-1 bg-white/10 rounded">Write</span>
                        <span className="text-xs text-gray-500 px-2 py-1">Preview</span>
                    </div>
                    <textarea 
                        className="w-full bg-transparent text-gray-300 text-sm focus:outline-none min-h-25 resize-y"
                        placeholder="Sign in with GitHub to comment"
                        disabled
                    />
                    <div className="flex justify-end mt-2">
                        <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white gap-2 h-8 text-xs" disabled>
                            <Github className="w-3 h-3" />
                            Sign in with GitHub
                        </Button>
                    </div>
                </div>
            </div> */}
          </div>

          {/* Sidebar - Right Column */}
          <div className="hidden lg:block lg:col-span-4 relative">
            <div className="sticky top-32 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">
               Contents
              </h3>

              <nav className="flex flex-col space-y-3">
                {project.toc?.map((item) => (
                  <Link
                    key={item.id}
                    href={`#${item.id}`}
                    className="text-gray-400 hover:text-primary transition-colors text-sm leading-relaxed block border-l-2 border-transparent hover:border-primary pl-3 -ml-3"
                  >
                    {item.label}
                  </Link>
                ))}

                {(!project.toc || project.toc.length === 0) && (
                  <p className="text-sm text-gray-500 italic">
                    No sections available
                  </p>
                )}
              </nav>

              <div className="mt-8 pt-8 border-t border-white/10 space-y-4">
                <h4 className="text-sm font-bold text-white">
                  Share this project
                </h4>
                <div className="flex gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    className="w-8 h-8 rounded-full border-white/10 hover:bg-white/10"
                  >
                    <LinkIcon className="w-3 h-3" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="w-8 h-8 rounded-full border-white/10 hover:bg-white/10"
                  >
                    <Github className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer showPhysics={false} />
    </main>
  );
}
