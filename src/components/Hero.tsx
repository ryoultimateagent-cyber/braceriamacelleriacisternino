import React, { useMemo, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const sparkCount = isMobile ? 25 : 50;
  
  const sparks = useMemo(() => {
    const colors = ["#FF6B00", "#CC0000", "#F5C400"];
    return Array.from({ length: sparkCount }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1.5}px`,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: `${Math.random() * 4 + 3}s`,
      delay: `${Math.random() * 8}s`,
      drift: `${(Math.random() - 0.5) * 150}px`,
      opacity: Math.random() * 0.4 + 0.6,
    }));
  }, [sparkCount]);

  return (
    <section 
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0D0D0D]"
    >
      {/* Import fonts if not present */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;700&display=swap');
        
        @keyframes rise {
          0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(-110vh) translateX(var(--drift)) scale(0);
            opacity: 0;
          }
        }

        @keyframes flicker {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
      `}} />

      {/* Sfondo animato - Braci e Scintille */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Glow arancione in basso che pulsa/flickera */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[50vh] animate-[flicker_4s_infinite_ease-in-out]"
          style={{
            background: "linear-gradient(to top, #FF6B00 0%, #CC0000 20%, transparent 100%)",
            filter: "blur(80px)",
          }}
        />
        
        {/* Particelle (Scintille) */}
        {sparks.map((spark) => (
          <div
            key={spark.id}
            className="absolute rounded-full"
            style={{
              left: spark.left,
              bottom: "-20px",
              width: spark.size,
              height: spark.size,
              backgroundColor: spark.color,
              opacity: spark.opacity,
              boxShadow: `0 0 10px ${spark.color}, 0 0 20px ${spark.color}`,
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
          className="text-[#FFFFFF] font-bold tracking-tight mb-4 leading-none"
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
            lineHeight: "1.4",
          }}
        >
          Tradizione, qualità e brace — dal 1986 a Putignano
        </p>

        <a 
          href="#prenota" 
          className="inline-block bg-[#CC0000] hover:bg-[#B30000] text-white px-10 py-5 text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(204,0,0,0.4)]"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Prenota un tavolo
        </a>
      </div>
    </section>
  );
};

export default Hero;