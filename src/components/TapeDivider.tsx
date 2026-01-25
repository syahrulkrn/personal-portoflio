"use client";

import { Star } from "lucide-react";

export function TapeDivider() {
  const words = [
    "USER FRIENDLY",
    "ACCESSIBILITY",
    "USER FRIENDLY",
    "ACCESSIBILITY",
    "USER FRIENDLY",
    "ACCESSIBILITY",
    "USER FRIENDLY",
    "ACCESSIBILITY",
    "USER FRIENDLY",
    "ACCESSIBILITY",
    "USER FRIENDLY",
    "ACCESSIBILITY",
  ];

  return (
    <div className="py-16 overflow-hidden">
      <div className="-rotate-3 bg-emerald-300 transform  scale-110">
        <div className="flex relative overflow-hidden py-3">
          <div className="flex gap-12 pr-12 animate-marquee whitespace-nowrap">
            {[...new Array(2)].map((_, i) => (
              <div key={i} className="flex gap-12 items-center">
                {words.map((word, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <span className="text-gray-900 font-bold text-sm tracking-widest uppercase">
                      {word}
                    </span>
                    <Star className="w-4 h-4 text-gray-900 fill-gray-900" />
                  </div>
                ))}
              </div>
            ))}
          </div>
          {/* Overlay gradients for fade effect on edges (optional, removed for crisp look like image) */}
        </div>
      </div>
    </div>
  );
}
