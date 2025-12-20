"use client";

import React from "react";

interface HeaderProps {
  onNavigate: (view: "home" | "about" | "pitch") => void;
  currentView: "home" | "about" | "pitch";
}

export default function Header({ onNavigate, currentView }: HeaderProps) {
  // Logic: About page is dark (needs white), Home & Pitch are light (need black)
  const isWhiteTheme = currentView === "about";

  const themeClasses = isWhiteTheme
    ? "border-white text-white hover:bg-white hover:text-black"
    : "border-black text-black hover:bg-black hover:text-white";

  const navItems = [
    { label: "Crodal", action: () => window.location.reload() },
    { label: "Projects", action: () => window.location.reload() },
    { label: "Explore", action: () => onNavigate("about") },
    { label: "Pitch Us", action: () => onNavigate("pitch") },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[100] p-4 md:p-1">
      <nav className="grid grid-cols-2 md:grid-cols-4 gap-1 w-full">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={item.action}
            className={`
              relative h-14 p-2
              flex items-start justify-start  /* Aligns text to top-left corner */
              bg-transparent
              border font-bold text-sm uppercase tracking-wide
              transition-all duration-300
              rounded-sm                      /* Small rounding (approx 6px) */
              ${themeClasses}
            `}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}