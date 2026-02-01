"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Link as LinkIcon,
  Github,
} from "lucide-react";
import Link from "next/link";
import { Project } from "@/data/projects";

interface WorkDetailClientProps {
  project: Project;
}

export default function WorkDetailClient({ project }: WorkDetailClientProps) {
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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content - Left Column */}
          <div className="lg:col-span-8 space-y-16">
            {/* Overview / Short Explanation */}
            <div>{project.overview}</div>

            {/* Main Content Sections */}
            <div>{project.content}</div>
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
