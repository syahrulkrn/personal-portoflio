"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft,
  Link as LinkIcon, 
  CheckCircle2
} from "lucide-react";
import Link from "next/link";

export default function WorkDetailPage({ params }: { params: { slug: string } }) {
  // Mock data - in a real app this would be fetched based on slug
  const project = {
    title: "Curating AR experiences while travelling",
    company: "Airbnb",
    year: "2023",
    role: "Product Designer",
    duration: "3 Months",
    tools: ["Figma", "Unity", "ARKit"],
    stats: [
      "Onboarding increased to 12%.",
      "New users signups increased by 32%.",
      "Engagement increased by 20%.",
    ]
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-green-500/30">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
            <Link href="/works" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Works
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
                <div className="space-y-6">
                    <span className="text-primary font-bold tracking-widest uppercase border border-primary/20 px-3 py-1 rounded-full text-xs">
                        {project.company} • {project.year}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif leading-tight">
                        {project.title}
                    </h1>
                </div>
                <div className="lg:pl-12">
                    <p className="text-xl text-gray-400 leading-relaxed">
                        Redefining how travelers interact with their environment through immersive Augmented Reality experiences, bridging the gap between digital convenience and physical exploration.
                    </p>
                </div>
            </div>

            {/* Project Meta */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-white/10 py-8 mb-16">
                <div>
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Role</h3>
                    <p className="text-lg">{project.role}</p>
                </div>
                <div>
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Duration</h3>
                    <p className="text-lg">{project.duration}</p>
                </div>
                <div>
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Tools</h3>
                    <p className="text-lg">{project.tools.join(", ")}</p>
                </div>
                <div>
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Live Link</h3>
                    <Link href="#" className="inline-flex items-center gap-2 text-primary hover:underline cursor-pointer">
                        Visit Site <LinkIcon className="w-3 h-3" />
                    </Link>
                </div>
            </div>

            {/* Hero Image */}
            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 mb-24">
                <Image 
                    src="/syahrul-laptopan.jpeg" 
                    alt="Project Hero" 
                    fill 
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto space-y-24">
                
                {/* The Challenge */}
                <div className="space-y-8">
                    <h2 className="text-3xl font-serif">The Challenge</h2>
                    <p className="text-lg text-gray-400 leading-relaxed">
                        Travelers often struggle to find authentic local experiences and navigate unfamiliar environments. Traditional maps and guides can be disconnecting, pulling users away from the moment. The challenge was to create an unobtrusive AR layer that enhances rather than distracts from the travel experience.
                    </p>
                </div>

                {/* Key Stats */}
                <div className="bg-[#111] rounded-3xl p-8 md:p-12 border border-white/5">
                    <h3 className="text-xl font-serif mb-8">Impact & Results</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {project.stats.map((stat, i) => (
                            <div key={i} className="space-y-3">
                                <CheckCircle2 className="w-8 h-8 text-primary" />
                                <p className="text-lg font-medium leading-snug">{stat}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Solution */}
                <div className="space-y-8">
                    <h2 className="text-3xl font-serif">The Solution</h2>
                    <p className="text-lg text-gray-400 leading-relaxed mb-8">
                        We developed a contextual AR interface that reveals points of interest, historical facts, and navigation cues only when relevant. By leveraging computer vision and geolocation, the app understands where the user is looking and overlays helpful information seamlessly.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                            <Image src="/syahrul-berlari.jpeg" alt="Solution Detail 1" fill className="object-cover" />
                        </div>
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                            <Image src="/syahrul-kitsune.jpeg" alt="Solution Detail 2" fill className="object-cover" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </section>

      <Footer showPhysics={false} />
    </main>
  );
}
