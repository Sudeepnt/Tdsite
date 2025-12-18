"use client";

import React from "react";
// REMOVE SCENE IMPORT - It is handled in page.tsx
import ProjectStack from "./ProjectStack"; 
// import PortfolioBanner from "./PortfolioBanner"; 
import CuratedPartnerships from "./CuratedPartnerships"; 
import Footer from "./Footer"; 

export default function Home() {
  return (
    <div id="home-container" className="relative w-full min-h-screen">
      
      {/* 
        --- GLOBAL BACKGROUND PATTERN --- 
        Moved here so it covers the entire "home-container" (Hero + Projects + Footer).
        1. Changed to 'absolute inset-0 h-full'.
        2. Removed 'maskImage' so dots don't fade out.
        3. Added 'z-0' so it sits behind content.
      */}
      <div 
          className="absolute inset-0 w-full h-full opacity-30 pointer-events-none z-0"
          style={{
              backgroundImage: `radial-gradient(#3035e6 1.5px, transparent 1.5px)`,
              backgroundSize: '40px 40px',
              // REMOVED maskImage here so the dots persist to the very bottom
          }}
      />

      {/* --- HERO SECTION --- */}
      {/* Added 'relative z-10' to ensure text sits ABOVE the dots */}
      <section className="h-screen w-full flex flex-col justify-end p-8 md:p-12 relative z-10 overflow-hidden pointer-events-none">
        
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

      {/* --- CONTENT WRAPPER --- */}
      {/* Added 'relative z-10' here as well so these components sit ABOVE the dots */}
      <div className="w-full relative z-10">
        
        {/* 
           IMPORTANT: Ensure ProjectStack, CuratedPartnerships, and Footer 
           have a transparent background (no 'bg-white' or 'bg-black'), 
           otherwise they will cover the dots.
        */}
        <ProjectStack />
        {/* <PortfolioBanner /> */}
        <CuratedPartnerships />
        <Footer />
        
      </div>
      
      <div className="h-[30vh] md:h-[35vh]"></div>
    </div>
  );
}