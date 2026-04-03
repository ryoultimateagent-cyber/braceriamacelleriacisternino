import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const Spark = ({ delay, x, y, size, duration, color }: { delay: number; x: number; y: number; size: number; duration: number; color: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, x, y }}
      animate={{ 
        opacity: [0, 1, 0],
        scale: [0, 1.2, 0.5],
        y: y - 100 - Math.random() * 200,
        x: x + (Math.random() - 0.5) * 100
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
  );
};

const Sparks = () => {
  const sparks = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      delay: Math.random() * 10,
      x: Math.random() * 100 + "%",
      y: Math.random() * 100 + "%",
      size: Math.random() * 3 + 1,
      duration: 3 + Math.random() * 4,
      color: i % 2 === 0 ? '#ff4d00' : '#ffae00'
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden h-full w-full">
      {sparks.map((spark) => (
        <Spark key={spark.id} {...spark} />
      ))}
    </div>
  );
};

export default Sparks;