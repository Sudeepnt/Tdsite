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
    <section className="relative w-full">
      {projects.map((project, i) => (
        <div
          key={i}
          className="
            group 
            sticky top-0 
            h-[50vh] 
            m-4                 /* Padding around cards */
            flex flex-col 
            justify-start       /* Top alignment */
            items-start         /* Left alignment */
            p-8 
            overflow-hidden 
            cursor-pointer 
            border border-white/10 
            hover:border-white 
            rounded-none        /* Sharp corners */
            transition-all duration-300
          "
          style={{
            zIndex: i + 1,
            // UPDATED: Changed from #050505 to #1a1a1a (Dark Grey)
            // This allows the black hover tint to be clearly visible against it.
            backgroundColor: '#616161ff' 
          }}
        >
          {/* 
            BLACK TINT OVERLAY:
            - Starts invisible (opacity-0).
            - On hover, becomes visible (opacity-100) with 60% black alpha.
          */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />

          {/* Content Layer */}
          <div className="relative z-20 mix-blend-difference">
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-gray-400 group-hover:text-white transition-colors">
              {project.sub}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}