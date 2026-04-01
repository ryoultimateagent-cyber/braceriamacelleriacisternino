import React from "react";
import { motion } from "framer-motion";
// ... keep existing imports
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section 
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30 grayscale mix-blend-overlay"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

// ... keep existing code


      {/* Conic Gradient Base Layer */}
      <div className="absolute inset-0 conic-gradient-bg opacity-30" />

      {/* Noise Overlay */}
      <div className="hero-noise" />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />

      {/* Contenuto Testuale Centrato */}
      <div className="relative z-30 text-center px-6 max-w-5xl flex flex-col items-center">
        <h1 
          className="text-white font-black tracking-tighter mb-4 leading-[0.9] text-[clamp(2.5rem,12vw,6.5rem)] font-display uppercase italic"
        >
          BELVEDERE<span className="text-primary">.</span>
        </h1>
        
        <p 
          className="text-white opacity-90 font-bold mb-12 max-w-2xl text-[clamp(1rem,2vw,1.2rem)] font-display leading-[1.2] uppercase tracking-[0.3em]"
        >
          DAL 1986 A PUTIGNANO — TRADIZIONE, QUALITÀ E BRACE
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a 
            href="#prenota" 
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 text-lg font-bold rounded-full transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(204,0,0,0.5)] focus-visible:ring-4 focus-visible:ring-primary/50 outline-none font-display"
            aria-label="Prenota un tavolo ora"
          >
            Prenota un tavolo
          </a>
          
          <a 
            href="#menu" 
            className="inline-block border-2 border-white/30 text-white hover:bg-white/10 px-10 py-5 text-lg font-bold rounded-full transition-all duration-300 focus-visible:ring-4 focus-visible:ring-white/20 outline-none font-display"
            aria-label="Sfoglia il nostro menù"
          >
            Scopri il Menù
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;