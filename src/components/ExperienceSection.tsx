import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const experiences = [
  {
    role: "Product Designer",
    company: "BetterPlace",
    period: "May 2022 - Present",
    location: "Bangalore, India",
    description: "Designed key features for embedding in-platform data widgets, charts, and objects to generate technical reports. Designed interactions for users to",
    collaborators: []
  },
  {
    role: "Product Designer",
    company: "Smallcase",
    period: "May 2022 - Aug 2022",
    location: "Bangalore, India",
    description: "Designed key features for embedding in-platform data widgets, charts, and objects to generate technical reports. Designed interactions for users to",
    collaborators: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
    ]
  },
  {
    role: "Product Designer",
    company: "Toppr",
    period: "May 2022 - Aug 2022",
    location: "Bangalore, India",
    description: "Designed key features for embedding in-platform data widgets, charts, and objects to generate technical reports. Designed interactions for users to",
    collaborators: []
  }
];

export function ExperienceSection() {
  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emerald-400 font-bold tracking-wider text-sm uppercase"
          >
            My Experiences
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif leading-tight"
          >
            Where I&apos;ve Been Employed
          </motion.h2>
        </div>

        {/* Experience List */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-white/10 pb-12 last:border-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-4 space-y-2">
                    <h3 className="text-xl font-medium">
                        {exp.role}, <span className="text-emerald-400">{exp.company}</span>
                    </h3>
                    <p className="text-gray-400 text-sm italic">
                        {exp.period} / {exp.location}
                    </p>
                </div>
                <div className="md:col-span-8 space-y-6">
                    <p className="text-gray-300 leading-relaxed">
                        {exp.description}
                    </p>
                    
                    {exp.collaborators.length > 0 && (
                        <div className="space-y-3">
                            <p className="text-gray-400 text-sm italic">~ collaborated with</p>
                            <div className="flex -space-x-3">
                                {exp.collaborators.map((src, i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#020617] overflow-hidden relative">
                                        <Image 
                                            src={src} 
                                            alt="Collaborator" 
                                            fill 
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Card */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-20 rounded-[2.5rem] bg-gradient-to-r from-emerald-200 to-teal-400 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
            <div className="space-y-4 z-10 max-w-lg">
                <h3 className="text-3xl md:text-4xl font-serif text-emerald-950 leading-tight">
                    Let&apos;s Connect and Create Something Amazing!
                </h3>
                <p className="text-emerald-900/80 font-medium">
                    Reach out to me for collaborations, inquiries, or just to say hello.
                </p>
            </div>
            <div className="z-10 shrink-0">
                <Button 
                    className="bg-[#0b1221] text-white hover:bg-black rounded-full px-8 py-6 text-lg group"
                >
                    Contact Me
                    <ArrowUpRight className="ml-2 w-5 h-5 group-hover:rotate-45 transition-transform" />
                </Button>
            </div>
            
            {/* Background Grain/Texture (Optional) */}
            <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-noise"></div>
        </motion.div>
      </div>
    </section>
  );
}
