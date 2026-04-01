import React from "react";
import { motion } from "framer-motion";
import HeroCanvas3D from "./HeroCanvas3D";

const Hero = () => {
  return (
    <section 
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* 3D Canvas Background */}
      <HeroCanvas3D />

      {/* Conic Gradient Base Layer */}
      <div className="absolute inset-0 z-[-1] conic-gradient-bg opacity-40" />

      {/* Noise Overlay */}
      <div className="hero-noise" />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-transparent to-black" />

      {/* Contenuto Testuale Centrato */}
      <div className="relative z-30 text-center px-6 max-w-5xl flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white font-black tracking-tighter mb-4 leading-[0.9] text-[clamp(2.5rem,12vw,6.5rem)] font-display uppercase italic"
        >
          BELVEDERE<span className="text-primary">.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-white opacity-90 font-bold mb-12 max-w-2xl text-[clamp(1rem,2vw,1.2rem)] font-display leading-[1.2] uppercase tracking-[0.3em]"
        >
          DAL 1986 A PUTIGNANO — TRADIZIONE, QUALITÀ E BRACE
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 mt-4"
        >
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: "0 15px 40px -10px rgba(204,0,0,0.6)" }}
            whileTap={{ scale: 0.95 }}
            href="#prenota" 
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 text-lg font-bold rounded-full transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(204,0,0,0.5)] focus-visible:ring-4 focus-visible:ring-primary/50 outline-none font-display"
            aria-label="Prenota un tavolo ora"
          >
            Prenota un tavolo
          </motion.a>
          
          <motion.a 
            whileHover={{ scale: 1.05, border: "2px solid rgba(255,255,255,0.8)" }}
            whileTap={{ scale: 0.95 }}
            href="#menu" 
            className="inline-block border-2 border-white/30 text-white hover:bg-white/10 px-10 py-5 text-lg font-bold rounded-full transition-all duration-300 focus-visible:ring-4 focus-visible:ring-white/20 outline-none font-display"
            aria-label="Sfoglia il nostro menù"
          >
            Scopri il Menù
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
