"use client";

import React from "react";
import Image from "next/image";
import BottomBox from "./BottomBox";
 

export default function About() {
  const socialLinks = [
    {
      col: ["Twitter", "Privacy Policy"]
    },
    {
      col: ["Blue sky", "Cookie Policy"]
    },
    {
      col: ["Instagram", "Sign up to our newsletter"]
    },
    {
      col: ["LinkedIn"]
    },
    {
      col: ["Youtube"]
    }
  ];

  return (
    // MAIN CONTAINER: Black Background, White Text
      <div className="relative w-full bg-black text-white min-h-screen pt-24 z-40 font-sans selection:bg-white selection:text-black">

      <div className="w-full md:w-1/3 mb-12 md:mb-0 sticky top-12 px-6 md:px-16">
          <Image 
            src="/crodallogoabout.png" 
            alt="Crodal About Logo" 
            width={180} 
            height={60} 
            className="object-contain invert"
          />
        </div>

    {/* --- INTRO SECTION --- */}
        <section className="w-full px-6 md:px-16 mt-32 mb-40 flex justify-end">
          
          {/* RIGHT-ALIGNED TEXT */}
          <div className="w-full md:w-1/2 flex flex-col gap-8 text-lg md:text-xl font-medium leading-relaxed text-gray-200 text-right">
            <p>
              We are an AI-native software company that builds intelligent products alongside founders.
              Crodal partners through a co-creation model—working closely with leadership teams, sharing ownership, and shaping strategy—while preserving creative and technical independence.
              Together, we design, build, and scale AI-driven software that is both impactful and commercially successful.
            </p>
            <p>
              We spent a lot of time thinking about what our values as a company are. They inform every decision we make 
              and we wanted to ensure we got them right. We’re always changing but these ideas are foundational to who we are.
            </p>
          </div>

        </section>


     
     



{/* --- VALUES SECTION --- */}
      <section className="w-full flex flex-col items-center gap-24 mb-32 py-12">
 
        {/* 1. CURIOSITY (Updated to object-contain) */}
        <div className="w-full flex flex-col items-center group">
          {/* Text */}
          <div className="w-full px-6 md:px-16 text-center mb-10">
            <p className="text-xl md:text-3xl font-bold leading-tight text-white max-w-6xl mx-auto">
              1. Curiosity, creativity and intellectual agility. Original thinking and collaboration are at the core of the organization. Strong voices and unique ideas are valued in everything we do.
            </p>
          </div>

          {/* 
             FIX: Changed className="object-cover" to "object-contain".
             This ensures the whole image fits inside, so the text ends aren't cut off.
          */}
          <div className="w-[90%] md:w-[80%] h-[350px] md:h-[650px] relative rounded-3xl overflow-hidden shadow-2xl bg-black">
             <Image
                src="/About1.png"
                alt="Curiosity"
                fill
                className="object-contain transition-transform duration-700 group-hover:scale-105"
                priority
              />
          </div>
        </div>
   {/* 2. SAVOIR FAIRE */}
        <div className="w-full flex flex-col items-center group">
            <div className="w-full px-6 md:px-16 text-center mb-10">
                <p className="text-xl md:text-3xl font-bold leading-tight text-white max-w-6xl mx-auto">
                    2. Savoir Faire. We celebrate people who take pride in their craft, giving them the space to improve, the resources to flourish, and opportunities to share their expertise.
                </p>
            </div>

          <div className="w-[90%] md:w-[80%] h-[350px] md:h-[650px] relative rounded-3xl overflow-hidden shadow-2xl bg-black">
             <Image
                src="/About3.png"
                alt="Savoir Faire"
                fill
                // UPDATED: object-contain ensures full image is visible
                className="object-contain transition-transform duration-700 group-hover:scale-105"
                priority
              />
          </div>
        </div>

        {/* 3. SUPPORTING */}
        <div className="w-full flex flex-col items-center group">
            <div className="w-full px-6 md:px-16 text-center mb-10">
                <p className="text-xl md:text-3xl font-bold leading-tight text-white max-w-6xl mx-auto">
                    3. Supporting and elevating each other. We nurture a vibrant, inclusive community where people feel safe, respected and empowered.
                </p>
            </div>

          <div className="w-[90%] md:w-[80%] h-[350px] md:h-[650px] relative rounded-3xl overflow-hidden shadow-2xl bg-black">
             <Image
                src="/About2.png"
                alt="Supporting"
                fill
                // UPDATED: object-contain ensures full image is visible
                className="object-contain transition-transform duration-700 group-hover:scale-105"
                priority
              />
          </div>
        </div>

      </section>



















          <section className="w-full px-6 md:px-16 mb-24 text-center">
            <a
              href="#"
              className="inline-block w-full max-w-7xl text-2xl md:text-4xl font-bold underline hover:underline decoration-white underline-offset-8 leading-tight text-white"
            >
              If any of this sounds like something you'd like to be a part of, we'd love to hear from you! Check out our vacancies over on our careers portal &rarr;
            </a>
          </section>

 
 
<BottomBox isDark={true} /> 


    </div>
  );
}