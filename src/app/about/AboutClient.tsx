"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AboutDetails } from "@/components/AboutDetails";
import { ExperienceSection } from "@/components/ExperienceSection";
import { motion } from "framer-motion";
import { Sun } from "lucide-react";
import Image from "next/image";

export default function AboutClient() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-green-500/30 overflow-hidden">
      <Navbar />

      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 1.5 }}
            className="w-20 h-20 bg-gradient-to-br from-primary/40 to-primary/10 rounded-full flex items-center justify-center "
          >
            <Sun className="w-12 h-12 text-primary animate-[spin_10s_linear_infinite]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-serif">
              The story of me
            </h1>

            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              I’m Syahrul, a Fullstack Developer who enjoys building things that
              actually work in the real world — not just look good on a slide
              deck. My journey started with crafting websites and gradually grew
              into building scalable, production-ready web applications used in
              enterprise and government environments. Outside of coding, I’m
              really into sports. I love running to clear my head and stay
              disciplined, and I enjoy football for the teamwork, strategy, and
              competitive spirit. Somehow, both end up influencing how I work:
              consistent, focused, and always aiming to improve. Right now, I’m
              growing as a Fullstack Developer (Fullstack), building meaningful
              products, learning new things (including AI), and enjoying the
              process along the way.
            </p>
          </motion.div>
        </div>

        {/* Gallery Section */}
        <div className="mt-24 min-h-[500px] flex flex-col justify-center">
          {/* Desktop View */}
          <div className="hidden md:flex flex-row justify-center items-center gap-0 group/gallery">
            {[
              {
                src: "/me/syahrul-berlari.jpeg",
                color: "bg-gradient-to-br from-primary/40 to-primary/10",
              },
              {
                src: "/me/syahrul-laptopan.jpeg",
                color: "bg-gradient-to-br from-primary/40 to-primary/10",
              },
              {
                src: "/me/syahrul-bola.jpeg",
                color: "bg-gradient-to-br from-primary/40 to-primary/10",
              },
              {
                src: "/me/syahrul-kitsune.jpeg",
                color: "bg-gradient-to-br from-primary/40 to-primary/10",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 50,
                  rotate: index % 2 === 0 ? -6 : 6,
                }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                className={`
                            w-72 aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 relative shadow-2xl backdrop-blur-sm 
                            ${item.color}
                            -ml-32 first:ml-0 
                            transition-all duration-500 ease-out
                            group-hover/gallery:ml-4 group-hover/gallery:rotate-0 group-hover/gallery:scale-100
                            hover:!scale-105 hover:!z-10
                        `}
                style={{ zIndex: index }}
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <Image
                    src={item.src}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover/gallery:scale-110"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover/gallery:opacity-40 transition-opacity" />
              </motion.div>
            ))}
          </div>

          {/* Mobile Auto-play Carousel */}
          <div className="md:hidden w-full overflow-hidden py-10">
            <motion.div
              className="flex gap-6"
              animate={{ x: "-50%" }}
              transition={{
                ease: "linear",
                duration: 20,
                repeat: Infinity,
              }}
              style={{ width: "max-content" }}
            >
              {[
                {
                  src: "/syahrul-berlari.jpeg",
                  color: "bg-gradient-to-br from-primary/40 to-primary/10",
                },
                {
                  src: "/syahrul-laptopan.jpeg",
                  color: "bg-gradient-to-br from-primary/40 to-primary/10",
                },
                {
                  src: "/me/syahrul-bola.jpeg",
                  color: "bg-gradient-to-br from-primary/40 to-primary/10",
                },
                {
                  src: "/me/syahrul-kitsune.jpeg",
                  color: "bg-gradient-to-br from-primary/40 to-primary/10",
                },
                // Duplicates for seamless loop
                {
                  src: "/me/syahrul-berlari.jpeg",
                  color: "bg-gradient-to-br from-primary/40 to-primary/10",
                },
                {
                  src: "/me/syahrul-laptopan.jpeg",
                  color: "bg-gradient-to-br from-primary/40 to-primary/10",
                },
                {
                  src: "/me/syahrul-bola.jpeg",
                  color: "bg-gradient-to-br from-primary/40 to-primary/10",
                },
                {
                  src: "/syahrul-kitsune.jpeg",
                  color: "bg-gradient-to-br from-primary/40 to-primary/10",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`
                                w-72 aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 relative shadow-2xl backdrop-blur-sm 
                                ${item.color}
                                flex-shrink-0
                            `}
                >
                  {/* Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={item.src}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                </div>
              ))}
            </motion.div>
          </div>
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
