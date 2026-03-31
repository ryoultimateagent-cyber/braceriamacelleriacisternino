import React, { useMemo, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Spark = ({ style }: { style: React.CSSProperties }) => (
  <div
    className="absolute rounded-full pointer-events-none"
    style={{
      ...style,
      boxShadow: "0 0 10px currentColor",
    }}
  />
);

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const sparkCount = isMobile ? 30 : 60;
  const sparks = useMemo(() => {
    const colors = ["#FF6B00", "#CC0000", "#F5C400"];
    return Array.from({ length: sparkCount }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 4 + 1}px`,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: `${Math.random() * 3 + 2}s`,
      delay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.5 + 0.5,
    }));
  }, [sparkCount]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0D0D0D]">
      {/* Sfondo animato - Braci e Scintille */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glow arancione in basso */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[40vh] opacity-30"
          style={{
            background: "linear-gradient(to top, #FF6B00, transparent)",
            filter: "blur(60px)",
          }}
        />
        
        {/* Particelle (Scintille) */}
        <div className="absolute inset-0">
          {sparks.map((spark) => (
            <div
              key={spark.id}
              className="absolute animate-rise rounded-full"
              style={{
                left: spark.left,
                bottom: "-20px",
                width: spark.size,
                height: spark.size,
                backgroundColor: spark.color,
                color: spark.color,
                opacity: spark.opacity,
                boxShadow: `0 0 10px ${spark.color}`,
                animationDuration: spark.duration,
                animationDelay: spark.delay,
                animationIterationCount: "infinite",
                animationTimingFunction: "ease-in",
              }}
            />
          ))}
        </div>
      </div>

      {/* Contenuto Testuale */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 
          className="text-white font-bold tracking-tight mb-4 leading-none"
          style={{
            fontSize: "clamp(2.5rem, 10vw, 5rem)",
            fontFamily: "'DM Sans', 'Inter', sans-serif",
            textShadow: "0 0 30px rgba(255, 107, 0, 0.6)",
          }}
        >
          Macelleria Belvedere
        </h1>
        
        <p 
          className="text-white opacity-85 font-light mb-10"
          style={{
            fontSize: "clamp(1rem, 3vw, 1.5rem)",
            fontFamily: "'DM Sans', 'Inter', sans-serif",
          }}
        >
          Tradizione, qualità e brace — dal 1986 a Putignano
        </p>

        <Button 
          asChild
          className="bg-[#CC0000] hover:bg-[#B30000] text-white px-8 py-6 text-lg font-bold rounded-full transition-transform active:scale-95 shadow-xl"
        >
          <a href="#prenota">Prenota un tavolo</a>
        </Button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes rise {
          0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translateY(-50vh) translateX(calc(sin(1) * 20px));
          }
          100% {
            transform: translateY(-110vh) translateX(calc(cos(1) * 40px)) scale(0);
            opacity: 0;
          }
        }
      `}} />
    </section>
  );
};

export default Hero;