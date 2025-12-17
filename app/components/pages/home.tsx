"use client";

import React from "react";
// REMOVE SCENE IMPORT - It is handled in page.tsx
import ProjectStack from "./ProjectStack"; 
// import PortfolioBanner from "./PortfolioBanner"; 
import CuratedPartnerships from "./CuratedPartnerships"; 
import Footer from "./Footer"; 

export default function Home() {
  return (
    <div id="home-container" className="relative w-full">
      
      {/* --- HERO SECTION --- */}
      <section className="h-screen w-full flex flex-col justify-end p-8 md:p-12 relative overflow-hidden pointer-events-none">
        
        {/* Optional: Keep your dot pattern here if you want it */}
        <div 
            className="absolute inset-0 w-full h-full opacity-30"
            style={{
                backgroundImage: `radial-gradient(#3035e6 1.5px, transparent 1.5px)`,
                backgroundSize: '40px 40px',
                maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
            }}
        />
        
       <div className="relative z-10 w-full flex justify-end items-end">
  <div className="max-w-xl md:max-w-md text-right">
    <h1 className="text-lg md:text-xl font-medium leading-relaxed text-gray-600 tracking-wide">
      Crodal is a Software design and development company headquartered in Banglore.
      Crodal curates its partnership with founders worldwide to showcase some of the
      best and brilliant products in Artificial Intelligence.
    </h1>
  </div>
</div>



      </section>

      {/* 
        --- CONTENT WRAPPER ---
        CRITICAL FIX: 
        1. Removed 'bg-white'.
        2. Removed 'z-10' (it inherits from main in page.tsx).
        
        Now, this div is transparent. The black logo (fixed in page.tsx) 
        will be visible underneath ProjectStack, PortfolioBanner, etc.
      */}
      <div className="w-full">
        {/* 
           NOTE: Ensure ProjectStack, PortfolioBanner, etc., 
           do NOT have 'bg-white' inside them, or they will block the logo.
           They should be transparent.
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