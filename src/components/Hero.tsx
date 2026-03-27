import { Phone, ChevronDown, Award } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-noir">
      {/* Parallax Background Image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: `url(${heroBg})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-noir/70 via-noir/60 to-noir" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(139,21,56,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(212,175,55,0.1)_0%,transparent_50%)]" />
      </motion.div>

      {/* Content Container */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto pt-24 lg:pt-32"
      >
        {/* Badge / Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 px-6 py-2 border border-gold/30 bg-gold/5 backdrop-blur-sm rounded-full mb-8"
        >
          <Award className="w-4 h-4 text-gold" />
          <span className="text-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]">
            Qualità e Tradizione dal 1980
          </span>
        </motion.div>

        {/* Main Titles */}
        <div className="mb-10 lg:mb-14 overflow-hidden">
          <motion.h1 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-cream text-5xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.8] tracking-tight uppercase mb-2"
          >
            Macelleria
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-red to-gold text-5xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.8] tracking-tight uppercase italic"
          >
            Belvedere
          </motion.h1>
        </div>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="text-lg md:text-2xl text-gold-light/80 font-accent italic tracking-wide mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Dove passione, maestria e selezione si incontrano<br className="hidden md:block" />
          per creare un'esperienza gastronomica senza tempo
        </motion.p>

        {/* Call to Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Button 
            asChild 
            variant="gold" 
            size="lg" 
            className="h-16 px-10 text-sm md:text-base uppercase tracking-widest font-bold"
          >
            <a href="tel:+393403824158" className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              Prenota un Tavolo
            </a>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="h-16 px-10 text-sm md:text-base uppercase tracking-widest font-bold border-white/20 hover:border-white/40"
          >
            <a href="#menu">
              Esplora il Menù
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-noir to-transparent z-10 pointer-events-none" />

      {/* Scroll Indicator */}
      <motion.a
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        href="#intro"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold z-20 hover:text-white transition-colors p-4 focus-visible:text-white"
        aria-label="Scroll down to introduction"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.a>
    </section>
  );
};

export default Hero;