"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const blogs = [
  {
    title: "How to Set Up React: A Complete Guide for Beginners",
    slug: "setup-react-guide-beginners",
    desc: "A step-by-step guide to installing Node.js, creating a React project, and running your first development server."
  },
  {
    title: "Typescript for beginners. Yes you’re right, for beginners.",
    slug: "learned-typescript-last-night",
    desc: "Understanding the basics of TypeScript, Static vs Dynamic Typing, and how TypeScript works."
  },
  {
    title: "Menjadi The Most Progressive Student di Binar Academy",
    slug: "the-most-progressive-student-binar",
    desc: "Rasanya sangat senang bisa graduate di Binar Academy sebagai Fullstack Web Developer setelah lebih dari 6 bulan belajar di Binar bersama Faciliator dan teman-teman yang lain."
  }
];

export default function BlogListingPage() {
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
                My Thoughts
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
                Insights, tutorials, and stories about design and development.
            </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                >
                    <Link href={`/blog/${blog.slug}`} className="group block h-full">
                        <div className="bg-[#111] hover:bg-[#1a1a1a] border border-white/5 rounded-3xl p-8 h-[300px] flex flex-col justify-between transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-primary/10 relative overflow-hidden">
                            
                            <div className="space-y-4 relative z-10">
                                <h3 className="text-2xl font-medium leading-snug group-hover:text-primary transition-colors">
                                    {blog.title}
                                </h3>
                                <p className="text-gray-400 text-sm line-clamp-3">
                                    {blog.desc}
                                </p>
                            </div>

                            <div className="relative z-10">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </div>

                            {/* Decorative Gradient Blob */}
                            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/20 blur-[80px] rounded-full group-hover:bg-primary/30 transition-all duration-500" />
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>
      </section>

      <Footer showPhysics={false} />
    </main>
  );
}
