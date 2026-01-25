"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function BlogSection() {
  const blogs = [
    {
      title: "Overcoming the Articulation Barrier in Gen AI",
      href: "#",
      featured: false,
    },
    {
      title: "Making design system from scratch for B2C products",
      href: "#",
      featured: false,
    },
    {
      title: "How to make design system from scratch for SAAS products",
      href: "#",
      featured: true,
    },
  ];

  return (
    <section className="py-24 px-4 relative" id="blogs">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-xs font-bold tracking-[0.2em] uppercase"
          >
            Thoughts and Blogs
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-white"
          >
            Read My Narrative
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-lg mx-auto"
          >
            Pages filled with design wisdom, imagination and much more
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={blog.href}
                className={cn(
                  "group block h-full p-8 rounded-[2rem] border transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[320px] backdrop-blur-md cursor-pointer",
                  // Glass effect with primary background color base - increased opacity and used gradient for better visibility
                  "bg-gradient-to-br from-primary/40 to-primary/10 border-white/20 hover:from-primary/50 hover:to-primary/20 hover:border-white/30"
                )}
              >
                <div className="space-y-4 z-10 relative">
                  <h3 className={cn(
                    "text-2xl font-serif leading-tight",
                    blog.featured ? "text-emerald-50" : "text-white"
                  )}>
                    {blog.title}
                  </h3>
                </div>

                <div className="z-10 relative">
                  <span className={cn(
                    "inline-flex p-3 rounded-full transition-all duration-300 bg-white/10 text-white group-hover:bg-white group-hover:text-black"
                  )}>
                    {blog.featured ? (
                      <ArrowUpRight className="w-5 h-5" />
                    ) : (
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    )}
                  </span>
                </div>
                
                {/* Decorative background gradient for all cards */}
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
            <Link href="/blog" className="cursor-pointer">
                <Button className="bg-white text-black hover:bg-gray-200 rounded-full h-14 px-8 group text-lg font-medium shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                    View All Articles
                    <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
            </Link>
        </div>
      </div>
    </section>
  );
}
