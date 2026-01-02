"use client";

import React, { useState, useEffect } from "react";

interface HeaderProps {
  onNavigate: (view: "home" | "about" | "pitch") => void;
  currentView: "home" | "about" | "pitch";
}

export default function Header({ onNavigate, currentView }: HeaderProps) {
  const [navItems, setNavItems] = useState<Array<{ label: string; action: () => void }>>([]);

  useEffect(() => {
    fetch('/data/content.json')
      .then(res => res.json())
      .then(data => {
        if (data?.home?.header?.navItems) {
          const loadedItems = data.home.header.navItems.map((item: any, index: number) => {
            if (index === 0 || index === 1) {
              return { label: item.label, action: () => window.location.reload() };
            } else if (index === 2) {
              return { label: item.label, action: () => onNavigate("about") };
            } else {
              return { label: item.label, action: () => onNavigate("pitch") };
            }
          });
          setNavItems(loadedItems);
        }
      })
      .catch(error => console.error('Header load error:', error));
  }, [onNavigate]);

  const isWhiteTheme = currentView === "about";
  const themeClasses = isWhiteTheme
    ? "border-white text-white hover:bg-white hover:text-black"
    : "border-black text-black hover:bg-black hover:text-white";

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