"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full px-8 md:px-16 py-16">
      
      {/* RIGHT-ALIGNED CONTENT */}
      <div className="ml-auto max-w-5xl text-right">
        
        {/* LINKS ROW */}
        <div className="flex flex-wrap justify-end gap-x-10 gap-y-3 text-sm font-medium text-black">
          <span>Twitter →</span>
          <span>Blue sky →</span>
          <span>Instagram →</span>
          <span>LinkedIn →</span>
          <span>Youtube →</span>
          <span>Privacy Policy →</span>
          <span>Cookie Policy →</span>
          <span>Sign up to our newsletter →</span>
        </div>

        {/* COPYRIGHT */}
        <p className="mt-6 text-[10px] uppercase tracking-widest text-gray-400">
          "CRODAL INTERACTIVE", "CRODAL" AND THE CRODAL INTERACTIVE LOGO ARE ALL
            BRANDS OF CRODAL INTERACTIVE LIMITED. ALL RIGHTS RESERVED.
        </p>

      </div>
    </footer>
  );
}
