"use client";

import React, { useState, useEffect, useRef } from "react";
import ProjectStack from "./ProjectStack"; 
import CuratedPartnerships from "./CuratedPartnerships"; 
import Header from "../Header";
import BottomBox from "./BottomBox";
import About from "../pages/about"; 
import Pitch from "../pages/pitch"; 


 

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: -2000, y: -2000 };

    // --- FINAL CONFIGURATION ---
    const particleCount = 200;       // Doubled dots
    const connectionDistance = 120;   // Distance dots connect to each other
    const mouseDistance = 200;        // Distance dots connect to mouse
    const dotSize = 1;              // Size of the dots
    const lineThickness = 1.0;        // High thickness for dot-to-dot lines
    const mouseLineThickness = 1.0;   // Very high thickness for mouse connections

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;

      constructor() {
        // Distribute dots randomly across the screen
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        // Subtle movement speed
        this.directionX = (Math.random() - 0.5) * 0.5;
        this.directionY = (Math.random() - 0.5) * 0.5;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
        ctx.fill();
        ctx.closePath();
      }

      update() {
        // Bounce off edges
        if (this.x > window.innerWidth || this.x < 0) this.directionX = -this.directionX;
        if (this.y > window.innerHeight || this.y < 0) this.directionY = -this.directionY;
        
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        // 1. Connection between dots
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance;
            ctx.beginPath();
            ctx.lineWidth = lineThickness; // Applying thickness
            ctx.lineCap = "round";         // Smooth joints
            ctx.strokeStyle = `rgba(0, 0, 0, ${opacity * 0.15})`;
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
            ctx.closePath();
          }
        }

        // 2. Connection to Mouse
        const mdx = particles[a].x - mouse.x;
        const mdy = particles[a].y - mouse.y;
        const mDistance = Math.sqrt(mdx * mdx + mdy * mdy);
        
        if (mDistance < mouseDistance) {
          const mOpacity = 1 - mDistance / mouseDistance;
          ctx.beginPath();
          ctx.lineWidth = mouseLineThickness; // Higher thickness for mouse
          ctx.strokeStyle = `rgba(0, 0, 0, ${mOpacity * 0.35})`;
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
          ctx.closePath();
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => p.update());
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      // FIX: High-DPI / Retina Scaling
      const ratio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * ratio;
      canvas.height = window.innerHeight * ratio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      
      // Ensure the drawing context matches the scale ratio
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    handleResize();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Interactive Canvas Layer - No more static grid dots */}
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};
 










export default function Home() {
  const [view, setView] = useState<"home" | "about" | "pitch">("home");

  return (
    <div id="home-container" className="relative w-full min-h-screen">
      
      {/* Header */}
      <Header onNavigate={(target) => setView(target)} currentView={view} />

      {/* Interactive Background (Only for Home) */}
      {view === "home" && <InteractiveBackground />}

      {/* Content Area */}
      <div className="relative z-10">
        {view === "home" && (
          <>
            <section className="h-screen w-full flex flex-col justify-end p-8 md:p-12 pointer-events-none">
              <div className="relative w-full flex justify-end items-end">
                <div className="max-w-xl md:max-w-md text-right">
                  <h1 className="text-lg md:text-xl font-medium leading-relaxed text-gray-600 tracking-wide">
                    Crodal is a Software design and development company headquartered in Banglore.
                    Crodal curates its partnership with founders worldwide to showcase some of the
                    best and brilliant products in Artificial Intelligence.
                  </h1>
                </div>
              </div>
            </section>
            
            <div className="w-full">
              <ProjectStack />
              <div className="h-[10vh] md:h-[15vh]"></div>
              <CuratedPartnerships />
      
              <BottomBox />
            </div>
          </>
        )}

        {view === "about" && <About />}
        {view === "pitch" && <Pitch />}
      </div>
    </div>
  );
}