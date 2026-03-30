import React, { memo, useMemo } from 'react';
import { useReducedMotion } from "framer-motion";

const FireBackground = memo(() => {
  const shouldReduceMotion = useReducedMotion();

  // Generate a stable set of random properties for embers
  const embers = useMemo(() => {
    return Array.from({ length: shouldReduceMotion ? 0 : 35 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 2}px`,
      duration: `${Math.random() * 8 + 5}s`,
      delay: `${Math.random() * 15}s`,
      sway: Math.random() * 80 - 40,
      opacity: Math.random() * 0.4 + 0.2,
      // Some embers are brighter (scoppiettanti)
      isBright: Math.random() > 0.85
    }));
  }, [shouldReduceMotion]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden select-none" aria-hidden="true">
      {/* Background Atmosphere - Fire Base Glow */}
      <div className="absolute -bottom-[20%] left-0 right-0 h-[60%] bg-gradient-to-t from-ember-dark/30 via-ember/10 to-transparent blur-[120px] pointer-events-none mix-blend-plus-lighter" />
      
      {!shouldReduceMotion && (
        <>
          {/* Moving Warm Spotlights */}
          <div className="absolute -bottom-20 left-1/4 w-[600px] aspect-square bg-gradient-to-t from-ember/20 to-transparent blur-[120px] rounded-full animate-fire-glow opacity-50 mix-blend-plus-lighter" />
          <div className="absolute -bottom-20 right-1/4 w-[600px] aspect-square bg-gradient-to-t from-gold-dark/15 to-transparent blur-[120px] rounded-full animate-fire-glow opacity-40 delay-2000 mix-blend-plus-lighter" />

          {/* Embers / Ash */}
          {embers.map((ember) => (
            <div
              key={ember.id}
              className="absolute bottom-0 animate-ember"
              style={{
                left: ember.left,
                '--duration': ember.duration,
                '--delay': ember.delay,
                '--sway': `${ember.sway}px`,
              } as React.CSSProperties}
            >
              <div
                className={`rounded-full ${ember.isBright ? 'bg-gold animate-crackle shadow-[0_0_10px_rgba(212,175,55,0.8)]' : 'bg-ember shadow-[0_0_6px_rgba(184,36,44,0.4)]'}`}
                style={{
                  width: ember.size,
                  height: ember.size,
                  opacity: ember.opacity,
                }}
              />
            </div>
          ))}
        </>
      )}

      {/* Extreme Low Layer Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-ember/30 to-transparent blur-[4px]" />
    </div>
  );
});

FireBackground.displayName = 'FireBackground';

export default FireBackground;