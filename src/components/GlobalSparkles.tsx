import React, { useMemo } from "react";

const GlobalSparkles = () => {
  const sparkCount = 60; // Increased for global effect
  const sparks = useMemo(() => {
    const colors = ["#FF6B00", "#CC0000", "#F5C400"];
    return Array.from({ length: sparkCount }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: `${Math.random() * 10 + 15}s`, // Slower for global feel
      delay: `${Math.random() * 20}s`,
      drift: `${(Math.random() - 0.5) * 150}px`,
      opacity: Math.random() * 0.3 + 0.2,
      top: `${Math.random() * 100}%`, // Start at random heights for initial distribution
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="absolute rounded-full"
          style={{
            left: spark.left,
            top: spark.top,
            width: spark.size,
            height: spark.size,
            backgroundColor: spark.color,
            opacity: spark.opacity,
            boxShadow: `0 0 5px ${spark.color}, 0 0 10px ${spark.color}`,
            animation: `rise ${spark.duration} linear infinite`,
            animationDelay: `-${spark.delay}`, // Negative delay to start mid-animation
            // @ts-ignore
            "--drift": spark.drift,
          }}
        />
      ))}
    </div>
  );
};

export default GlobalSparkles;
