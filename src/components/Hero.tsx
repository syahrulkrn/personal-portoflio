"use client";

import { BackgroundEffects } from "@/components/BackgroundEffects";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      <BackgroundEffects />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-8 mt-20">
        {/* Avatar & Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-b from-gray-700 to-gray-900 p-1 ring-4 ring-white/5">
            <div className="w-full h-full rounded-full overflow-hidden bg-white-800 flex items-center justify-center">
              <span className="text-4xl md:text-6xl">
                <Image
                  src="/avatar.png"
                  alt="Syahrul"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </span>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs md:text-sm text-gray-300 font-medium">
              Available for opportunities
            </span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-2"
        >
          <h1 className="text-4xl font-black md:text-6xl lg:text-7xl font-serif text-white leading-tight">
            Hi, I'm Syahrul a <br />
            <span className="text-white">Fullstack Developer</span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            {/* I&apos;m an independent engineer.
            <br /> */}
            Specialized in React, Next.js, and TypeScript — turning complex
            ideas into clean, scalable products.{" "}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 pt-4"
        >
          <Button
            size="lg"
            className="bg-gradient-to-br text-white from-primary/40 to-primary/10 border-white/20 hover:from-primary/50 hover:to-primary/20 hover:border-white/30"
          >
            Let&apos;s talk
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 h-12 text-base font-medium group"
          >
            Get Template
            <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
