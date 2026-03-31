import React, { useMemo, useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const sparkCount = 45; // Fixed count, will hide some on mobile via CSS
  
  const sparks = useMemo(() => {
    const colors = ["#FF6B00", "#CC0000", "#F5C400"];
    return Array.from({ length: sparkCount }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2.5 + 1.5}px`,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: `${Math.random() * 5 + 3}s`,
      delay: `${Math.random() * 8}s`,
      drift: `${(Math.random() - 0.5) * 200}px`,
      opacity: Math.random() * 0.4 + 0.6,
      mobileHidden: i > 20, // Only show first 20 on mobile
    }));
  }, []);

  return (
    <section 
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0D0D0D]"
    >

      {/* Sfondo animato - Braci e Scintille */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Glow arancione in basso */}
        <div 
          className="absolute bottom-[-10vh] left-0 right-0 h-[60vh] animate-[flicker_3s_infinite_ease-in-out] hero-glow-bottom"
        />
        
        {/* Particelle (Scintille) */}
        {sparks.map((spark) => (
          <div
            key={spark.id}
            className={`absolute rounded-full ${spark.mobileHidden ? "hidden md:block" : "block"}`}
            style={{
              left: spark.left,
              bottom: "-20px",
              width: spark.size,
              height: spark.size,
              backgroundColor: spark.color,
              opacity: spark.opacity,
              boxShadow: `0 0 8px ${spark.color}, 0 0 15px ${spark.color}`,
              animationName: "rise",
              animationDuration: spark.duration,
              animationDelay: spark.delay,
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-out",
              // @ts-ignore
              "--drift": spark.drift,
            }}
          />
        ))}
      </div>

      {/* Contenuto Testuale Centrato */}
      <div className="relative z-10 text-center px-6 max-w-5xl flex flex-col items-center">
        <h1 
          className="text-[#FFFFFF] font-bold tracking-tight mb-4 leading-tight text-[clamp(2.5rem,10vw,5rem)] font-dm-sans hero-text-shadow"
        >
          Macelleria Belvedere
        </h1>
        
        <p 
          className="text-[#FFFFFF] opacity-[0.85] font-light mb-12 max-w-2xl"
          style={{
            fontSize: "clamp(1rem, 3vw, 1.5rem)",
            fontFamily: "'DM Sans', sans-serif",
            lineHeight: "1.5",
          }}
        >
          Tradizione, qualità e brace — dal 1986 a Putignano
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: "0 15px 40px -10px rgba(204,0,0,0.6)" }}
            whileTap={{ scale: 0.95 }}
            href="#prenota" 
            className="inline-block bg-[#CC0000] hover:bg-[#B30000] text-[#FFFFFF] px-10 py-5 text-lg font-bold rounded-full transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(204,0,0,0.5)] focus-visible:ring-4 focus-visible:ring-[#CC0000]/50 outline-none"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            aria-label="Prenota un tavolo ora"
          >
            Prenota un tavolo
          </motion.a>
          
          <motion.a 
            whileHover={{ scale: 1.05, border: "2px solid rgba(255,255,255,0.8)" }}
            whileTap={{ scale: 0.95 }}
            href="#menu" 
            className="inline-block border-2 border-white/30 text-[#FFFFFF] hover:bg-white/10 px-10 py-5 text-lg font-bold rounded-full transition-all duration-300 focus-visible:ring-4 focus-visible:ring-white/20 outline-none"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            aria-label="Sfoglia il nostro menù"
          >
            Scopri il Menù
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;