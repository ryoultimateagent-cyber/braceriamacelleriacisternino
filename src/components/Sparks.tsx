import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const Spark = ({ delay, xPct, yPct, size, duration, color }: { delay: number; xPct: number; yPct: number; size: number; duration: number; color: string }) => {
  return (
    <>
      {/* LED Dot */}
      <div 
        className="absolute w-[3px] h-[3px] rounded-full z-1"
        style={{ 
          left: `${xPct}%`, 
          top: `${yPct}%`, 
          backgroundColor: color,
          boxShadow: `0 0 10px 2px ${color}`,
          opacity: 0.6
        }}
      />
      {/* Spark Particle */}
      <motion.div
        initial={{ opacity: 0, scale: 0, x: `${xPct}%`, y: `${yPct}%` }}
        animate={{ 
          opacity: [0, 1, 0],
          scale: [0, 1.2, 0.5],
          y: [`${yPct}%`, `${yPct - 15}%`],
          x: [`${xPct}%`, `${xPct + (Math.random() - 0.5) * 8}%`]
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
          boxShadow: `0 0 ${size * 2}px ${color}`,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
    </>
  );
};

const Sparks = () => {
  const sparks = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      delay: Math.random() * 10,
      xPct: Math.random() * 100,
      yPct: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: 4 + Math.random() * 6,
      color: i % 3 === 0 ? '#ff4d00' : (i % 3 === 1 ? '#ffae00' : '#ffea00') // Red, Orange, Yellow
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden h-full w-full opacity-40">
      {sparks.map((spark) => (
        <Spark key={spark.id} {...spark} />
      ))}
    </div>
  );
};

export default Sparks;