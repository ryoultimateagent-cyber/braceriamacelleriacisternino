import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

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
      ref={containerRef}
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Cinematic Layer */}
      <motion.div 
        style={{ y: videoY }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        {/* Cinematic Fire Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-110 opacity-35 mix-blend-screen grayscale-[30%] contrast-110 brightness-75 blur-[1px]"
        >
          <source src="/videos/fire_glitch_remix.webm" type="video/webm" />
        </video>

        {/* Fire Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,40,0,0.15)_0%,transparent_60%)] z-10 animate-pulse" />
        
        {/* Dynamic Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_10%,_rgba(0,0,0,0.9)_100%)] z-20" />
        
        {/* Bottom Ember Glow */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/20 via-orange-950/5 to-transparent z-20" />
      </motion.div>

      {/* Noise Overlay */}
      <div className="hero-noise opacity-[0.02]" />

      {/* Main Content */}
      <motion.div 
        style={{ y: contentY, opacity: contentOpacity, scale: contentScale }}
        className="relative z-30 flex flex-col items-center text-center px-4 max-w-5xl"
      >
        <div className="relative mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-white font-black tracking-tighter leading-[0.9] text-[clamp(2.5rem,10vw,6rem)] font-sans uppercase italic"
            style={{ textShadow: "0 0 60px rgba(255, 107, 0, 0.5)" }}
          >
            Macelleria <br className="sm:hidden" /> Belvedere
          </motion.h1>
          
          {/* Subtle Glow behind text */}
          <div className="absolute -inset-10 bg-red-600/5 blur-[80px] -z-10 animate-pulse" />
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
            className="group relative px-10 py-4 sm:px-10 sm:py-5 overflow-hidden transition-all duration-500 rounded-full border border-primary bg-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            aria-label="Prenota un tavolo"
          >
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1]" />
            <span className="relative z-10 text-white group-hover:text-black font-black uppercase tracking-widest text-xs transition-colors duration-500">
              Prenota un tavolo
            </span>
          </a>
          
          <a 
            href="/menu" 
            className="group relative px-10 py-4 sm:px-10 sm:py-5 overflow-hidden transition-all duration-500 rounded-full border border-white/20 hover:border-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            aria-label="Vedi il menu"
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
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4"
      >
        <div className="relative w-[1px] h-16 bg-gradient-to-b from-white/40 to-transparent">
          <motion.div 
            animate={{ 
              y: [0, 40, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-[-1px] w-[3px] h-3 bg-primary rounded-full blur-[1px]"
          />
        </div>
        <span className="text-[9px] text-white/60 uppercase tracking-[0.4em] italic vertical-text">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
