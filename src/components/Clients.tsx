"use client";

import { motion } from "framer-motion";

export function Clients() {
  const logos = [
    { name: "Nutech", className: "font-serif italic font-bold" },
    { name: "airbnb", className: "font-sans font-bold tracking-tight" },
    { name: "Microsoft", className: "font-sans font-semibold" },
    { name: "duolingo", className: "font-sans font-bold" },
    { name: "NETFLIX", className: "font-sans font-black tracking-wide" },
    { name: "Disney", className: "font-serif italic font-bold" },
  ];

  return (
    <section className="w-full py-12 pb-20">
      <div className="max-w-6xl mx-auto px-4 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />
        
        <div className="flex w-max">
            <motion.div 
                className="flex gap-16 md:gap-32 items-center px-4"
                animate={{ x: "-50%" }}
                transition={{
                    ease: "linear",
                    duration: 20,
                    repeat: Infinity,
                }}
            >
                {[...logos, ...logos].map((logo, index) => (
                    <span
                        key={`${logo.name}-${index}`}
                        className={`text-2xl md:text-4xl text-white opacity-40 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap cursor-default ${logo.className}`}
                    >
                        {logo.name}
                    </span>
                ))}
            </motion.div>
        </div>
      </div>
    </section>
  );
}
