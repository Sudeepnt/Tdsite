"use client";

import React from "react";

const projects = [
  { sub: "Job Worker Inventory" },
  { sub: "Gattabara Game Studios" },
  { sub: "Vitta Chitta" },
  { sub: "A44 Games" },
  { sub: "The Gentlebros" },
  { sub: "Hadoque" },
];

export default function ProjectStack() {
  return (
    /* 
       1. MATCHING OUTER PADDING: p-4 on mobile, p-1 on desktop
       2. GAP-1: Creates the same 4px separation as the Header/BottomBox
    */
    <section className="relative w-full p-4 md:p-1 flex flex-col gap-1">
      {projects.map((project, i) => (
        <div
          key={i}
          className="
            group 
            sticky top-0 
            h-[35vh]             /* Reduced height (30% less than 50vh) */
            w-full
            flex flex-col 
            justify-start 
            items-start 
            p-2                 /* Internal padding matches Header exactly */
            overflow-hidden 
            cursor-pointer 
            border border-black  /* Solid border to match the agency grid */
            transition-all duration-300
          "
          style={{
            zIndex: i + 1,
            // Offsetting the sticky top by the index to create a slight stack peek if desired
            // Or keep at 0 for a perfect overwrite stack
            top: `calc(${i * 1}px + 0.25rem)`, 
            backgroundColor: '#616161' 
          }}
        >
          {/* BLACK TINT OVERLAY */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />

          {/* Content Layer */}
          <div className="relative z-20 mix-blend-difference">
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-white/70 group-hover:text-white transition-colors">
              {project.sub}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}