"use client";

import { motion } from "framer-motion";

export function BackgroundEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
      {/* Radial Gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_70%)] z-10" />

      {/* Ripples */}
      {[1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="absolute border border-white/5 rounded-full"
          style={{
            width: `${i * 400}px`,
            height: `${i * 400}px`,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.05, 0.1, 0.05],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Stars */}
      <Star className="top-[20%] left-[20%] w-6 h-6 text-green-200" delay={0} />
      <Star className="top-[30%] right-[20%] w-4 h-4 text-green-100" delay={1} />
      <Star className="bottom-[30%] left-[10%] w-8 h-8 text-green-300" delay={2} />
      <Star className="bottom-[40%] right-[10%] w-10 h-10 text-green-200" delay={1.5} />
    </div>
  );
}

function Star({ className, delay }: { className?: string; delay: number }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`absolute ${className}`}
      initial={{ y: 0, opacity: 0.5 }}
      animate={{
        y: [-10, 10, -10],
        opacity: [0.4, 1, 0.4],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </motion.svg>
  );
}
