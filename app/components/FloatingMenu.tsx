"use client";

import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Simple SVG Icon for the Lotus Logo
const LotusIcon = () => (
  <svg width="60" height="40" viewBox="0 0 60 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 40C30 40 10 40 10 30C10 20 25 25 30 10C35 25 50 20 50 30C50 40 30 40 30 40Z" />
    <path d="M20 20C20 20 15 5 30 5C45 5 40 20 40 20" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    <path d="M30 5V15" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
  </svg>
);

export default function FloatingMenu({ setActivePage }: { setActivePage: (page: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Animation logic
  useGSAP(() => {
    if (isOpen) {
      gsap.fromTo(".menu-card", 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out" }
      );
    }
  }, [isOpen]);

  const handleNav = (page: string) => {
    setActivePage(page);
    setIsOpen(false);
  };

  const socialLinks = ["Newsletter", "Twitter", "Instagram", "LinkedIn", "Youtube", "Facebook"];

  return (
    // Fixed position, high Z-Index
    <div ref={containerRef} className="fixed bottom-8 left-8 z-[100] flex flex-col items-start gap-4 font-sans text-white">
      
      {/* --- BIG MENU BUTTON --- */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#808080] hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 text-black px-10 py-4 rounded-lg font-bold text-xl shadow-2xl backdrop-blur-md border border-white/10"
        >
          Menu
        </button>
      )}

      {/* --- EXPANDED MENU --- */}
      {/* UPDATED: Reduced height from h-[45vh] to h-[32vh] (~30% reduction) */}
      {isOpen && (
        <div className="flex flex-row items-end gap-3 h-[32vh] max-w-[100vw] overflow-x-auto no-scrollbar pb-4 pr-8 pl-1">
          
          {/* COLUMN 1: CONTROLS & SIDE NAVIGATION */}
          <div className="flex flex-col gap-2 w-[65vw] md:w-[14vw] flex-shrink-0 menu-card h-full">
            
            {/* Hide Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="bg-[#808080] hover:bg-black hover:text-white transition-colors px-3 py-3 rounded-2xl text-left font-bold text-lg text-black h-[50px] flex items-center border border-white/10 shrink-0"
            >
              Hide
            </button>
            




            {/* Side Menu Links */}
            <div className="flex flex-col gap-2 flex-grow overflow-y-auto">
                {/* 1. Home */}
                <div 
                    onClick={() => handleNav("home")} 
                className="bg-[#808080] hover:bg-black hover:text-white transition-colors px-3 py-3 rounded-2xl text-left font-bold text-lg text-black h-[50px] flex items-center border border-white/10 shrink-0"
                >
                    Home <span className="text-sm opacity-50">&rarr;</span>
                </div>

      
                
                {/* 3. About Us */}
                <div 
                    onClick={() => handleNav("about")} 
                   className="bg-[#808080] hover:bg-black hover:text-white transition-colors px-3 py-3 rounded-2xl text-left font-bold text-lg text-black h-[50px] flex items-center border border-white/10 shrink-0"
                >
                    About Us <span className="text-sm opacity-50">&rarr;</span>
                </div>
                
               
            </div>
          </div>







          {/* COLUMN 2: WELCOME (Home) */}
      <div 
  onClick={() => handleNav("home")} 
  className="w-[65vw] md:w-[18vw] flex-shrink-0 bg-[#808080] min-h-[400px] max-h-[500px] rounded-3xl p-6 flex flex-col justify-between hover:bg-black transition-colors cursor-pointer border border-white/10 menu-card group"
>


             <h3 className="text-2xl font-bold text-white">Welcome to Crodal &rarr;</h3>
             <div>
                <p className="text-gray-200 text-xs mt-auto">Learn more about our vision.</p>
             </div>
          </div>









          {/* COLUMN 3: ABOUT US (About Page) */}
         <div 
            onClick={() => handleNav("about")} 
          className="w-[65vw] md:w-[18vw] flex-shrink-0 bg-[#808080] min-h-[400px] max-h-[500px] rounded-3xl p-6 flex flex-col justify-between hover:bg-black transition-colors cursor-pointer border border-white/10 menu-card group"
>

             <h3 className="text-2xl font-bold text-black group-hover:text-white transition-colors">About us &rarr;</h3>
             
             <div className="self-center scale-110 text-white">
                 <LotusIcon />
             </div>
             <div>
                <p className="text-white text-xs leading-relaxed">
                  Crodal does things differently.
                  <br />
                  <span className="block mt-1 font-bold text-lg">&rarr;</span>
                </p>
             </div>
          </div>








           {/* COLUMN 4: PITCH US (Pitch Page) */}
         
            <div 
                onClick={() => handleNav("pitch")} 
             className="w-[65vw] md:w-[18vw] flex-shrink-0 bg-[#808080] min-h-[400px] max-h-[500px] rounded-3xl p-6 flex flex-col justify-between hover:bg-black transition-colors cursor-pointer border border-white/10 menu-card group"
>

             <h3 className="text-2xl font-bold text-black group-hover:text-white transition-colors">Pitch us &rarr;</h3>
             <div className="self-center scale-110 text-white">
                 <LotusIcon />
             </div>
             <div>
                <p className="text-white text-xs leading-relaxed">
                   Working on something you think we would love?
                </p>
             </div>
          </div>










          {/* COLUMN 5: SOCIAL STACK */}
          <div className="w-[65vw] md:w-[14vw] flex-shrink-0 h-full flex flex-col gap-2 menu-card">
            {socialLinks.map((link, i) => (
              <a 
                key={i}
                href="#" 
                className="flex-1 bg-[#808080] hover:bg-black hover:text-white transition-colors rounded-xl flex items-center justify-between px-4 font-bold text-black text-xs md:text-sm border border-white/5 group"
              >
                {link} 
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
            ))}
          </div>

        </div>
      )}
    </div>
  );
}