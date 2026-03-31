import React, { useMemo, useEffect, useState } from "react";

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
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;700&display=swap');
        
        @keyframes rise {
          0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          100% {
            transform: translateY(-120vh) translateX(var(--drift)) scale(0);
            opacity: 0;
          }
        }

        @keyframes flicker {
          0%, 100% { opacity: 0.25; filter: blur(80px); }
          50% { opacity: 0.45; filter: blur(90px); }
        }

        /* Fix Header colors over the dark hero without editing Header.tsx */
        header:not(.bg-white\/70) .text-foreground,
        header:not(.bg-white\/70) .text-muted-foreground,
        header:not(.bg-white\/70) span,
        header:not(.bg-white\/70) a {
          color: rgba(255, 255, 255, 0.9) !important;
        }
        header:not(.bg-white\/70) {
          border-color: rgba(255, 255, 255, 0.1) !important;
        }
      `}} />

      {/* Sfondo animato - Braci e Scintille */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Glow arancione in basso */}
        <div 
          className="absolute bottom-[-10vh] left-0 right-0 h-[60vh] animate-[flicker_3s_infinite_ease-in-out]"
          style={{
            background: "linear-gradient(to top, #FF6B00 0%, #CC0000 30%, transparent 100%)",
          }}
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
          className="text-[#FFFFFF] font-bold tracking-tight mb-4 leading-tight"
          style={{
            fontSize: "clamp(2.5rem, 10vw, 5rem)",
            fontFamily: "'DM Sans', sans-serif",
            textShadow: "0 0 30px rgba(255, 107, 0, 0.6)",
          }}
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

        <a 
          href="#prenota" 
          className="inline-block bg-[#CC0000] hover:bg-[#B30000] text-[#FFFFFF] px-10 py-5 text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_10px_30px_-10px_rgba(204,0,0,0.5)] focus-visible:ring-4 focus-visible:ring-[#CC0000]/50 outline-none"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          aria-label="Prenota un tavolo ora"
        >
          Prenota un tavolo
        </a>
      </div>
    </section>
  );
};

export default Hero;