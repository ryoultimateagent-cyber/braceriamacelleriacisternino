import React, { useEffect, useRef } from 'react';

const Sparks = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = -(Math.random() * 1.2 + 0.3);
        this.opacity = Math.random() * 0.3 + 0.1;
        this.color = Math.random() > 0.5 ? '#ff4400' : '#ffbb00';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.y < 0) {
          this.y = canvas.height;
          this.x = Math.random() * canvas.width;
        }
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
      }
    }

    const init = () => {
      // Increased count for better fire effect
      particles = Array.from({ length: 120 }, () => new Particle());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Updated styling as per plan (absolute, z-index 2, opacity 0.4)
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-[2] opacity-40 h-full w-full"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default Sparks;