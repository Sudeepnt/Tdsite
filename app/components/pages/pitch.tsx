"use client";

import React from "react";
import Image from "next/image";
import BottomBox from "./BottomBox";

export default function Pitch() {
  const socialLinks = ["Twitter", "Blue sky", "Instagram", "LinkedIn", "Youtube", "Newsletter"];

  return (
    <div className="relative w-full min-h-screen bg-[#F0F0F0] text-[#1a1a1a] font-sans pt-22 z-40 selection:bg-[#3035e6] selection:text-white overflow-x-hidden">
      
      {/* 1. CENTERED CONTENT SECTION */}
      <div className="w-full px-6 md:px-16 flex flex-col items-center">
        
        {/* Logo - Centered above the text */}
        <div className="mb-12 flex justify-start w-full">
            <Image 
              src="/crodallogoabout.png"
              alt="Crodal Logo"
              width={120}
              height={48}
              className="object-contain"
            />
        </div>

        {/* Text Wrapper - Constrained for readability but centered on page */}
        <div className="w-full max-w-2xl flex flex-col items-start pb-24">
            
            {/* Title - Cobalt Blue */}
            <h1 className="text-3xl md:text-5xl font-bold text-[#3035e6] mb-12 tracking-tight leading-none">
                Inbound Form
            </h1>

            {/* Intro Text */}
            <div className="space-y-8 text-lg md:text-[1.15rem] leading-[1.5] font-semibold text-[#222]">
                <p>
                    We understand that pitching can be challenging, so we've got some useful tips below. 
                    Please read through this page in full before progressing to help make your submission the best it can be.
                </p>

                {/* Bullets */}
                <ul className="space-y-4">
                    <li className="flex gap-4 items-start">
                        <span className="mt-[0.6em] min-w-[6px] h-[6px] bg-[#222] block flex-shrink-0"></span>
                        <span>
                            <span className="font-bold text-black">One of our core values is “Hands Off.”</span> This means we want to understand how you will manage everything from development to the successful release of your project.
                        </span>
                    </li>
                    <li className="flex gap-4 items-start">
                        <span className="mt-[0.6em] min-w-[6px] h-[6px] bg-[#222] block flex-shrink-0"></span>
                        <span>
                            <span className="font-bold text-black">Be confident and passionate about your project.</span> Tell us what you want to make and what sets it apart.
                        </span>
                    </li>
                    <li className="flex gap-4 items-start">
                        <span className="mt-[0.6em] min-w-[6px] h-[6px] bg-[#222] block flex-shrink-0"></span>
                        <span>
                            <span className="font-bold text-black">Be concise with your pitch deck.</span> If you want to go deep on game systems, attach that as a separate document.
                        </span>
                    </li>
                    <li className="flex gap-4 items-start">
                        <span className="mt-[0.6em] min-w-[6px] h-[6px] bg-[#222] block flex-shrink-0"></span>
                        <span>
                            <span className="font-bold text-black">Demo {'>'} Video {'>'} Concept Art:</span> we prioritize projects that have something playable or a proof of concept to show.
                        </span>
                    </li>
                </ul>

                <p>
                    The form below will include all the information that we require to assess your title. Please read through before submitting.
                </p>

                <p className="italic font-bold text-[#333] opacity-90 border-l-4 border-[#3035e6] pl-4 py-2">
                    Note: Crodal and Kowloon specialise in funding premium PC and Console projects. We do not support content tied to blockchain or NFTs.
                </p>
            </div>

            {/* Button */}
            <div className="mt-16 w-full">
                <button className="w-full bg-[#3035e6] hover:bg-black text-white text-left pl-6 py-6 rounded-[2px] font-bold text-xl transition-all duration-500 group flex justify-between items-center pr-6">
                    Click here to start
                    <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
                </button>
            </div>
        
        </div>
      </div>

      {/* 2. FULL WIDTH FOOTER SECTION */}
      {/* Moved outside the flex-center div so it takes 100% width */}
      <div className="w-full mt-20">
        <BottomBox isDark={false} />  
      </div>

    </div>
  );
}