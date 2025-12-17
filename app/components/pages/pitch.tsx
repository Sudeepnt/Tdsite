"use client";

import React from "react";
import Image from "next/image";

export default function Pitch() {
  const socialLinks = ["Twitter", "Blue sky", "Instagram", "LinkedIn", "Youtube", "Newsletter"];

  return (
    // UPDATED: Reduced 'pt-24' to 'pt-10' to remove excess top space
    <div className="relative w-full min-h-screen bg-[#F0F0F0] text-[#1a1a1a] font-sans pt-10 px-6 md:px-16 overflow-y-auto z-40 selection:bg-[#3035e6] selection:text-white">
      
      {/* GRID LAYOUT */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[100px_1fr] lg:grid-cols-[200px_1fr] gap-8 md:gap-16">
        
        {/* LEFT COLUMN: Crodal Logo */}
        {/* Removed 'pt-1' to align better with the title text baseline */}
        <div className="hidden md:block">
            <div className="relative w-full h-10 flex items-center"> 
                 <Image 
                   src="/crodallogoabout.png"
                   alt="Crodal Logo"
                   width={100}
                   height={40}
                   className="object-contain object-left"
                 />
            </div>
        </div>

        {/* RIGHT COLUMN: Content */}
        <div className="max-w-2xl flex flex-col items-start pb-24">
            
            {/* Mobile Logo (Only visible on small screens) */}
            <div className="md:hidden mb-8 w-full">
                 <Image 
                   src="/crodallogoabout.png"
                   alt="Crodal Logo"
                   width={90}
                   height={36}
                   className="object-contain object-left"
                 />
            </div>

            {/* Title - Cobalt Blue, Bold */}
            <h1 className="text-3xl md:text-4xl font-bold text-[#3035e6] mb-12 tracking-tight leading-none">
                Inbound Form
            </h1>

            {/* Intro Text - Medium Weight */}
            <div className="space-y-8 text-lg md:text-[1.15rem] leading-[1.5] font-semibold text-[#222]">
                
                <p>
                    We understand that pitching can be challenging, so we've got some useful tips below. Please read through this page in full before progressing to help make your submission the best it can be.
                </p>

                {/* Bullets - Custom Square Bullets */}
                <ul className="space-y-3">
                    <li className="flex gap-4 items-start">
                        <span className="mt-[0.6em] min-w-[5px] h-[5px] bg-[#222] block flex-shrink-0"></span>
                        <span>
                            <span className="font-bold text-black">One of our core values is “Hands Off.”</span> This means we want to understand how you will manage everything from development to the successful release of your project.
                        </span>
                    </li>
                    <li className="flex gap-4 items-start">
                        <span className="mt-[0.6em] min-w-[5px] h-[5px] bg-[#222] block flex-shrink-0"></span>
                        <span>
                            <span className="font-bold text-black">Be confident and passionate about your project.</span> Tell us what you want to make and what sets it apart, not what you think we want you to make.
                        </span>
                    </li>
                    <li className="flex gap-4 items-start">
                        <span className="mt-[0.6em] min-w-[5px] h-[5px] bg-[#222] block flex-shrink-0"></span>
                        <span>
                            <span className="font-bold text-black">Be concise with your pitch deck and please make it easy to digest.</span> If you want to go deep on game systems, it would be best to attach that as a separate document (like a Game Design Document or similar).
                        </span>
                    </li>
                    <li className="flex gap-4 items-start">
                        <span className="mt-[0.6em] min-w-[5px] h-[5px] bg-[#222] block flex-shrink-0"></span>
                        <span>
                            <span className="font-bold text-black">Demo {'>'} Video {'>'} Concept Art {'>'} Words:</span> we prioritize projects that have something playable or a proof of concept to show; and are generally unable to assess projects without a build.
                        </span>
                    </li>
                </ul>

                <p>
                    The form below will include all the information that we require to assess your title. Please read through before submitting.
                </p>

                {/* Note Section - Italicized, Heavy */}
                <p className="italic font-bold text-[#333] opacity-90">
                    Note: Crodal and Kowloon specialise in funding premium PC and Console projects. We are open to receiving pitches for AR/VR and mobile-first titles, but we will not be supporting content tied to blockchain, NFTs, or advergaming.
                </p>

            </div>

            {/* Button - Large Blue Block */}
            <div className="mt-16 w-full max-w-md">
                <button className="w-full bg-[#3035e6] hover:bg-[#2024b0] text-white text-left pl-6 py-5 rounded-[4px] font-bold text-xl transition-all duration-300">
                    Click here to start
                </button>
            </div>
            
            {/* Footer / Socials - Aligned with content */}
            <div className="w-full mt-32">
                 <div className="flex flex-wrap gap-x-8 gap-y-2">
                    {socialLinks.map((link, i) => (
                        <a key={i} href="#" className="text-xs font-bold text-black hover:text-[#3035e6] transition-colors uppercase tracking-wider">
                            {link} &rarr;
                        </a>
                    ))}
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}