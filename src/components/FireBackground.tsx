
import React, { memo, useMemo } from 'react';

const FireBackground = memo(() => {
  // Generate a stable set of random properties for embers
  const embers = useMemo(() => {
    return Array.from({ length: 35 }).map((_, i) => ({
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
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[0] overflow-hidden select-none" aria-hidden="true">
      {/* Background Atmosphere - Fire Base Glow */}
      <div className="absolute -bottom-[10%] left-0 right-0 h-[40%] bg-gradient-to-t from-ember-dark/20 via-ember/5 to-transparent blur-[120px] pointer-events-none" />
      
      {/* Moving Warm Spotlights */}
      <div className="absolute -bottom-20 left-1/4 w-[500px] aspect-square bg-gradient-to-t from-ember/15 to-transparent blur-[100px] rounded-full animate-fire-glow opacity-40 mix-blend-screen" />
      <div className="absolute -bottom-20 right-1/4 w-[500px] aspect-square bg-gradient-to-t from-gold-dark/10 to-transparent blur-[100px] rounded-full animate-fire-glow opacity-30 delay-2000 mix-blend-screen" />

      {/* Embers / Ash */}
      {embers.map((ember) => (
        <div
          key={ember.id}
          className={`absolute bottom-0 rounded-full animate-ember ${ember.isBright ? 'bg-gold animate-crackle shadow-[0_0_10px_rgba(212,175,55,0.8)]' : 'bg-ember shadow-[0_0_6px_rgba(184,36,44,0.4)]'}`}
          style={{
            left: ember.left,
            width: ember.size,
            height: ember.size,
            opacity: ember.opacity,
            '--duration': ember.duration,
            '--delay': ember.delay,
            '--sway': `${ember.sway}px`,
          } as React.CSSProperties}
        />
      ))}

      {/* Extreme Low Layer Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-ember/30 to-transparent blur-[4px]" />
    </div>
  );
});

FireBackground.displayName = 'FireBackground';

export default FireBackground;
