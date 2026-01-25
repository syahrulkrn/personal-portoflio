"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Works", href: "/#works" },
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/#faq" },
];

export function Navbar() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled past 80% of viewport height
      const show = window.scrollY > window.innerHeight * 0.8;
      setShowButton(show);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-1.5 px-3 shadow-lg shadow-black/20 transition-all duration-300">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors rounded-full hover:bg-white/10"
            )}
          >
            {item.name}
          </Link>
        ))}

        <AnimatePresence>
          {showButton && (
            <motion.div
              initial={{ width: 0, opacity: 0, marginLeft: 0 }}
              animate={{ width: "auto", opacity: 1, marginLeft: 8 }}
              exit={{ width: 0, opacity: 0, marginLeft: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <Button 
                asChild
                className="bg-white text-black hover:bg-gray-200 rounded-full whitespace-nowrap h-9 px-5 text-sm font-medium"
              >
                <Link href="#contact">Let&apos;s talk</Link>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
