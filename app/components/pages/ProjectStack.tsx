"use client";

import React from "react";

const projects = [
  { sub: "Job Worker Inventory" },
  { sub: "Gattabara Game Studios" },
  { sub: "Vitta Chitta" },
  { sub: "A44 Games" },
  { sub: "The Gentlebros" },
  { sub: "Hadoque" },
  { sub: "Project 7" },
  { sub: "Project 8" },
];

export default function ProjectStack() {
  // Group projects into pairs of 2
  const pairedProjects = [];
  for (let i = 0; i < projects.length; i += 2) {
    pairedProjects.push(projects.slice(i, i + 2));
  }

  return (
    <section className="relative w-full p-4 md:p-1 flex flex-col gap-1">
      {pairedProjects.map((pair, rowIndex) => (
        <div
          key={rowIndex}
          className={`flex w-full gap-1 ${
            // Alternating padding: 
            // Even rows (0, 2) have padding at the end (right)
            // Odd rows (1, 3) have padding at the start (left)
            rowIndex % 2 === 0 ? "md:pr-[10%]" : "md:pl-[10%]"
          }`}
        >
          {pair.map((project, i) => (
            <div
              key={i}
              className="
                group 
                relative
                flex-1             /* High Width: fills available space */
                h-[25vh]           /* Low Height: as requested */
                flex flex-col 
                justify-start 
                items-start 
                p-4                /* Internal padding */
                overflow-hidden 
                cursor-pointer 
                border border-black 
                rounded-lg         /* Subtle rounding to match your header */
                bg-transparent     /* No background by default */
                transition-all duration-300
                hover:bg-[#000000]  /* Hover: Card becomes gray */
              "
            >
              {/* Content Layer */}
              <div className="relative z-20">
                <p className="
                  text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] 
                  text-gray-600        /* Default text color */
                  group-hover:text-white /* Hover: Text becomes black */
                  transition-colors duration-300
                ">
                  {project.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}