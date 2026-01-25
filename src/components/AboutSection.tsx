"use client";

import { motion } from "framer-motion";
import { ArrowRight, MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden" id="about">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white text-xs font-bold tracking-[0.2em] uppercase"
            >
              About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-white"
            >
              Know who am I
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg"
            >
              My journey in few words
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6 text-gray-400 leading-relaxed"
          >
            <p>
              I&apos;ve designed multiple web & mobile experiences for multi-cross-platform devices from TV to Ipads, etc. I&apos;ve worked with small agencies and also with medium-sized companies.
            </p>
            <p>
              I previously worked with one of India&apos;s largest Ed-Tech startups, Toppr which later got acquired by Byjus. Currently I&apos;m designing aesthetic and functional solutions for smallcase within the invest team, to enhance financial accessibility and understanding for Indian users.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button asChild variant="outline" className="rounded-full h-12 px-6 border-white/20 text-white hover:bg-white/10 group">
              <a href="/about">
                Know more
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Right Content - Polaroid Image */}
        <motion.div
          initial={{ opacity: 0, rotate: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, rotate: 6, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring" }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative bg-white p-4 pb-16 shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-500 max-w-sm w-full">
            <div className="relative aspect-[4/5] bg-gray-200 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
               {/* Placeholder for the person's image */}
               <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                  <span className="text-6xl">😎</span>
               </div>
               {/* Overlay gradient */}
               <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent mix-blend-multiply"></div>
            </div>
            
            {/* Name Tag & Cursor */}
            <div className="absolute -bottom-6 -right-6 z-20">
               <div className="relative">
                  <MousePointer2 className="w-6 h-6 text-white fill-primary absolute -top-3 -left-3 z-20" />
                  <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-sm shadow-lg transform rotate-[-4deg]">
                    Sunal Sood
                  </div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
