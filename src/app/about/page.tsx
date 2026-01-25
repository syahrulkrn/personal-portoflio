"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AboutDetails } from "@/components/AboutDetails";
import { ExperienceSection } from "@/components/ExperienceSection";
import { motion } from "framer-motion";
import { Sun } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white selection:bg-green-500/30 overflow-hidden">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
            <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", duration: 1.5 }}
                className="w-20 h-20 bg-emerald-300 rounded-full flex items-center justify-center shadow-[0_0_40px_-10px_rgba(110,231,183,0.5)]"
            >
                <Sun className="w-12 h-12 text-emerald-950 animate-[spin_10s_linear_infinite]" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
            >
                <h1 className="text-5xl md:text-7xl font-serif">
                    The story of me being \
                </h1>
                
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                    This cool template is cooked up by Shashi and Sunal. Feel free to spill the beans 
                    about yourself in this zone—share your work wizardry, your fave hobbies, and 
                    whatever floats your boat right now. This space is all about letting your story shine, 
                    so go ahead and tell it like it&apos;s hot!
                </p>
            </motion.div>
        </div>

        {/* Gallery Section */}
        <div className="mt-24 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-0 group/gallery min-h-[500px]">
            {[
                { emoji: "💻", color: "bg-blue-900/20" },
                { emoji: "🌊", color: "bg-emerald-900/20" },
                { emoji: "🍳", color: "bg-orange-900/20" },
                { emoji: "🏠", color: "bg-purple-900/20" }
            ].map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -6 : 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                    className={`
                        w-full max-w-sm md:w-72 aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 relative shadow-2xl backdrop-blur-sm 
                        ${item.color}
                        md:-ml-32 md:first:ml-0 
                        transition-all duration-500 ease-out
                        group-hover/gallery:md:ml-4 group-hover/gallery:md:rotate-0 group-hover/gallery:md:scale-100
                        hover:!scale-105 hover:!z-10
                    `}
                    style={{ zIndex: index }}
                >
                     {/* Placeholder for images - using gradients and emojis for now */}
                     <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                     
                     <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                        <span className="text-6xl filter drop-shadow-lg transform transition-transform group-hover/gallery:scale-110 duration-500">
                            {item.emoji}
                        </span>
                     </div>
                     
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover/gallery:opacity-40 transition-opacity" />
                </motion.div>
            ))}
        </div>
        
        {/* Details Section */}
        <AboutDetails />
        
        {/* Experience Section */}
        <ExperienceSection />
      </div>

      <Footer showPhysics={false} />
    </main>
  );
}
