"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    company: "Airbnb",
    year: "2023",
    title: "Curating AR experiences while travelling",
    slug: "airbnb-ar-experience",
    description: "Augmented Reality features for enhanced travel experiences.",
    category: "Mobile App"
  },
  {
    company: "Shopify",
    year: "2023",
    title: "Building profitable dropshipping dashboard",
    slug: "shopify-dropshipping-dashboard",
    description: "A comprehensive dashboard for managing dropshipping businesses.",
    category: "Web App"
  },
  {
    company: "Delloite",
    year: "2023",
    title: "Terrific: An app that helps you find a home tutor",
    slug: "delloite-terrific-app",
    description: "Connecting students with the perfect home tutors seamlessly.",
    category: "Mobile App"
  },
  {
    company: "Headout",
    year: "2023",
    title: "Enhancing the payment flow of Headout",
    slug: "headout-payment-flow",
    description: "Streamlining the checkout process for better conversion.",
    category: "Fintech"
  },
];

export default function WorksListingPage() {
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
                Selected Works
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
                A showcase of projects that I've worked on, ranging from mobile apps to complex web platforms.
            </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                >
                    <Link href={`/works/${project.slug}`} className="group block h-full cursor-pointer">
                        <div className="bg-[#111] hover:bg-[#1a1a1a] border border-white/5 rounded-[2rem] p-8 md:p-10 h-full flex flex-col justify-between transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-primary/10 relative overflow-hidden">
                            
                            <div className="space-y-6 relative z-10">
                                <div className="flex justify-between items-start">
                                    <span className="text-xs font-bold tracking-widest uppercase text-gray-500 border border-white/10 px-3 py-1 rounded-full">
                                        {project.company} • {project.year}
                                    </span>
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>
                                
                                <div>
                                    <h3 className="text-3xl font-serif leading-tight mb-3 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-base leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 relative z-10">
                                <span className="text-sm font-medium text-gray-500 group-hover:text-gray-300 transition-colors">
                                    {project.category}
                                </span>
                            </div>

                            {/* Decorative Gradient Blob */}
                            <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-white/5 blur-[100px] rounded-full group-hover:bg-primary/20 transition-all duration-500" />
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
