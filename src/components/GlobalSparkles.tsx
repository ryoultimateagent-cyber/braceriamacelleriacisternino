import React, { useMemo } from "react";

const GlobalSparkles = () => {
  const sparkCount = 60; // Reduced from 100 for better performance
  const sparks = useMemo(() => {
    const colors = ["#FF6B00", "#CC0000", "#F5C400"];
    return Array.from({ length: sparkCount }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      bottom: `${Math.random() * 100}%`,
      size: `${Math.random() * 1.5 + 1}px`, // Slightly smaller
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: `${Math.random() * 8 + 12}s`,
      delay: `${Math.random() * 15}s`,
      drift: `${(Math.random() - 0.5) * 150}px`,
      opacity: Math.random() * 0.3 + 0.1, // Lower opacity
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden opacity-30">
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="absolute rounded-full"
          style={{
            left: spark.left,
            bottom: spark.bottom,
            width: spark.size,
            height: spark.size,
            backgroundColor: spark.color,
            opacity: spark.opacity,
            boxShadow: `0 0 6px ${spark.color}`, // Simplified shadow
            animation: `rise ${spark.duration} linear infinite`,
            animationDelay: `-${spark.delay}`,
            willChange: "transform, opacity",
            // @ts-ignore
            "--drift": spark.drift,
          }}
        />
      ))}
    </div>
  );
};

export default GlobalSparkles;
