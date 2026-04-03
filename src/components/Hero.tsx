import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section 
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* Background Cinematic Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Cinematic Fire Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-110 opacity-80 mix-blend-screen grayscale-[10%]"
        >
          <source src="https://player.vimeo.com/external/494252666.sd.mp4?s=bc4c0490795415309923838048995a5f17849e7a&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        
        {/* Fire Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,40,0,0.25)_0%,transparent_60%)] z-10 animate-pulse" />
        <div className="fire-effect z-10" />
        
        {/* Dynamic Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.9)_100%)] z-20" />
        
        {/* Bottom Ember Glow */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/30 via-orange-950/10 to-transparent z-20" />
      </div>

      {/* Noise Overlay */}
      <div className="hero-noise opacity-[0.03]" />

      {/* Main Content */}
      <div className="relative z-30 flex flex-col items-center text-center px-4 max-w-7xl">
        <div className="relative mb-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-white font-black tracking-tighter leading-tight text-[clamp(2.5rem,8vw,6rem)] font-sans uppercase"
            style={{ textShadow: "0 0 30px rgba(255, 107, 0, 0.6)" }}
          >
            Macelleria <br className="sm:hidden" /> Belvedere
          </motion.h1>
          
          {/* Subtle Glow behind text */}
          <div className="absolute -inset-10 bg-red-600/5 blur-[100px] -z-10 animate-pulse" />
        </div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="text-white/85 font-light mb-12 max-w-2xl text-[clamp(1rem,2vw,1.5rem)] leading-relaxed"
        >
          Tradizione, qualità e brace — dal 1986 a Putignano
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
        >
          <a 
            href="#prenota" 
            className="group relative px-12 py-5 overflow-hidden transition-all duration-500"
          >
            <div className="absolute inset-0 bg-primary translate-y-0 group-hover:-translate-y-full transition-transform duration-500 ease-[0.76, 0, 0.24, 1]" />
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1]" />
            <span className="relative z-10 text-white group-hover:text-black font-black uppercase tracking-widest text-sm transition-colors duration-500">
              Prenota un tavolo
            </span>
          </a>
          
          <a 
            href="#menu" 
            className="group relative flex items-center gap-4 text-white hover:text-orange-400 transition-colors duration-300"
          >
            <span className="font-black uppercase tracking-[0.2em] text-sm">Il Nostro Menù</span>
            <div className="w-12 h-[1px] bg-white/30 group-hover:w-16 group-hover:bg-orange-400 transition-all duration-500" />
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
        <div className="w-[1px] h-20 bg-gradient-to-b from-white/40 to-transparent" />
        <span className="text-[10px] text-white/40 uppercase tracking-[0.4em] italic vertical-text">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;