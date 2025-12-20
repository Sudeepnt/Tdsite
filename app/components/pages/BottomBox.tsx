"use client";

import React, { useState, useEffect } from "react";

const phrases = [
  "crodal.",
  "crafted with conviction.",
  "inspired by culture."
];

const SubBox = ({
  title,
  children,
  className = "",
  isDark = false, // Added prop
}: {
  title?: string;
  children?: React.ReactNode;
  className?: string;
  isDark?: boolean;
}) => (
  <div
    className={`
      relative p-2 flex flex-col justify-start 
      border bg-transparent
      min-h-0 md:min-h-[160px] rounded-sm
      ${isDark ? "border-white text-white" : "border-black text-black"}
      ${className}
    `}
  >
    {title && (
      <span className={`text-[10px] font-bold uppercase tracking-[0.3em] mb-4 ${isDark ? "text-white" : "text-black"}`}>
        {title}
      </span>
    )}

    <div className={`text-xs font-medium uppercase tracking-tighter ${isDark ? "text-white" : "text-black"}`}>
      {children}
    </div>
  </div>
);

export default function BottomBox({ isDark = false }: { isDark?: boolean }) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 40 : 80);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  // Dynamic classes for hover states and borders
  const hoverClass = isDark 
    ? "hover:bg-white hover:text-black" 
    : "hover:bg-black hover:text-white";

  return (
    <footer className={`w-full bg-transparent font-sans relative z-10 p-4 md:p-1 flex flex-col gap-1 ${isDark ? "text-white" : "text-black"}`}>
 
      {/* 2. THE TYPEWRITER SECTION */}
      <div className="py-20 md:py-64 flex items-center justify-center w-full px-6 overflow-hidden min-h-[300px] md:min-h-[450px]">
        <h2 className={`text-[11vw] md:text-[7vw] font-black tracking-tighter leading-none text-center uppercase ${isDark ? "text-white" : "text-black"}`}>
          {text}
        </h2>
      </div>

      {/* 3. IDENTITY GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-1 w-full">
        <SubBox isDark={isDark} className="h-32 md:h-40 flex items-start justify-start">
          <img
            src={isDark ? "/crodallogo.png" : "/crodallogoblack.png"}
            alt="Logo"
            className={`w-12 h-12 md:w-14 md:h-14 ${isDark ? "invert" : ""}`}
          />
        </SubBox>
              <SubBox isDark={isDark}>
          <div className="flex flex-col gap-1 italic uppercase tracking-tighter font-semibold">
            <a href="#" className={`${hoverClass} transition-colors duration-300`}>Careers</a>
            <a href="#" className={`${hoverClass} transition-colors duration-300`}>Pitch</a>
          </div>
        </SubBox>
        <SubBox isDark={isDark}>
          <div className="flex flex-col gap-1 uppercase tracking-tighter font-semibold">
            <a href="#" className={`${hoverClass} transition-colors duration-300`}>Twitter</a>
            <a href="#" className={`${hoverClass} transition-colors duration-300`}>LinkedIn</a>
          </div>
        </SubBox>
        <SubBox isDark={isDark}>
          <div className="flex flex-col gap-1 uppercase tracking-tighter font-bold">
            <a href="#" className={`decoration-1 underline-offset-4 ${hoverClass} transition-colors duration-300`}>
              Newsletter
            </a>
          </div>
        </SubBox>
      </div>

      {/* 4. LEGAL BAR */}
      <div className={`w-full border py-6 px-8 flex items-center rounded-sm justify-center ${isDark ? "border-white" : "border-black"}`}>
        <p className={`text-[9px] tracking-[0.5em] font-medium text-center uppercase leading-relaxed ${isDark ? "text-white" : "text-black"}`}>
          Crodal and the Crodal logo are all brands of Crodal Limited. All rights reserved.
        </p>
      </div>

    </footer>
  );
}