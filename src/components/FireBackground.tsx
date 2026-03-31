import React, { memo, useMemo } from 'react';
import heroBg from "@/assets/hero-bg.jpg";

const FireBackground = memo(() => {
  const sparks = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${6 + Math.random() * 10}s`,
      size: `${1 + Math.random() * 3}px`,
      sway: `${(Math.random() - 0.5) * 100}px`,
      opacity: 0.3 + Math.random() * 0.5,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden select-none bg-black" aria-hidden="true">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover grayscale opacity-20 scale-110"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Background Gradients Layer */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-[20%] left-[-10%] w-[60%] h-[60%] bg-primary/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[50%] h-[50%] bg-accent/5 blur-[120px] rounded-full animate-pulse delay-700" />
        <div className="absolute top-[40%] right-[10%] w-[40%] h-[40%] bg-red-900/10 blur-[130px] rounded-full animate-pulse delay-1000" />
      </div>
      
      {/* Animated Sparks Layer */}
      <div className="absolute inset-0 z-20">
        {sparks.map((spark) => (
          <div
            key={spark.id}
            className="absolute bottom-[-10px] bg-primary rounded-full animate-ember"
            style={{
              left: spark.left,
              width: spark.size,
              height: spark.size,
              opacity: spark.opacity,
              '--delay': spark.delay,
              '--duration': spark.duration,
              '--sway': spark.sway,
              boxShadow: `0 0 10px 1px rgba(255, 61, 0, 0.6)`,
              willChange: "transform, opacity",
            } as any}
          />
        ))}
      </div>

      {/* Grain/Noise Overlay Layer */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-30" 
        style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} 
      />
    </div>
  );
});

FireBackground.displayName = 'FireBackground';

export default FireBackground;