"use client";

import React from "react";

export default function CuratedPartnerships() {
  return (
    // FIX: Removed 'w-full'. 
    // Now 'm-4' creates space on ALL sides (Left, Top, Right, Bottom) without pushing the right border off-screen.
    <section className="relative z-20 m-4 bg-transparent border border-black box-border">
      
      <div className="relative w-full h-[40vh] flex flex-col justify-end overflow-hidden group cursor-pointer transition-colors duration-500">
        
        <div className="relative z-10 p-8 w-full max-w-7xl mx-auto">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight text-black group-hover:text-gray-700 transition-colors duration-300">
            Crodal curates its partnerships with developers worldwide to showcase 
            some of the newest and most brilliant ideas in gaming that combine 
            experimental game design with unique art direction. 
            Learn more here &rarr;
         
          </h2>
        </div>

      </div>
    </section>
  );
}