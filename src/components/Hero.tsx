import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.3]);
  const videoOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.1]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(error => {
          console.log("Video play failed:", error);
        });
      }
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="hero"
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-transparent"
    >
      {/* Background Cinematic Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Cinematic Fire Video */}
        <motion.video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          style={{ scale: videoScale, opacity: videoOpacity }}
          className="w-full h-full object-cover mix-blend-screen grayscale-[30%] contrast-110 brightness-75 blur-[1px]"
        >
          <source src="/videos/fire_glitch_remix.webm" type="video/webm" />
        </motion.video>

        {/* Fire Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,40,0,0.15)_0%,transparent_60%)] z-10 animate-pulse" />
        
        {/* Dynamic Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_10%,_rgba(0,0,0,0.9)_100%)] z-20" />
        
        {/* Bottom Ember Glow */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/20 via-orange-950/5 to-transparent z-20" />
      </div>

      {/* Noise Overlay */}
      <div className="hero-noise opacity-[0.02]" />

      {/* Main Content */}
      <motion.div 
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-30 flex flex-col items-center text-center px-4 max-w-5xl"
      >
        <div className="relative mb-8">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-white font-black tracking-tighter leading-[0.85] text-[clamp(3rem,15vw,8.5rem)] font-sans uppercase italic relative"
          >
            <span className="relative z-10 block">Macelleria</span>
            <span className="relative z-10 block text-primary bg-clip-text text-transparent bg-gradient-to-b from-primary via-orange-500 to-yellow-500 filter drop-shadow-[0_0_30px_rgba(255,68,0,0.5)]">Belvedere</span>
            
            {/* Extreme Glow behind text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(255,68,0,0.2)_0%,transparent_70%)] -z-10 animate-pulse mix-blend-screen" />
          </motion.h1>
        </div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="text-white/90 font-medium mb-16 max-w-2xl text-lg md:text-2xl leading-relaxed italic"
        >
          Tradizione, qualità e brace — dal 1986 a Putignano
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8"
        >
          <a 
            href="#prenota" 
            className="group relative px-10 py-4 overflow-hidden transition-all duration-500 rounded-full border border-primary bg-primary"
          >
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1]" />
            <span className="relative z-10 text-white group-hover:text-black font-black uppercase tracking-widest text-xs transition-colors duration-500">
              Prenota un tavolo
            </span>
          </a>
          
          <a 
            href="/menu" 
            className="group relative px-10 py-4 overflow-hidden transition-all duration-500 rounded-full border border-white/20 hover:border-primary"
          >
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1]" />
            <span className="relative z-10 text-white font-black uppercase tracking-widest text-xs transition-colors duration-500 group-hover:text-white">
              Vedi il Menu
            </span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/40 to-transparent" />
        <span className="text-[9px] text-white/40 uppercase tracking-[0.4em] italic vertical-text">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;