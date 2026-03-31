import React, { memo, useMemo } from 'react';
import { useReducedMotion } from "framer-motion";

const FireBackground = memo(() => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[0] overflow-hidden select-none" aria-hidden="true">
      {/* Soft Modern Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/5 blur-[150px] rounded-full animate-pulse delay-1000" />
      
      {/* Grain/Noise Overlay (already in index.css body, but adding here for extra depth if needed) */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none" 
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
    </div>
  );
});

FireBackground.displayName = 'FireBackground';

export default FireBackground;