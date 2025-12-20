"use client";

import React from "react";

export default function CuratedPartnerships() {
  return (
    /* 
       MATCHING PADDING: 
       p-4 on mobile, p-1 on desktop. 
       This ensures the borders of this section line up exactly with the buttons in your Header.
    */
    <section className="relative z-50 p-4 md:p-1 bg-transparent">
      
      <div className="
        relative w-full h-[40vh] flex flex-col justify-end 
        border border-black rounded-md     /* Matching 'rounded small' from header */
        overflow-hidden group cursor-pointer 
        transition-colors duration-500
      ">
        
        <div className="relative z-10 p-6 md:p-10 w-full max-w-7xl">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight text-black group-hover:text-gray-600 transition-colors duration-300">
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