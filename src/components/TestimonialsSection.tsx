"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Bedy Briliant Wijaya",
      role: "Software Engineer at Peentar",
      image: "/testimonials/bedy.png",
      linkedin: "https://www.linkedin.com/in/bedy-briliant-wijaya/",
      text: "It's been such a pleasure getting to work with Syahrul Kurniawan! He's such a talented software engineer, and he really knows his stuff when it comes to React and Next.js. It's truly impressive how he can solve complex issues with such creative and innovative solutions.",
    },
    {
      name: "Bedy Briliant Wijaya",
      role: "Software Engineer at Peentar",
      image: "/testimonials/bedy.png",
      linkedin: "https://www.linkedin.com/in/bedy-briliant-wijaya/",
      text: "It's been such a pleasure getting to work with Syahrul Kurniawan! He's such a talented software engineer, and he really knows his stuff when it comes to React and Next.js. It's truly impressive how he can solve complex issues with such creative and innovative solutions.",
    },
    {
      name: "Bedy Briliant Wijaya",
      role: "Software Engineer at Peentar",
      image: "/testimonials/bedy.png",
      linkedin: "https://www.linkedin.com/in/bedy-briliant-wijaya/",
      text: "It's been such a pleasure getting to work with Syahrul Kurniawan! He's such a talented software engineer, and he really knows his stuff when it comes to React and Next.js. It's truly impressive how he can solve complex issues with such creative and innovative solutions.",
    },
    {
      name: "Bedy Briliant Wijaya",
      role: "Software Engineer at Peentar",
      image: "/testimonials/bedy.png",
      linkedin: "https://www.linkedin.com/in/bedy-briliant-wijaya/",
      text: "It's been such a pleasure getting to work with Syahrul Kurniawan! He's such a talented software engineer, and he really knows his stuff when it comes to React and Next.js. It's truly impressive how he can solve complex issues with such creative and innovative solutions.",
    },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-xs font-bold tracking-[0.2em] uppercase"
          >
            Testimonial of few folks
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-white"
          >
            Good words from the street
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-lg mx-auto"
          >
            Few words from people who collaborated with me
          </motion.p>
        </div>

        {/* Scrolling Cards */}
        {/* We use a mask to fade the edges */}
        <div className="relative overflow-hidden mask-image-linear-gradient">
          <div className="flex gap-6 animate-marquee-slow hover:pause">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Link
                href={testimonial.linkedin}
                key={index}
                target="_blank"
                className="block"
              >
                <motion.div
                  className="flex-shrink-0 w-[350px] md:w-[400px] p-8 rounded-[2rem] border border-white/20 space-y-6 hover:border-white/30 transition-colors backdrop-blur-md bg-gradient-to-br from-primary/40 to-primary/10 hover:from-primary/50 hover:to-primary/20 h-full cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-yellow-500 overflow-hidden relative">
                      {/* Placeholder Avatar */}
                      <div className="absolute inset-0 flex items-center justify-cente">
                        <span className="text-xl">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={500}
                            height={500}
                            className="object-cover w-full h-full"
                          />
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-bold">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-xs">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {testimonial.text}
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Gradient overlays for smooth fade at edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black/60 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black/60 to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
