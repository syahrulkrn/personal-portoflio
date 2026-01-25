"use client";

import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import { ArrowUpRight, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiRedux, 
  SiNestjs, 
  SiSupabase 
} from "react-icons/si";
import Link from "next/link";

interface TechItem {
  id: number;
  w: number;
  h: number;
  label: string;
  bg: string;
  text: string;
  icon: any;
  type: "circle" | "pill" | "rect";
}

const TECH_ITEMS: TechItem[] = [
  { id: 0, w: 80, h: 80, label: "React", bg: "bg-[#61DAFB]", text: "text-black", icon: SiReact, type: "circle" },
  { id: 1, w: 140, h: 60, label: "Next.js", bg: "bg-white", text: "text-black", icon: SiNextdotjs, type: "pill" },
  { id: 2, w: 70, h: 70, label: "TypeScript", bg: "bg-[#3178C6]", text: "text-white", icon: SiTypescript, type: "rect" },
  { id: 3, w: 70, h: 70, label: "JavaScript", bg: "bg-[#F7DF1E]", text: "text-black", icon: SiJavascript, type: "rect" },
  { id: 4, w: 80, h: 80, label: "Redux", bg: "bg-[#764ABC]", text: "text-white", icon: SiRedux, type: "circle" },
  { id: 5, w: 80, h: 80, label: "NestJS", bg: "bg-[#E0234E]", text: "text-white", icon: SiNestjs, type: "circle" },
  { id: 6, w: 80, h: 80, label: "Supabase", bg: "bg-[#3ECF8E]", text: "text-white", icon: SiSupabase, type: "circle" },
];

export function Footer({ showPhysics = true }: { showPhysics?: boolean }) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  
  // Refs for the DOM elements we want to sync with physics bodies
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!showPhysics || !sceneRef.current) return;

    // Module aliases
    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint,
      Events = Matter.Events;

    // Create engine
    const engine = Engine.create();
    engineRef.current = engine;

    // Get dimensions
    const width = sceneRef.current.clientWidth;
    const height = sceneRef.current.clientHeight;

    // Create renderer (optional, for debugging or if we wanted canvas rendering)
    // We'll use it just to handle the mouse interaction mapping effectively, 
    // but we won't actually render to it visibly if we sync DOM elements.
    // Actually, for pure DOM sync, we don't strictly need a renderer, 
    // but MouseConstraint needs a Mouse which needs an element.
    
    // Let's purely use the engine and sync to DOM.
    
    // Use the tech items defined outside
    const items = TECH_ITEMS;

    // Create bodies
    const bodies = items.map((item, i) => {
      const x = Math.random() * (width - 100) + 50;
      const y = Math.random() * (height / 2); // Start from top half
      
      let body;
      if (item.type === "circle") {
        body = Bodies.circle(x, y, item.w / 2, {
          restitution: 0.5,
          friction: 0.1,
          render: { visible: false } // We render with DOM
        });
      } else if (item.type === "pill") {
        body = Bodies.rectangle(x, y, item.w, item.h, {
            chamfer: { radius: item.h / 2 },
            restitution: 0.5,
            friction: 0.1,
            render: { visible: false }
        });
      } else {
        body = Bodies.rectangle(x, y, item.w, item.h, {
          restitution: 0.5,
          friction: 0.1,
          chamfer: { radius: 10 },
          render: { visible: false }
        });
      }
      return body;
    });

    // Create walls
    const wallOptions = { isStatic: true, render: { visible: false } };
    const ground = Bodies.rectangle(width / 2, height + 30, width, 60, wallOptions);
    const leftWall = Bodies.rectangle(-30, height / 2, 60, height, wallOptions);
    const rightWall = Bodies.rectangle(width + 30, height / 2, 60, height, wallOptions);
    const ceiling = Bodies.rectangle(width / 2, -30, width, 60, wallOptions);

    Composite.add(engine.world, [...bodies, ground, leftWall, rightWall, ceiling]);

    // Add mouse control
    const mouse = Mouse.create(sceneRef.current);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

    // Keep the mouse in sync with scrolling
    // mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
    // mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

    Composite.add(engine.world, mouseConstraint);

    // Create runner
    const runner = Runner.create();
    runnerRef.current = runner;
    Runner.run(runner, engine);

    // Sync loop
    let animationFrameId: number;
    const updateDOM = () => {
      bodies.forEach((body, i) => {
        const item = itemsRef.current[i];
        if (item) {
          const { x, y } = body.position;
          const angle = body.angle;
          item.style.transform = `translate(${x - items[i].w / 2}px, ${y - items[i].h / 2}px) rotate(${angle}rad)`;
        }
      });
      animationFrameId = requestAnimationFrame(updateDOM);
    };
    updateDOM();

    // Handle resize
    const handleResize = () => {
        const newWidth = sceneRef.current?.clientWidth || window.innerWidth;
        const newHeight = sceneRef.current?.clientHeight || 400;

        Matter.Body.setPosition(ground, { x: newWidth / 2, y: newHeight + 30 });
        Matter.Body.setPosition(rightWall, { x: newWidth + 30, y: newHeight / 2 });
        Matter.Body.setPosition(ceiling, { x: newWidth / 2, y: -30 });
        // We might need to reposition bodies if they are out of bounds
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      Runner.stop(runner);
      Engine.clear(engine);
      // Composite.clear(engine.world);
      // Engine.destroy(engine); // Deprecated but sometimes needed
    };
  }, [showPhysics]);

  return (
    <footer id="contact" className="relative bg-black  pt-0 overflow-hidden">
        
      {/* Physics Container */}
      {showPhysics && (
      <div 
        ref={sceneRef} 
        className="w-full h-[200px] relative cursor-grab active:cursor-grabbing overflow-hidden"
      >
        {/* DOM Elements for Physics Bodies */}
        {/* We absolutely position them at 0,0 and translate them via JS */}
        {TECH_ITEMS.map((item, i) => (
          <div
            key={item.id}
            ref={(el) => { if (el) itemsRef.current[i] = el; }}
            className={`absolute top-0 left-0 flex items-center justify-center shadow-xl select-none will-change-transform border-2 border-white/20 ${
              item.type === "circle" ? "rounded-full" : "rounded-xl"
            } ${item.bg} ${item.text}`}
            style={{
              width: item.w,
              height: item.h,
            }}
          >
            <div className="flex flex-col items-center gap-1 pointer-events-none">
              <item.icon className="w-8 h-8" />
              {item.type !== "circle" && <span className="text-xs font-bold leading-none">{item.label}</span>}
            </div>
          </div>
        ))}
      </div>
      )}

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 bg-black relative z-10">
        <div className="text-gray-400 text-sm">
          Created by <span className="text-white">@syahrulkrn</span>
        </div>
        
        <div className="flex items-center gap-8">
            <Link href="#" className="text-sm text-gray-400 hover:text-white flex items-center gap-1 transition-colors">
                Twitter <ArrowUpRight className="w-3 h-3" />
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white flex items-center gap-1 transition-colors">
                LinkedIn <ArrowUpRight className="w-3 h-3" />
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white flex items-center gap-1 transition-colors">
                Instagram <ArrowUpRight className="w-3 h-3" />
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white flex items-center gap-1 transition-colors">
                Youtube <ArrowUpRight className="w-3 h-3" />
            </Link>
        </div>
      </div>
    </footer>
  );
}
