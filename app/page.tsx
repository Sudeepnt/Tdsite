"use client";

import { useState } from "react";
import Scene from "./components/scene";
import FloatingMenu from "./components/FloatingMenu";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Pitch from "./components/pages/pitch";
import Form from "./components/pages/form";



export default function Page() {
  const [activePage, setActivePage] = useState("home");

  return (
    // UPDATED: bg-white (because your logo is black). 
    <div className="relative w-full min-h-screen bg-white text-black font-sans selection:bg-[#3035e6] selection:text-white overflow-x-hidden">
      
      {/* 1. THE 3D SCENE - Rendered ONCE here. Fixed in background. */}
      <Scene activePage={activePage} />

      <FloatingMenu setActivePage={setActivePage} />

      {/* 4. Main Page Content */}
      <main className="relative z-10 w-full transition-opacity duration-500 pointer-events-auto">
        {activePage === "home" && <Home />}
        {activePage === "about" && <About />}
        {activePage === "pitch" && <Pitch />}
        {activePage === "form" && <Form />}

      </main>

    </div>
  );
}