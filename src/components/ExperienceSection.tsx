import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const experiences = [
  {
    role: "Fullstack Web Developer (React & Next.js)",
    company: "PT Nutech Integrasi (Telkom Indonesia Group)",
    period: "2023 – 2026",
    location: "Jakarta, Indonesia",
    description: [
      "Developed and maintained large-scale enterprise and government web applications using React and Next.js",
      "Built master data and transaction modules, reusable tables, dynamic forms, and complex multi-step workflows",
      "Implemented authentication & authorization systems (IAM, RBAC) with access & refresh tokens using Redis",
      "Developed real-time features including Live Chat with Socket.io",
      "Built dashboards with advanced filtering, data visualization, and export features (Excel & PDF)",
      "Worked end-to-end across frontend, backend APIs, database queries, and performance optimization"
    ],
    collaborators: []
  },
  {
    role: "Freelance Fullstack Web Developer (Next.js)",
    company: "Freelance Experience",
    period: "Since 2023 based on project",
    location: "Remote",
    description: [
      "Built custom Next.js web applications focused on performance, SEO, and scalability",
      "Developed ERP systems, company profiles, multilingual websites, and e-commerce platforms",
      "Worked with Supabase, Sanity (Headless CMS), Shopify, and WordPress",
      "Delivered projects end-to-end from requirement gathering to production deployment",
      "Selected Projects:",
      "Asna Academy — ERP system for sports school",
      "Omah Sabin Villa — WordPress to Next.js migration",
      "Relocation Moving — Multilingual SEO-focused website",
      "Vivus Petshop & Asai Jersey — Shopify e-commerce development"
    ],
    collaborators: []
  },
  {
    role: "Web Developer (WordPress)",
    company: "PT Otewe Maju Bersama",
    period: "2021 – 2023",
    location: "Jakarta, Indonesia",
    description: [
      "Developed and maintained company websites using WordPress",
      "Customized themes, landing pages, and marketing content",
      "Implemented SEO best practices and performance improvements",
      "Collaborated with marketing teams to support digital campaigns and social media initiatives"
    ],
    collaborators: []
  },
  {
    role: "Web Developer (WordPress)",
    company: "PT Trikarya Birawa",
    period: "2020 – 2021",
    location: "Jakarta, Indonesia",
    description: [
      "Managed and optimized WordPress-based e-commerce websites",
      "Customized product pages, landing pages, and content",
      "Implemented SEO-optimized content to improve search visibility",
      "Monitored ad performance and optimized marketplace listings"
    ],
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
            className="text-white font-bold tracking-wider text-sm uppercase"
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
                        {exp.role}, <span className="text-white">{exp.company}</span>
                    </h3>
                    <p className="text-gray-400 text-sm italic">
                        {exp.period} / {exp.location}
                    </p>
                </div>
                <div className="md:col-span-8 space-y-6">
                    <ul className="text-gray-300 leading-relaxed list-disc pl-5 space-y-2">
                        {Array.isArray(exp.description) ? (
                            exp.description.map((item, i) => (
                                <li key={i} className={item.startsWith("Selected Projects") ? "font-bold mt-4 list-none -ml-5" : ""}>{item}</li>
                            ))
                        ) : (
                             <p>{exp.description}</p>
                        )}
                    </ul>
                    
                    {exp.collaborators.length > 0 && (
                        <div className="space-y-3">
                            <p className="text-gray-400 text-sm italic">~ collaborated with</p>
                            <div className="flex -space-x-3">
                                {exp.collaborators.map((src, i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-black overflow-hidden relative">
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
        {/* <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-20 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden backdrop-blur-md bg-gradient-to-br from-primary/40 to-primary/10 border border-white/20"
        >
            <div className="space-y-4 z-10 max-w-lg">
                <h3 className="text-3xl md:text-4xl font-serif text-white leading-tight">
                    Let&apos;s Connect and Create Something Amazing!
                </h3>
                <p className="text-gray-200 font-medium">
                    Reach out to me for collaborations, inquiries, or just to say hello.
                </p>
            </div>
            <div className="z-10 shrink-0">
                <Button 
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg group"
                >
                    Contact Me
                    <ArrowUpRight className="ml-2 w-5 h-5 group-hover:rotate-45 transition-transform" />
                </Button>
            </div>
            
            <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-noise"></div>
        </motion.div> */}
      </div>
    </section>
  );
}
