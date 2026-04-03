import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const Spark = ({ delay, xPct, yPct, size, duration, color }: { delay: number; xPct: number; yPct: number; size: number; duration: number; color: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, x: `${xPct}vw`, y: `${yPct}vh` }}
      animate={{ 
        opacity: [0, 1, 0.8, 0],
        scale: [0, 1.5, 1, 0],
        y: [`${yPct}vh`, `${yPct - 25}vh`],
        x: [`${xPct}vw`, `${xPct + (Math.random() - 0.5) * 15}vw`]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "easeOut"
      }}
      style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: color,
        boxShadow: `0 0 ${size * 4}px ${color}, 0 0 ${size * 8}px ${color}`,
        pointerEvents: 'none',
        zIndex: 5,
        filter: 'blur(0.5px)'
      }}
    />
  );
};

const Sparks = () => {
  const sparks = useMemo(() => {
    return Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      delay: Math.random() * 8,
      xPct: Math.random() * 100,
      yPct: 60 + Math.random() * 40, // More concentrated at the bottom
      size: Math.random() * 3 + 1,
      duration: 3 + Math.random() * 5,
      color: i % 4 === 0 ? '#ff3300' : (i % 4 === 1 ? '#ff9900' : (i % 4 === 2 ? '#ffcc00' : '#ffffff')) // Red, Orange, Gold, White
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden h-screen w-screen z-[100] opacity-80">
      {sparks.map((spark) => (
        <Spark key={spark.id} {...spark} />
      ))}
      
      {/* Bottom Glowing Mist */}
      <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-red-600/10 via-orange-500/5 to-transparent blur-3xl pointer-events-none" />
    </div>
  );
};

export default Sparks;