
import React, { memo, useMemo } from 'react';

const FireBackground = memo(() => {
  // Generate a stable set of random properties for embers
  const embers = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 4 + 2}px`,
      duration: `${Math.random() * 5 + 3}s`,
      delay: `${Math.random() * 10}s`,
      sway: Math.random() * 100 - 50,
      opacity: Math.random() * 0.4 + 0.3,
      // Some embers are brighter (scoppiettanti)
      isBright: Math.random() > 0.8
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[0] overflow-hidden select-none">
      {/* Dynamic Warm Glow (fire base) */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full max-w-[1200px] aspect-[2/1] bg-gradient-to-t from-ember/40 via-ember/10 to-transparent blur-[80px] rounded-full animate-fire-glow opacity-60" />
      <div className="absolute -bottom-10 left-1/4 w-[400px] aspect-square bg-gradient-to-t from-ember-dark/30 to-transparent blur-[60px] rounded-full animate-fire-glow opacity-40 delay-1000" />
      <div className="absolute -bottom-10 right-1/4 w-[400px] aspect-square bg-gradient-to-t from-gold-dark/20 to-transparent blur-[60px] rounded-full animate-fire-glow opacity-30 delay-2000" />

      {/* Embers / Ash */}
      {embers.map((ember) => (
        <div
          key={ember.id}
          className={`absolute bottom-0 rounded-full animate-ember ${ember.isBright ? 'bg-gold animate-crackle shadow-[0_0_8px_hsl(var(--gold))] shadow-gold/80' : 'bg-ember shadow-[0_0_6px_hsl(var(--ember))] shadow-ember/50'}`}
          style={{
            left: ember.left,
            width: ember.size,
            height: ember.size,
            opacity: ember.opacity,
            '--duration': ember.duration,
            '--delay': ember.delay,
            '--sway': ember.sway,
          } as React.CSSProperties}
        />
      ))}

      {/* Subtle Ash Flakes (darker) */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay pointer-events-none" />
    </div>
  );
});

FireBackground.displayName = 'FireBackground';

export default FireBackground;
