"use client";

import React, { useState } from "react";
import ProjectStack from "./ProjectStack"; 
import CuratedPartnerships from "./CuratedPartnerships"; 
import Header from "../Header";
import BottomBox from "./BottomBox";
import About from "../pages/about"; // Import your About component
import Pitch from "../pages/pitch"; // Import your Pitch component


 

const DotColumn = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`h-full flex flex-col justify-between items-center ${className}`}>
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="w-1 h-1 bg-[#0a0a0ab3]" />
      ))}
    </div>
  );
};

export default function Home() {
  const [view, setView] = useState<"home" | "about" | "pitch">("home");

  return (
    <div id="home-container" className="relative w-full min-h-screen">
      
      {/* 1. ADAPTIVE HEADER */}
      <Header onNavigate={(target) => setView(target)} currentView={view} />

      {/* 2. BACKGROUND GRID (Home only) */}
      {view === "home" && (
        <div className="fixed inset-0 z-0 pointer-events-none w-full h-full select-none">
          <div className="absolute left-0 top-0 h-full"><DotColumn /></div>
          <div className="hidden md:block absolute left-[12.5%] top-0 h-full -translate-x-1/2"><DotColumn /></div>
          <div className="hidden md:block absolute left-1/4 top-0 h-full -translate-x-1/2"><DotColumn /></div>
          <div className="hidden md:block absolute left-[37.5%] top-0 h-full -translate-x-1/2"><DotColumn /></div>
          <div className="absolute left-1/2 top-0 h-full -translate-x-1/2"><DotColumn /></div>
          <div className="hidden md:block absolute left-[62.5%] top-0 h-full -translate-x-1/2"><DotColumn /></div>
          <div className="hidden md:block absolute left-3/4 top-0 h-full -translate-x-1/2"><DotColumn /></div>
          <div className="hidden md:block absolute left-[87.5%] top-0 h-full -translate-x-1/2"><DotColumn /></div>
          <div className="absolute right-0 top-0 h-full"><DotColumn /></div>
        </div>
      )}

      {/* 3. CONTENT AREA */}
      <div className="relative z-10">
        
        {/* HOME */}
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
              <div className="h-[10vh] md:h-[15vh]"></div>
              <BottomBox />
            </div>
          </>
        )}

        {/* ABOUT (Dark Mode) */}
        {view === "about" && <About />}

        {/* PITCH (Light Grey Mode) */}
        {view === "pitch" && <Pitch />}

      </div>
    </div>
  );
}