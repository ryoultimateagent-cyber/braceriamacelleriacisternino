import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#f7f4ed]"
    >
      {/* Background Cinematic Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Cinematic Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105 opacity-40 mix-blend-multiply grayscale-[20%]"
        >
          <source src="https://player.vimeo.com/external/494252666.sd.mp4?s=bc4c0490795415309923838048995a5f17849e7a&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        
        {/* Lighter Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f7f4ed]/20 via-transparent to-[#f7f4ed]/80 z-10" />
      </div>

      {/* Main Content */}
      <div className="relative z-30 flex flex-col items-center text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-[#1c1c1c]/60 mb-4 block">
            Macelleria Braceria Belvedere
          </span>
          <h1 className="text-[#1c1c1c] font-semibold leading-[1.1] text-[36px] md:text-[48px] lg:text-[60px] tracking-[-0.9px] md:tracking-[-1.2px] lg:tracking-[-1.5px]">
            La brace autentica <br /> dal 1986.
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-[#5f5f5d] font-normal mb-10 max-w-2xl text-lg md:text-xl leading-relaxed"
        >
          Selezioniamo le migliori carni per offrirti un'esperienza <br className="hidden md:block" /> gastronomica indimenticabile nel cuore di Putignano.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a href="tel:+390804058608">Prenota un tavolo</a>
          </Button>
          
          <Button asChild variant="ghost" size="lg" className="w-full sm:w-auto">
            <a href="#menu">Il Nostro Menù</a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3"
      >
        <div className="w-[1px] h-12 bg-[#1c1c1c]/20" />
        <span className="text-[10px] text-[#1c1c1c]/40 uppercase tracking-[0.2em]">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;