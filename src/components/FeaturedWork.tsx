"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const projects = [
  {
    company: "Airbnb",
    year: "2023",
    title: "Curating AR experiences while travelling",
    description: "Augmented Reality features for enhanced travel experiences.",
    stats: [
      "Onboarding increased to 12%.",
      "New users signups increased by 32%.",
      "Engagement increased by 20%.",
    ],
    theme: "from-[#1a2e26] to-[#0d1f1a]", // Green
    border: "border-emerald-500/20",
    tech: "Marriott Bonvoy",
  },
  {
    company: "Shopify",
    year: "2023",
    title: "Building profitable dropshipping dashboard",
    description: "A comprehensive dashboard for managing dropshipping businesses.",
    stats: [
      "Revenue increased by 45%.",
      "User retention up by 15%.",
      "Churn rate reduced by 8%.",
    ],
    theme: "from-[#0c2e33] to-[#051518]", // Cyan/Teal
    border: "border-cyan-500/20",
    tech: "Shopify",
  },
  {
    company: "Delloite",
    year: "2023",
    title: "Terrific: An app that helps you find a home tutor",
    description: "Connecting students with the perfect home tutors seamlessly.",
    stats: [
      "Match rate improved by 50%.",
      "Student satisfaction 4.8/5.",
      "Tutor signups +200%.",
    ],
    theme: "from-[#1c1c21] to-[#0c0c0e]", // Dark Gray
    border: "border-gray-500/20",
    tech: "Terrific",
  },
  {
    company: "Headout",
    year: "2023",
    title: "Enhancing the payment flow of Headout",
    description: "Streamlining the checkout process for better conversion.",
    stats: [
      "Checkout drop-off down 12%.",
      "Conversion rate up 23%.",
      "Payment success rate 99%.",
    ],
    theme: "from-[#1a1f1a] to-[#0a0c0a]", // Dark Green/Black
    border: "border-green-900/20",
    tech: "Headout",
  },
];

function Card({ project, index, range, targetScale }: { project: typeof projects[0], index: number, range: number[], targetScale: number }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(scrollYProgress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-[80vh] flex items-center justify-center sticky" style={{ top: `calc(5vh + ${index * 25}px)` }}>
        <motion.div 
          style={{ scale }} 
          className={cn(
            "relative flex flex-col w-full max-w-6xl rounded-[2.5rem] overflow-hidden border bg-gradient-to-br origin-top shadow-2xl",
            project.theme,
            project.border
          )}
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 md:p-12 items-center h-full">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-emerald-400 text-xs font-bold tracking-wider uppercase">
                  {project.company} • {project.year}
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight">
                  {project.title}
                </h3>
              </div>

              <div className="space-y-3">
                {project.stats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="text-sm md:text-base font-light">{stat}</span>
                  </div>
                ))}
              </div>

              <Button 
                className="bg-white text-black hover:bg-gray-200 rounded-full h-12 px-6 group"
              >
                View Case Study
                <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </div>

            {/* Right Content - Phone Mockup */}
            <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
               {/* Phone Frame */}
               <div className="relative w-[280px] h-[580px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden ring-1 ring-white/10">
                 {/* Notch */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-20"></div>
                 
                 {/* Screen Content */}
                 <div className="w-full h-full bg-cover bg-center relative" style={{ backgroundColor: '#4a5568' }}>
                    <div className="absolute inset-0 bg-black/20 z-10"></div>
                    {/* Simulated UI */}
                    <div className="relative z-10 flex flex-col h-full text-white p-6 pt-12">
                      <div className="flex justify-between items-center mb-8">
                        <div className="text-xs font-bold tracking-widest uppercase">{project.tech}</div>
                        <div className="w-4 h-4 rounded-full bg-white/20"></div>
                      </div>
                      
                      <div className="mt-auto mb-12">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                           <div className="flex items-center gap-3 mb-2">
                             <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                             <span className="text-xs font-medium">Live AR View</span>
                           </div>
                           <p className="text-lg font-serif leading-tight">Where can we take you?</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 opacity-60">
                         <div className="w-full h-full bg-gradient-to-b from-blue-900 to-emerald-900"></div>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </motion.div>
    </div>
  )
}

export function FeaturedWork() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <section className="py-24 px-4 bg-[#020617]" id="works" ref={container}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emerald-400/80 text-xs font-bold tracking-[0.2em] uppercase"
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
          const targetScale = 1 - ( (projects.length - i) * 0.05);
          return <Card key={i} index={i} project={project} range={[i * .25, 1]} targetScale={targetScale}/>
        })}
      </div>
    </section>
  );
}
