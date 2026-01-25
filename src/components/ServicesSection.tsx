"use client";

import { motion } from "framer-motion";
import { Sparkles, PenTool, FileText, Search, User, Map, Smartphone, Eye } from "lucide-react";
import Image from "next/image";

export function ServicesSection() {
  return (
    <section className="py-24 px-4 relative" id="services">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-xs font-bold tracking-[0.2em] uppercase"
          >
            My Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-white"
          >
            Diverse Services To Meet Needs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-lg mx-auto"
          >
            Meeting goals through personalized service approach
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Storytelling - 1 Col */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] p-6 border border-white/20 space-y-6 hover:border-white/30 transition-colors backdrop-blur-md bg-gradient-to-br from-primary/40 to-primary/10 hover:from-primary/50 hover:to-primary/20"
          >
            <div className="rounded-xl overflow-hidden relative aspect-video bg-gray-800">
               {/* Placeholder for video/gif */}
               <div className="absolute inset-0 flex items-center justify-center text-center p-4">
                 <span className="text-2xl font-serif italic text-white/90">&quot;A well told story is, um,&quot;</span>
               </div>
               {/* Overlay gradient */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white">
                <Sparkles className="w-5 h-5" />
                <h3 className="font-bold text-lg text-white">Storytelling</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Designed key features for embedding in-platform data widgets, charts,
              </p>
            </div>
          </motion.div>

          {/* UX Research - 2 Cols Wide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 bg-gradient-to-br from-primary/40 to-primary/10 rounded-[2rem] p-8 border border-white/5 flex flex-col md:flex-row gap-8 hover:border-white/10 transition-colors"
          >
            <div className="flex-1 space-y-4 flex flex-col justify-center">
               <div className="flex items-center gap-2 text-white">
                <Sparkles className="w-5 h-5" />
                <h3 className="font-bold text-lg text-white">UX Research</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Unveiling insights through UX Research, bridging user desires with digital excellence.
              </p>
            </div>
            
            {/* Grid of Icons */}
            <div className="flex-1 grid grid-cols-2 gap-4">
               {[
                 { icon: Search, label: "Primary Research" },
                 { icon: Eye, label: "Usability Reviews" },
                 { icon: FileText, label: "Secondary Research" },
                 { icon: Map, label: "Journey Mapping" },
               ].map((item, idx) => (
                 <div key={idx} className="bg-white/5 rounded-xl p-4 flex flex-col items-center justify-center gap-3 text-center border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                       <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-medium text-gray-300">{item.label}</span>
                 </div>
               ))}
            </div>
          </motion.div>

          {/* Visual Design - 2 Cols Wide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 bg-gradient-to-br from-primary/40 to-primary/10 rounded-[2rem] p-8 border border-white/5 space-y-6 hover:border-white/10 transition-colors relative overflow-hidden group"
          >
             <div className="relative z-10 space-y-2">
               <div className="flex items-center gap-2 text-white">
                <Sparkles className="w-5 h-5" />
                <h3 className="font-bold text-lg text-white">Visual Design</h3>
              </div>
              <p className="text-gray-400 text-sm">Impactful, Visual Storytelling Mastery</p>
             </div>

             {/* Mockup Interface */}
             <div className="mt-8 bg-[#1a2333] rounded-t-xl border border-white/10 p-2 shadow-2xl translate-y-4 group-hover:translate-y-2 transition-transform duration-500">
                {/* Fake Browser Toolbar */}
                <div className="h-6 flex items-center gap-1.5 px-2 mb-2 border-b border-white/5 pb-2">
                   <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                </div>
                {/* Interface Content */}
                <div className="h-48 bg-gradient-to-br from-primary/40 to-primary/10 rounded-lg p-4 grid grid-cols-4 gap-4">
                   <div className="col-span-1 bg-white/5 rounded h-full animate-pulse"></div>
                   <div className="col-span-3 bg-white/5 rounded h-full relative overflow-hidden">
                      <div className="absolute top-4 left-4 w-2/3 h-4 bg-white/10 rounded"></div>
                      <div className="absolute top-12 left-4 w-1/2 h-4 bg-white/10 rounded"></div>
                   </div>
                </div>
             </div>
          </motion.div>

          {/* Prototyping - 1 Col */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-[2rem] p-6 border border-white/20 space-y-6 hover:border-white/30 transition-colors flex flex-col justify-between backdrop-blur-md bg-gradient-to-br from-[#8d8e94]/40 to-[#8d8e94]/10 hover:from-[#8d8e94]/50 hover:to-[#8d8e94]/20"
          >
            <div className="flex-1 flex items-center justify-center py-8">
               {/* Bezier Curve Illustration */}
               <div className="relative w-32 h-32">
                  <svg viewBox="0 0 100 100" className="w-full h-full stroke-white fill-none stroke-2">
                     <path d="M10,80 Q50,10 90,50" />
                     {/* Nodes */}
                     <circle cx="10" cy="80" r="3" className="fill-white" />
                     <circle cx="50" cy="10" r="3" className="fill-white/50" />
                     <circle cx="90" cy="50" r="3" className="fill-white" />
                     {/* Pen Tool Icon Simulated */}
                     <g transform="translate(60, 40)">
                        <PenTool className="w-6 h-6 text-white" />
                     </g>
                  </svg>
               </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white">
                <Sparkles className="w-5 h-5" />
                <h3 className="font-bold text-lg text-white">Prototyping</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Turning Ideas into Interactive Prototypes that Spark User Love
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
