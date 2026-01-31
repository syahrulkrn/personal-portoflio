"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Hand } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FAQSection() {
  const faqs = [
    {
      question: "Are you available to hire full time?",
      answer:
        "At the moment, I'm pretty happy where I am. Currently I am not looking for any full-time opportunities. But that being said, I am always open to discuss interesting opportunities, collaborations and other fun stuff. If you're interested in discussing a project, making something great together,please fill the form above. Simply want to get get in touch? \n\nHappy to connect on socials.",
    },
    {
      question: "How do your quote pricing works and when can we get on call?",
      answer:
        "My pricing is project-based and depends on the scope, timeline, and deliverables. I usually start with a discovery call to understand your needs before providing a detailed proposal. We can schedule a call as soon as you're ready!",
    },
    {
      question: "Can you facelift my design?",
      answer:
        "Absolutely! I love giving existing products a fresh, modern look while improving usability and accessibility. Let's discuss your current pain points and how we can solve them.",
    },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden" id="faq">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-xs font-bold tracking-[0.2em] uppercase"
          >
            Some Doubts
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-white"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400"
          >
            Your answers await right here
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side: Call to Action Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/40 to-primary/10 rounded-3xl p-8 border border-white/5 relative overflow-hidden h-full flex flex-col"
          >
            <div className="relative z-10 space-y-6 flex-1 flex flex-col">
              <h3 className="text-2xl font-serif text-white text-center">
                Have any more questions or want to start collaborating?
              </h3>
              
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] md:aspect-auto flex-1 min-h-[300px] group">
                {/* Image */}
                 <div className="absolute inset-0">
                    <Image 
                        src="/syahrul-kitsune.jpeg" 
                        alt="Contact" 
                        fill 
                        className="object-cover" 
                    />
                 </div>
                 {/* Overlay */}
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                 
                 {/* Floating Button */}
                 <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full px-6">
                    <Button asChild className="w-full bg-white text-black hover:bg-gray-100 font-medium h-12 rounded-xl shadow-lg">
                      <Link href="mailto:syahrulkurniawan25@gmail.com">
                        <span className="mr-2">👋</span> Let&apos;s talk
                      </Link>
                    </Button>
                 </div>
                 
                 <div className="absolute bottom-2 left-0 w-full text-center z-10">
                    <span className="text-[10px] text-gray-200 drop-shadow-md">* Response time is typically around 12 hours</span>
                 </div>
              </div>
            </div>
            
            {/* Background Gradient Effect */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-32 h-64 bg-emerald-500/20 blur-[100px] pointer-events-none"></div>
          </motion.div>

          {/* Right Side: Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4" defaultValue="item-0">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-white/5 bg-gradient-to-br from-primary/40 to-primary/10 px-6 rounded-2xl data-[state=open]:bg-gradient-to-br from-primary/40 to-primary/10"
                >
                  <AccordionTrigger className="text-left text-white hover:no-underline hover:text-white py-6 text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 text-base leading-relaxed whitespace-pre-line pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
