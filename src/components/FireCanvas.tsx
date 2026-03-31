import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  colorIndex: number;
}

const FireCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const MAX_PARTICLES = 300;
    const particles: Particle[] = [];

    const spawn = () => {
      if (particles.length >= MAX_PARTICLES) return;
      const count = Math.floor(Math.random() * 4) + 2;
      for (let i = 0; i < count; i++) {
        if (particles.length >= MAX_PARTICLES) break;
        particles.push({
          x: Math.random() * w,
          y: h + Math.random() * 20,
          vx: (Math.random() - 0.5) * 1.5,
          vy: -(Math.random() * 2 + 1.5),
          life: 0,
          maxLife: 80 + Math.random() * 120,
          size: Math.random() * 30 + 10,
          colorIndex: Math.random(),
        });
      }
    };

    const getColor = (ci: number, progress: number): string => {
      const alpha = Math.max(0, 1 - progress);
      if (ci < 0.35) {
        // Deep red / crimson
        const r = 200 + Math.floor(55 * (1 - progress));
        const g = Math.floor(20 * (1 - progress));
        return `rgba(${r},${g},0,${alpha * 0.6})`;
      } else if (ci < 0.6) {
        // Orange
        const r = 255;
        const g = 80 + Math.floor(80 * (1 - progress));
        return `rgba(${r},${g},0,${alpha * 0.5})`;
      } else if (ci < 0.8) {
        // Yellow-orange core
        const r = 255;
        const g = 150 + Math.floor(100 * (1 - progress));
        const b = Math.floor(30 * (1 - progress));
        return `rgba(${r},${g},${b},${alpha * 0.4})`;
      } else {
        // Bright yellow highlight
        const r = 255;
        const g = 200 + Math.floor(55 * (1 - progress));
        const b = Math.floor(60 * (1 - progress));
        return `rgba(${r},${g},${b},${alpha * 0.35})`;
      }
    };

    const render = () => {
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(0,0,0,0.15)";
      ctx.fillRect(0, 0, w, h);

      spawn();

      ctx.globalCompositeOperation = "lighter";

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        const progress = p.life / p.maxLife;

        if (progress >= 1) {
          particles.splice(i, 1);
          continue;
        }

        p.x += p.vx + (Math.random() - 0.5) * 1.2;
        p.vy *= 0.995;
        p.y += p.vy;
        p.vx *= 0.99;

        const currentSize = p.size * (1 - progress * 0.5);
        const color = getColor(p.colorIndex, progress);

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, currentSize);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, "rgba(0,0,0,0)");

        ctx.beginPath();
        ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      // Bottom glow
      const bottomGlow = ctx.createLinearGradient(0, h, 0, h * 0.5);
      bottomGlow.addColorStop(0, "rgba(200,30,0,0.25)");
      bottomGlow.addColorStop(0.3, "rgba(255,80,0,0.08)");
      bottomGlow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.globalCompositeOperation = "lighter";
      ctx.fillStyle = bottomGlow;
      ctx.fillRect(0, 0, w, h);

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: "block" }}
    />
  );
};

export default FireCanvas;
