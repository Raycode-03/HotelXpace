"use client";
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap/all";
function Loading() {
  const [progress, setProgress] = useState(0);
  const [showXpace, setShowXpace] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 3;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const step1 = () => {
    gsap.fromTo(
      ".hotel", 
      {opacity:0},
      {
      duration: 0.8,
      scale: 1.2,
      opacity: 1,
       x: -20, 
      ease: "power1.inOut",
       onComplete: () => {
        
        gsap.set(".xpace", { visibility: "visible" });
        gsap.fromTo(
      ".xpace",
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.5, ease: "power1.inOut" }
    );
    },
  }
)
  };

  useEffect(() => {
    step1();
  }, []);
  return (
    <main className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
      <div className="relative flex items-center justify-center">
        {/* Glow */}
        {/* <div className="absolute inset-0 blur-2xl opacity-30">
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-800 rounded-full animate-pulse" />
        </div> */}
         {/* <Image
          src="/logos/hotelxpace.svg"
          alt="Loading"
          fill
          unoptimized
          className="object-contain animate-float"
        />  */}

        <h1 className="text-gold text-5xl md:text-7xl lg:text-9xl flex items-center">
          <span className="hotel">Hotel</span>
          <span
            className="xpace opacity-0 invisible"
          >
            Xpace
          </span>
        </h1>
      </div>
    </main>
  );
}

export default Loading;
