"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  Link as LinkIcon, 
  Twitter, 
  Facebook, 
  Linkedin, 
  Calendar, 
  User,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function BlogDetailPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-green-500/30">
      <Navbar />

      {/* Header / Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Blogs Details</h1>
          <div className="w-20 h-1 bg-white/20 mx-auto rounded-full" />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content - Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Article Header */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif">Data analytics app</h2>
              
              {/* Share Buttons */}
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" size="sm" className="rounded-full gap-2 border-white/20 hover:bg-white/10 text-white">
                  <LinkIcon className="w-4 h-4" />
                  Copy Link
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-white/20 hover:bg-white/10 text-white w-9 h-9">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-white/20 hover:bg-white/10 text-white w-9 h-9">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-white/20 hover:bg-white/10 text-white w-9 h-9">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-white/5">
              <Image 
                src="/syahrul-laptopan.jpeg" 
                alt="Data analytics app" 
                fill 
                className="object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-invert prose-lg max-w-none text-gray-300">
              <h3 className="text-2xl font-serif text-white mb-4">Data analytics app</h3>
              <p className="mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac elementum nulla. 
                Praesent vel orci eget morbi rhoncus. Donec sit amet sollicitudin nulla. 
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                Vivamus at ultrices nibh, ut convallis eu venenatis rhoncus lobortis.
              </p>
              <p className="mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac elementum nulla. 
                Praesent vel orci eget morbi rhoncus. Donec sit amet sollicitudin nulla. 
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              </p>

              <h3 className="text-2xl font-serif text-white mb-4">Carty - Digital Banking</h3>
              <p className="mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac elementum nulla. 
                Praesent vel orci eget morbi rhoncus. Donec sit amet sollicitudin nulla. 
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                Vivamus at ultrices nibh, ut convallis eu venenatis rhoncus lobortis.
              </p>
              <p className="mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac elementum nulla. 
                Praesent vel orci eget morbi rhoncus. Donec sit amet sollicitudin nulla.
              </p>

              {/* Second Image */}
              <div className="relative aspect-[2/1] rounded-3xl overflow-hidden border border-white/10 bg-white/5 my-8">
                <Image 
                  src="/syahrul-berlari.jpeg" 
                  alt="Digital Banking" 
                  fill 
                  className="object-cover"
                />
              </div>

               <h3 className="text-2xl font-serif text-white mb-4">App Lander</h3>
              <p className="mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac elementum nulla. 
                Praesent vel orci eget morbi rhoncus. Donec sit amet sollicitudin nulla. 
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
              </p>
            </div>
          </div>

          {/* Sidebar - Right Column */}
          <div className="space-y-8">
            <div className="bg-white/5 rounded-3xl p-6 border border-white/10 sticky top-24">
              <h3 className="text-xl font-serif mb-6 border-b border-white/10 pb-4">Recent Blog</h3>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Data analytics app",
                    image: "/syahrul-kitsune.jpeg",
                    author: "Cameron Williamson",
                    date: "Nov 20, 2023",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac elementum nulla."
                  },
                  {
                    title: "Design System 101",
                    image: "/syahrul-bola.jpeg",
                    author: "Jenny Wilson",
                    date: "Nov 18, 2023",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac elementum nulla."
                  },
                  {
                    title: "The Future of AI",
                    image: "/syahrul.jpeg",
                    author: "Guy Hawkins",
                    date: "Nov 15, 2023",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac elementum nulla."
                  }
                ].map((blog, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-white/10">
                      <Image 
                        src={blog.image} 
                        alt={blog.title} 
                        fill 
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    
                    <div className="space-y-2">
                        <div className="flex items-center gap-3 text-xs text-gray-400">
                            <div className="flex items-center gap-1">
                                <User className="w-3 h-3" />
                                <span>{blog.author}</span>
                            </div>
                            <div className="w-1 h-1 bg-gray-600 rounded-full" />
                            <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                <span>{blog.date}</span>
                            </div>
                        </div>
                        
                        <h4 className="text-lg font-medium group-hover:text-primary transition-colors line-clamp-1">
                            {blog.title}
                        </h4>
                        
                        <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">
                            {blog.desc}
                        </p>
                        
                        <div className="pt-2">
                             <span className="text-xs font-bold uppercase tracking-wider text-white group-hover:underline flex items-center gap-1">
                                Read More <ArrowRight className="w-3 h-3" />
                             </span>
                        </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer showPhysics={false} />
    </main>
  );
}
