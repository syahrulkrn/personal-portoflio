import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedWork } from "@/components/FeaturedWork";
import { TapeDivider } from "@/components/TapeDivider";
import { BlogSection } from "@/components/BlogSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AboutSection } from "@/components/AboutSection";
import { FAQSection } from "@/components/FAQSection";
import { Clients } from "@/components/Clients";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-green-500/30">
      <Navbar />
      <Hero />
      {/* <Clients /> */}
      <FeaturedWork />
      {/* <TapeDivider /> */}
      <BlogSection />
      {/* <ServicesSection /> */}
      <AboutSection />
      <TestimonialsSection />

      {/* <FAQSection /> */}
      <Footer />
    </main>
  );
}
