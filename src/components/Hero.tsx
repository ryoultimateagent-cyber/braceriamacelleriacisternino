import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section 
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-transparent"
    >
      {/* Background Cinematic Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Cinematic Fire Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-110 opacity-60 mix-blend-screen grayscale-[10%]"
        >
          <source src="https://player.vimeo.com/external/494252666.sd.mp4?s=bc4c0490795415309923838048995a5f17849e7a&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        
        {/* Fire Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,40,0,0.15)_0%,transparent_60%)] z-10 animate-pulse" />
        
        {/* Dynamic Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.7)_100%)] z-20" />
        
        {/* Bottom Ember Glow */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/20 via-orange-950/5 to-transparent z-20" />
      </div>

      {/* Noise Overlay */}
      <div className="hero-noise opacity-[0.02]" />

      {/* Main Content */}
      <div className="relative z-30 flex flex-col items-center text-center px-4 max-w-4xl">
        <div className="relative mb-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-white font-black tracking-tighter leading-tight text-[clamp(1.5rem,4.5vw,3rem)] font-sans uppercase italic"
            style={{ textShadow: "0 0 40px rgba(255, 107, 0, 0.4)" }}
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
          className="text-white/80 font-medium mb-12 max-w-xl text-base md:text-lg leading-relaxed italic"
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
            href="#menu" 
            className="group relative flex items-center gap-4 text-white hover:text-primary transition-colors duration-300"
          >
            <span className="font-black uppercase tracking-[0.2em] text-xs">Il Nostro Menù</span>
            <div className="w-8 h-[1px] bg-white/30 group-hover:w-12 group-hover:bg-primary transition-all duration-500" />
          </a>
        </motion.div>
      </div>

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