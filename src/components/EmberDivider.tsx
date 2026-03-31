import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const EmberDivider = () => {
  const dividerSparks = useMemo(() => {
    const colors = ["#FF6B00", "#FFD700", "#FF4500"];
    return Array.from({ length: 20 }).map((_, i) => ({ // Reduced from 80 for performance
      id: i,
      left: `${15 + Math.random() * 70}%`,
      size: `${Math.random() * 1.5 + 1}px`,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: `${Math.random() * 10}s`,
      duration: `${Math.random() * 4 + 4}s`,
      drift: `${(Math.random() - 0.5) * 60}px`,
    }));
  }, []);

  return (
    <div className="relative w-full h-px overflow-visible flex items-center justify-center py-4">
      {/* Main black background line for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent h-[1px] top-1/2 -translate-y-1/2" />
      
      {/* The Glow LED Line */}
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
      >
        {/* Glow effects */}
        <div className="absolute inset-0 bg-primary blur-[4px] opacity-60" />
        <div className="absolute inset-0 bg-accent blur-[8px] opacity-30" />
        
        {/* Pulse center */}
        <motion.div 
          animate={{ 
            opacity: [0.4, 1, 0.4],
            scaleX: [0.95, 1.05, 0.95]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/50 to-transparent" 
        />
        
        {/* Sparks emitted from the LED line */}
        {dividerSparks.map((spark) => (
          <div
            key={spark.id}
            className="absolute rounded-full"
            style={{
              left: spark.left,
              bottom: "0",
              width: spark.size,
              height: spark.size,
              backgroundColor: spark.color,
              opacity: 0.6,
              boxShadow: `0 0 4px ${spark.color}`,
              animationName: "rise",
              animationDuration: spark.duration,
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-out",
              animationDelay: spark.delay,
              willChange: "transform, opacity",
              // @ts-ignore
              "--drift": spark.drift,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default EmberDivider;