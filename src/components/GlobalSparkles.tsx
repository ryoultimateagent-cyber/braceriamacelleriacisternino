import React, { useMemo } from "react";

const GlobalSparkles = () => {
  const sparkCount = 100; // Increased for global effect
  const sparks = useMemo(() => {
    const colors = ["#FF6B00", "#CC0000", "#F5C400"];
    return Array.from({ length: sparkCount }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      bottom: `${Math.random() * 100}%`, // Start at random positions
      size: `${Math.random() * 2 + 1}px`,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: `${Math.random() * 8 + 12}s`, // Longer duration for full-page feel
      delay: `${Math.random() * 15}s`,
      drift: `${(Math.random() - 0.5) * 150}px`,
      opacity: Math.random() * 0.4 + 0.2,
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
            boxShadow: `0 0 8px ${spark.color}, 0 0 15px ${spark.color}`,
            animation: `rise ${spark.duration} linear infinite`,
            animationDelay: `-${spark.delay}`, // Negative delay to distribute them
            // @ts-ignore
            "--drift": spark.drift,
          }}
        />
      ))}
    </div>
  );
};

export default GlobalSparkles;
