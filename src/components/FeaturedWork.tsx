"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    slug: "asna-academy",
    company: "Asna Academy",
    year: "2026",
    title: "Asna Academy Platform",
    description: "Comprehensive sports academy management system.",
    stats: [
      "Role-based access control.",
      "Integrated e-commerce & finance.",
      "Real-time dashboard analytics.",
    ],
    theme: "from-[#2e1065] to-[#0f172a]", // Violet/Dark Blue
    border: "border-violet-500/20",
    tech: "Next.js, TypeScript, Supabase, Tailwind",
    image: "/projects/asna-academy/projects/asna-academy/asna-academy.png",
  },
  {
    slug: "omahsabin",
    company: "Omahsabin",
    year: "2023",
    title: "Create Booking Hotel Platform",
    description:
      "A personal platform for hotel owners to create and manage their own booking platform.",
    stats: [
      "Redesign the user interface for a more intuitive experience.",
      "New users signups increased by 32%.",
      "Engagement increased by 20%.",
    ],
    theme: "from-[#1a2e26] to-[#0d1f1a]", // Green
    border: "border-emerald-500/20",
    tech: "Next.js, TypeScript, Tailwind CSS, third-party APIs",
    image: "/projects/omah-sabin/projects/omah-sabin/omah-sabin-2.png",
  },
  {
    slug: "posind",
    company: "Posind",
    year: "2025",
    title: "Contribute to POSIND Logistic App",
    description:
      "A comprehensive dashboard for managing dropshipping businesses.",
    stats: [
      "React for building modular and maintainable UI.",
      "React Query for handling server state and API calls.",
      "Redis for secure token storage in authentication flows.",
    ],
    theme: "from-[#0c2e33] to-[#051518]", // Cyan/Teal
    border: "border-cyan-500/20",
    tech: "Next.js, TypeScript, Tailwind CSS, Socket.io, ant-design, axios",
    image: "/projects/pos-indonesia/projects/pos-indonesia/posind.png",
  },
  {
    slug: "relocation-moving",
    company: "Relocation Moving",
    year: "2024",
    title: "Create Relocation Moving Website & CMS",
    description: "Built a multilingual marketing website using Next.js and Sanity (Headless CMS).",
    stats: [
      "Multilingual support.",
      "Improved SEO.",
      "Easy content management.",
    ],
    theme: "from-[#1e293b] to-[#0f172a]", // Slate
    border: "border-slate-500/20",
    tech: "Next.js, React, Sanity CMS",
    image: "/projects/relocation-moving/relocation-moving.png",
  },
];

function Card({
  project,
  index,
  range,
  targetScale,
}: {
  project: (typeof projects)[0];
  index: number;
  range: number[];
  targetScale: number;
}) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(scrollYProgress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="md:h-[70vh] sm:h-auto mt-16 md:mt-0 flex items-center justify-center sticky [--top-offset:12vh] md:[--top-offset:5vh]"
      style={{ top: `var(--top-offset)` }}
    >
      <motion.div
        style={{ scale }}
        className={cn(
          "relative flex flex-col w-full max-w-6xl rounded-[2.5rem] overflow-hidden border origin-top shadow-2xl backdrop-blur-md bg-gradient-to-br from-primary/40 to-black/90 border-white/20 hover:from-black/50 hover:to-primary/20 hover:border-white/30",
        )}
      >
        <div className="grid lg:grid-cols-2 h-full">
          {/* Left Content */}
          <div className="space-y-8 p-8 md:p-12 flex flex-col justify-center items-start">
            <div className="space-y-4">
              <span className="text-white text-xs font-bold tracking-wider uppercase">
                {project.company} • {project.year}
              </span>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif md:w-100 w-72 text-white leading-tight">
                {project.title}
              </h3>
            </div>

            <div className="space-y-3">
              {project.stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                  <span className="text-sm md:text-base font-bold">{stat}</span>
                </div>
              ))}
            </div>

            <Link href={`/works/${project.slug}`}>
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full h-12 px-6 group">
                View Case Study
                <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </Link>
          </div>

          {/* Right Content - Project Image */}
          <div className="relative h-full min-h-[300px] lg:min-h-auto overflow-hidden lg:overflow-visible">
            <div className="absolute right-0 bottom-0 w-[120%] lg:w-[130%] translate-x-[15%] translate-y-[15%] rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#1e1e1e]">
              {/* Browser Toolbar */}
              <div className="h-9 bg-[#2a2a2a] border-b border-white/5 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                {/* Address Bar */}
                <div className="flex-1 ml-4 flex justify-center">
                  <div className="bg-[#1a1a1a] text-[10px] text-gray-500 py-1 px-4 rounded w-full max-w-[240px] text-center font-mono truncate">
                    {project.company.toLowerCase()}.com
                  </div>
                </div>
              </div>

              {/* Viewport */}
              <div className="relative w-full aspect-video bg-black">
                <Image
                  src={project.image || "/projects/omah-sabin/omah-sabin-2.png"}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function FeaturedWork() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section className="py-24 px-4 bg-black" id="works" ref={container}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-xs font-bold tracking-[0.2em] uppercase"
          >
            Curated Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-white"
          >
            Featured Case Studies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-lg mx-auto"
          >
            Compilation of case studies that evoke my sense of pride
          </motion.p>
        </div>
      </div>

      <div className="relative">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={i}
              index={i}
              project={project}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>

      <div className="flex justify-center relative z-10">
        <Link href="/works" className="cursor-pointer">
          <Button className="bg-white text-black w-2xs hover:bg-gray-200 rounded-full h-14 px-8 group text-lg font-medium shadow-xl hover:shadow-2xl transition-all hover:scale-105">
            View All Works
            <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
