"use client";

import { motion } from "framer-motion";
import { Book, MapPin, Coffee, Moon, Plane, Sparkles, Figma, Code2, PenTool, Sun } from "lucide-react";
import Image from "next/image";

export function AboutDetails() {
  return (
    <section className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
        
        {/* Title Section - Spans 4 cols on desktop */}
        <div className="md:col-span-6 lg:col-span-4 space-y-4">
            <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-white font-bold tracking-wider text-sm uppercase"
            >
                Beyond Portfolio
            </motion.span>
            <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-serif leading-tight"
            >
                Let&apos;s know more about me
            </motion.h2>
            
            {/* Current Read Card - Below Title */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-8 rounded-3xl p-6 border border-white/20 relative overflow-hidden group hover:border-white/30 transition-colors aspect-[4/5] flex flex-col backdrop-blur-md bg-gradient-to-br from-primary/40 to-primary/10 hover:from-primary/50 hover:to-primary/20"
            >
                <div className="relative z-10 flex items-center gap-2 mb-4">
                    <Sparkles className="w-4 h-4 text-white" />
                    <span className="text-white font-medium">Current Read</span>
                </div>
                
                <div className="flex-1 flex flex-col justify-between relative z-10">
                    <div>
                         <p className="text-gray-400 text-sm mb-1">The Psychology of Money • Morgan Housel</p>
                    </div>
                    
                    {/* Book Cover Placeholder */}
                    <div className="w-full h-64 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center relative overflow-hidden shadow-2xl mt-4 group-hover:scale-105 transition-transform duration-500">
                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/40 to-black/40"></div>
                        <Book className="w-16 h-16 text-emerald-200/50" />
                        <span className="absolute bottom-4 text-center font-serif text-2xl text-white px-4">
                            The Psychology of Money
                        </span>
                    </div>
                </div>
                
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-colors"></div>
            </motion.div>
        </div>

        {/* Middle Column - Spans 4 cols */}
        <div className="md:col-span-6 lg:col-span-4 flex flex-col gap-6">
            
            {/* Tech Stacks */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="rounded-3xl p-8 border border-white/20 relative overflow-hidden group hover:border-white/30 transition-colors flex-1 min-h-[300px] backdrop-blur-md bg-gradient-to-br from-primary/40 to-primary/10 hover:from-primary/50 hover:to-primary/20"
            >
                <div className="relative z-10 space-y-6">
                    <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-white" />
                        <span className="text-white font-medium text-lg">My Tech Stacks</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Designed key features for embedding in-platform data widgets, charts, and more.
                    </p>
                    
                    <div className="flex gap-4 mt-8">
                        {[Figma, Code2, PenTool].map((Icon, i) => (
                            <div key={i} className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer group/icon">
                                <Icon className="w-8 h-8 text-gray-400 group-hover/icon:text-white transition-colors" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            </motion.div>

            {/* Middle Icon Widget */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="h-32 bg-gradient-to-br from-primary/40 to-primary/10 rounded-3xl border border-white/5 flex items-center justify-center relative overflow-hidden group hover:border-white/10 transition-colors"
            >
                 <div className="relative z-10 w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                     <Coffee className="w-8 h-8 text-white" />
                     <div className="absolute -top-2 -right-2">
                        <Sun className="w-6 h-6 text-yellow-300 fill-yellow-300 animate-spin-slow" />
                     </div>
                 </div>
            </motion.div>

            {/* Admired Designers */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="rounded-3xl p-8 border border-white/20 relative overflow-hidden group hover:border-white/30 transition-colors h-48 flex flex-col justify-center backdrop-blur-md bg-gradient-to-br from-[#8d8e94]/40 to-[#8d8e94]/10 hover:from-[#8d8e94]/50 hover:to-[#8d8e94]/20"
            >
                <div className="relative z-10">
                    <p className="text-white/80 font-medium mb-4">Some designers I admire 🤩</p>
                    <div className="flex -space-x-4">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                            <div key={i} className="w-12 h-12 rounded-full border-2 border-black bg-gray-700 flex items-center justify-center overflow-hidden relative">
                                <span className="text-lg">👤</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

        </div>

        {/* Right Column - Spans 4 cols */}
        <div className="md:col-span-6 lg:col-span-4 flex flex-col gap-6">
            
            {/* Map Card */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="h-64 bg-gradient-to-br from-primary/40 to-primary/10 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors"
            >
                {/* Map Background Pattern */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center grayscale"></div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1221] to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 z-10 flex items-center gap-3">
                    <div className="bg-gray-800/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-red-500 fill-red-500" />
                        <span className="text-sm font-medium">Jakarta, Indonesia</span>
                    </div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 bg-emerald-500 rounded-full animate-ping absolute inset-0"></div>
                    <div className="w-4 h-4 bg-emerald-500 rounded-full relative border-2 border-white shadow-lg"></div>
                    <div className="w-12 h-12 rounded-full bg-gray-200 border-2 border-white absolute -top-14 -left-4 overflow-hidden shadow-xl">
                         <div className="w-full h-full bg-gradient-to-br  flex items-center justify-center">
                            <span className="text-xl"><Image src="/syahrul.jpeg" alt="Profile" width={40} height={40} className="rounded-full" /></span>
                         </div>
                    </div>
                </div>
            </motion.div>

            {/* Persona Card */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex-1 bg-gradient-to-br from-primary/40 to-primary/10 rounded-3xl p-8 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors min-h-[300px] flex flex-col"
            >
                 <div className="relative z-10 mb-8">
                    <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4 text-white" />
                        <span className="text-white font-medium text-lg">My Persona</span>
                    </div>
                    <p className="text-gray-400 text-sm">Know me as a person</p>
                </div>

                <div className="flex-1 relative space-y-4">
                    <div className="flex justify-end">
                        <span className="bg-emerald-400/10 text-white px-4 py-2 rounded-xl rounded-tr-none text-sm font-medium border border-emerald-400/20">
                            Social-animal 🥳
                        </span>
                    </div>
                    <div className="flex justify-start">
                         <span className="bg-blue-400/10 text-blue-400 px-4 py-2 rounded-xl rounded-tl-none text-sm font-medium border border-blue-400/20 flex items-center gap-2">
                            Night-Owl <Moon className="w-3 h-3" />
                        </span>
                    </div>
                    <div className="flex justify-end gap-2">
                        <span className="bg-purple-400/10 text-purple-400 px-4 py-2 rounded-xl text-sm font-medium border border-purple-400/20 flex items-center gap-2">
                            Traveller <Plane className="w-3 h-3" />
                        </span>
                        <span className="bg-orange-400/10 text-orange-400 px-4 py-2 rounded-xl rounded-br-none text-sm font-medium border border-orange-400/20 flex items-center gap-2">
                            Night-Owl <Moon className="w-3 h-3" />
                        </span>
                    </div>
                </div>
                
                {/* Background Glow */}
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
            </motion.div>

        </div>
      </div>
    </section>
  );
}
