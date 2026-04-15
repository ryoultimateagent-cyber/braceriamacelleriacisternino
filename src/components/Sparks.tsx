import React, { useEffect, useRef } from 'react';

const Sparks = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 60 : 150;

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
        this.size = Math.random() * 2.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 1.2;
        this.speedY = -(Math.random() * 3 + 0.5);
        this.opacity = Math.random() * 0.7 + 0.1;
        this.color = Math.random() > 0.4 ? '#ff5500' : (Math.random() > 0.5 ? '#ffaa00' : '#ffcc00');
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= 0.0012;
        
        if (this.y < -20 || this.opacity <= 0) {
          this.y = canvas.height + 10;
          this.x = Math.random() * canvas.width;
          this.opacity = Math.random() * 0.5 + 0.2;
          this.speedY = -(Math.random() * 2 + 0.5);
        }
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
      }

      draw() {
        if (!ctx) return;
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = Array.from({ length: particleCount }, () => new Particle());
    };

    let lastTime = 0;
    const animate = (time: number) => {
      // Limit to 60fps roughly or just handle time
      const deltaTime = time - lastTime;
      if (deltaTime < 16) { // ~60fps
        animationFrameId = requestAnimationFrame(animate);
        return;
      }
      lastTime = time;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    resize();
    init();
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[40] opacity-60 h-full w-full"
      style={{ mixBlendMode: 'screen', willChange: 'transform' }}
    />
  );
};

export default React.memo(Sparks);