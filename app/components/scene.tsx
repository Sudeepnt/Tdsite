"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, Sphere, RoundedBox, Outlines } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import * as THREE from "three";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const CrodalLogo3D = ({ activePage }: { activePage: string }) => {
  const groupRef = useRef<THREE.Group>(null);
  const internalMotionRef = useRef<THREE.Group>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // --- MATERIAL: Piano Black ---
  const shiningBorderMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: "#080808",       
      roughness: 0.2,         
      metalness: 0.5,         
      clearcoat: 1.0,         
      clearcoatRoughness: 0.1,
      reflectivity: 0.8,
    });
  }, []);

  // --- ALIVE MOTION ---
  useFrame((state, delta) => {
    if (!internalMotionRef.current) return;
    
    let targetRotX = 0;
    let targetRotY = 0;
    let targetRotZ = 0;

    if (activePage === "home") {
      const scrollY = window.scrollY;

      // RESET LOGIC: 
      // If user scrolls even 1px, reset mouse memory to 0 (Center).
      // This ensures it returns to the starting position when scrolling back up.
      if (scrollY > 1) {
        mouseRef.current = { x: 0, y: 0 };
      }

      // Scroll Influence: Fade out mouse control quickly as we scroll down
      const scrollFactor = Math.max(0, 1 - scrollY / 50);

      if (scrollFactor > 0) {
        const { x, y } = mouseRef.current;
        
        // 1. REDUCED SENSITIVITY
        // Brought down from 3.5 to 1.0. It moves, but not "too much".
        let rawX = y * 1.0;
        let rawY = x * 1.0;

        // Limits: Clamp at 0.5 radians (~28 degrees) max tilt
        const LIMIT = 0.5;
        
        targetRotX = THREE.MathUtils.clamp(rawX, -LIMIT, LIMIT) * scrollFactor;
        targetRotY = THREE.MathUtils.clamp(rawY, -LIMIT, LIMIT) * scrollFactor;
        
        // Slight banking, also reduced sensitivity
        targetRotZ = THREE.MathUtils.clamp(-x * 0.3, -0.2, 0.2) * scrollFactor;
      }
    }

    // 2. SMOOTHER ANIMATION
    // Reduced lerp speed from 8.0 to 4.0. 
    // This makes it feel "weighted" and smooth, not twitchy.
    internalMotionRef.current.rotation.x = THREE.MathUtils.lerp(internalMotionRef.current.rotation.x, targetRotX, delta * 4.0);
    internalMotionRef.current.rotation.y = THREE.MathUtils.lerp(internalMotionRef.current.rotation.y, targetRotY, delta * 4.0);
    internalMotionRef.current.rotation.z = THREE.MathUtils.lerp(internalMotionRef.current.rotation.z, targetRotZ, delta * 4.0);
  });

  // --- GSAP SCROLL ---
  useGSAP(() => {
    if (!groupRef.current) return;
    
    gsap.killTweensOf(groupRef.current);
    gsap.killTweensOf(groupRef.current.position);
    gsap.killTweensOf(groupRef.current.rotation);
    gsap.killTweensOf(groupRef.current.scale);
    ScrollTrigger.getAll().forEach(t => t.kill());

    const isMobile = window.innerWidth < 768;

    if (activePage === "home") {
      const startScale = isMobile ? 0.5 : 0.85;
      const endScale = startScale / 2; 

      gsap.set(groupRef.current.scale, { x: startScale, y: startScale, z: startScale });
      gsap.set(groupRef.current.position, { x: 0, y: 0, z: 0 });
      gsap.set(groupRef.current.rotation, { x: 0, y: 0, z: 0 }); 

      ScrollTrigger.refresh();

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.body, 
          start: "top top",       
          end: "+=100vh",         
          scrub: 1,               
        }
      });

      // Scroll Animation: 1 Full Rotation
      tl.to(groupRef.current.rotation, { 
          y: Math.PI * 2, 
          x: 0, 
          z: 0,            
          duration: 1, 
          ease: "none"
      }, 0);

      tl.to(groupRef.current.scale, { 
        x: endScale, 
        y: endScale, 
        z: endScale, 
        duration: 1 
      }, 0);

    } else {
        const sideScale = isMobile ? 0.3 : 0.4;
        const sidePos = [isMobile ? 1.5 : 3.5, 0, -2];
        
        gsap.to(groupRef.current.scale, { x: sideScale, y: sideScale, z: sideScale, duration: 1.5, ease: "power3.inOut" });
        gsap.to(groupRef.current.position, { x: sidePos[0], y: sidePos[1], z: sidePos[2], duration: 1.5, ease: "power3.inOut" });
        gsap.to(groupRef.current.rotation, { x: 0, y: 0, z: 0, duration: 1.5 });
    }
  }, [activePage]);

  // --- GEOMETRY SETTINGS ---
  const THICKNESS = 0.55; 
  const HUB_RADIUS = 0.275;     
  const CORNER_RADIUS = 0.25;   
  const PETAL_LEN = 1.7;
  const BASE_LEN = 3.8;
  const BORDER_COLOR = "#cccccc"; 
  const BORDER_THICKNESS = 2;

  return (
    <group dispose={null} ref={groupRef}>
      <group ref={internalMotionRef}>
        <Center>
            {/* Center Sphere */}
            <Sphere args={[HUB_RADIUS, 32, 32]} position={[0, 0, 0]} material={shiningBorderMaterial}>
                <Outlines thickness={BORDER_THICKNESS} color={BORDER_COLOR} />
            </Sphere>

            {/* Main Horizontal Bar */}
            <RoundedBox args={[BASE_LEN, THICKNESS, THICKNESS]} radius={CORNER_RADIUS} smoothness={8} position={[0, 0, 0]} material={shiningBorderMaterial}>
                <Outlines thickness={BORDER_THICKNESS} color={BORDER_COLOR} />
            </RoundedBox>

            {/* Top Vertical Bar */}
            <RoundedBox args={[THICKNESS, PETAL_LEN, THICKNESS]} radius={CORNER_RADIUS} smoothness={8} position={[0, PETAL_LEN / 2, 0]} material={shiningBorderMaterial}>
                <Outlines thickness={BORDER_THICKNESS} color={BORDER_COLOR} />
            </RoundedBox>

            {/* Angled Bar 1 */}
            <group rotation={[0, 0, -Math.PI / 4]}>
                <RoundedBox args={[THICKNESS, PETAL_LEN, THICKNESS]} radius={CORNER_RADIUS} smoothness={8} position={[0, PETAL_LEN / 2, 0]} material={shiningBorderMaterial}>
                    <Outlines thickness={BORDER_THICKNESS} color={BORDER_COLOR} />
                </RoundedBox>
            </group>

            {/* Angled Bar 2 */}
            <group rotation={[0, 0, Math.PI / 4]}>
                <RoundedBox args={[THICKNESS, PETAL_LEN, THICKNESS]} radius={CORNER_RADIUS} smoothness={8} position={[0, PETAL_LEN / 2, 0]} material={shiningBorderMaterial}>
                    <Outlines thickness={BORDER_THICKNESS} color={BORDER_COLOR} />
                </RoundedBox>
            </group>
        </Center>
      </group>
    </group>
  );
};

export default function Scene({ activePage }: { activePage: string }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[1] pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 32 }} 
        dpr={[1, 2]}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }} 
      >
        <ambientLight intensity={1.5} color="#ffffff" />
        <directionalLight position={[5, 5, 5]} intensity={0.5} color="#ffffff" />
        
        {/* Top/Back Light */}
        <spotLight 
          position={[0, 10, -5]} 
          intensity={8.0}        
          angle={0.5}
          penumbra={1}
          color="#ffffff"       
          target-position={[0, 0, 0]}
        />
        
        {/* Bottom Light - CHANGED TO WHITE */}
        <spotLight 
          position={[0, -10, -5]} 
          intensity={5.0} 
          color="#ffffff"  // Was #3035e6 (Blue)
          angle={0.5} 
        />

        <CrodalLogo3D activePage={activePage} />
      </Canvas>
    </div>
  );
}