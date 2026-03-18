"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
//import {GridPattern,getRandomPattern  } from "@/components/ui/background";

// const p = getRandomPattern(10);


interface VideoScrollProps {
  videoSrc?: string;
  enableAnimations?: boolean;
  className?: string;
  startScale?: number;
}

export function VideoScrollHero({
  videoSrc = "/project/Mclaren.mp4",
  enableAnimations = true,
  className = "",
  startScale = 0.50,
}: VideoScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [scrollScale, setScrollScale] = useState(startScale);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!enableAnimations || shouldReduceMotion) return;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      const scrolled = Math.max(0, -rect.top);
      const maxScroll = containerHeight - windowHeight;
      const newProgress = Math.min(scrolled / maxScroll, 1);

      // Scale from startScale to 1
      const newScale = startScale + newProgress * (1 - startScale);

      setScrollScale(newScale);
      setProgress(newProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [enableAnimations, shouldReduceMotion, startScale]);

  const shouldAnimate = enableAnimations && !shouldReduceMotion;

  return (
     
      
    <div className={`relative ${className}`}>
      
          
      {/* Video */}
      <div ref={containerRef} className="relative h-[200vh] bg-background">
        {/* Fixed Video Container */}
        <div className="sticky top-0 w-full h-screen flex items-center justify-center">
           
      
         
          <div
            className="relative flex items-center justify-center will-change-transform w-full h-full z-1"
            style={{
              transform: shouldAnimate ? `scale(${scrollScale})` : "scale(1)",
              transformOrigin: "center center",
            }}
          >
            <section className="relative flex min-h-40 items-center  ">
  
      </section>
            <video
  autoPlay
  loop
  muted
  playsInline
  className={`object-cover transition-all duration-700 ${
    progress >= 1
      ? "absolute top-0 left-0 w-full h-full rounded-none" 
      : "w-[100vw] h-[40vh] sm:h-[50vh] md:h-[90vh] lg:h-[95vh] rounded-2xl"
  }`}
  style={{
    boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
  }}
>
  
  

              <source src={videoSrc} type="video/mp4" />
              
              Your browser does not support the video tag.
            </video>
          

            {/* Video Overlay Content */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center rounded-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="text-center text-white">
                <motion.h1
                  className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.8,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 200,
                    damping: 25,
                  }}
                >
                  {/* Heading */}
                </motion.h1>
                <motion.p
                  className="text-sm md:text-lg lg:text-xl text-white/80 max-w-2xl px-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1.0,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 200,
                    damping: 25,
                  }}
                >
                  {/* Subtext */}
                </motion.p>
              </div>
            </motion.div>
            
          </div>
          
        </div>
      </div>
        
    </div>
  
  );
}
