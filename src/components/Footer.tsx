"use client";

import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import { ArrowUpRight, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

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
    
    // Define items data
    const items = [
      { id: 0, w: 100, h: 100, label: "Avatar", color: "bg-blue-500", type: "circle" },
      { id: 1, w: 140, h: 60, label: "Good Day", color: "bg-purple-500", type: "pill" },
      { id: 2, w: 80, h: 80, label: "Peace", color: "bg-green-500", type: "circle" },
      { id: 3, w: 160, h: 60, label: "LEARN", color: "bg-pink-500", type: "rect" },
      { id: 4, w: 120, h: 50, label: "Attention", color: "bg-yellow-500", type: "rect" },
      { id: 5, w: 90, h: 120, label: "Char", color: "bg-orange-500", type: "rect" },
    ];

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
    <footer id="contact" className="relative bg-[#020617] border-t border-white/5 pt-0 overflow-hidden">
        
      {/* Physics Container */}
      {showPhysics && (
      <div 
        ref={sceneRef} 
        className="w-full h-[200px] relative cursor-grab active:cursor-grabbing overflow-hidden"
      >
        {/* DOM Elements for Physics Bodies */}
        {/* We absolutely position them at 0,0 and translate them via JS */}
        <div 
            ref={(el) => { if (el) itemsRef.current[0] = el; }}
            className="absolute top-0 left-0 w-[100px] h-[100px] rounded-full bg-gradient-to-b from-gray-700 to-gray-900 p-1 ring-4 ring-white/5 shadow-2xl flex items-center justify-center select-none will-change-transform"
        >
             <span className="text-5xl">🧑‍💻</span>
        </div>

        <div 
            ref={(el) => { if (el) itemsRef.current[1] = el; }}
            className="absolute top-0 left-0 w-[140px] h-[60px] rounded-full bg-[#6366f1] border-2 border-white text-white font-bold flex items-center justify-center shadow-xl select-none will-change-transform text-center leading-none"
        >
            <div className="flex flex-col items-center">
                <span className="text-[10px] uppercase tracking-wider">Have a</span>
                <span className="text-lg">GOOD DAY</span>
            </div>
        </div>

        <div 
            ref={(el) => { if (el) itemsRef.current[2] = el; }}
            className="absolute top-0 left-0 w-[80px] h-[80px] rounded-full bg-[#22c55e] border-2 border-white flex items-center justify-center shadow-xl select-none will-change-transform"
        >
            <span className="text-4xl">✌️</span>
        </div>

        <div 
            ref={(el) => { if (el) itemsRef.current[3] = el; }}
            className="absolute top-0 left-0 w-[160px] h-[60px] rounded-xl bg-pink-600 border-2 border-white text-white font-black text-3xl flex items-center justify-center shadow-xl select-none will-change-transform italic tracking-tighter"
        >
            LEARN
        </div>

        <div 
            ref={(el) => { if (el) itemsRef.current[4] = el; }}
            className="absolute top-0 left-0 w-[120px] h-[50px] rounded-lg bg-yellow-400 border-2 border-black text-black font-bold flex items-center justify-center shadow-xl select-none will-change-transform"
        >
            <div className="flex items-center gap-2">
                <span>⚠️</span>
                <span className="text-xs">ATTENTION</span>
            </div>
        </div>

        <div 
            ref={(el) => { if (el) itemsRef.current[5] = el; }}
            className="absolute top-0 left-0 w-[90px] h-[120px] rounded-xl bg-indigo-900 border-2 border-white/20 overflow-hidden shadow-xl select-none will-change-transform"
        >
            <div className="w-full h-full flex items-end justify-center pb-2 bg-gradient-to-t from-black/50 to-transparent">
                 <span className="text-4xl">🤖</span>
            </div>
        </div>
      </div>
      )}

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 bg-[#020617] relative z-10">
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
