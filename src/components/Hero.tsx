import { Phone, ArrowRight } from "lucide-react";
import { 
  motion, 
  useScroll, 
  useTransform, 
  useReducedMotion,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRef, useEffect, useState } from "react";

const Ember = ({ delay }: { delay: number }) => {
  const randomX = Math.random() * 100;
  const randomSize = Math.random() * 4 + 2;
  const randomDuration = Math.random() * 10 + 10;
  
  return (
    <motion.div
      initial={{ y: "110vh", x: `${randomX}vw`, opacity: 0, scale: 0 }}
      animate={{ 
        y: "-10vh", 
        x: [`${randomX}vw`, `${randomX + (Math.random() * 10 - 5)}vw`],
        opacity: [0, 0.8, 0.4, 0],
        scale: [0, 1, 0.5, 0],
        rotate: [0, 180, 360]
      }}
      transition={{ 
        duration: randomDuration, 
        delay, 
        repeat: Infinity, 
        ease: "linear" 
      }}
      className="absolute rounded-full blur-[1px] pointer-events-none z-0"
      style={{ 
        width: randomSize, 
        height: randomSize,
        background: Math.random() > 0.5 ? '#FF4D00' : '#E63946',
        boxShadow: '0 0 10px #FF4D00'
      }}
    />
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 500], [0, shouldReduceMotion ? 0 : 100]);

  const [embers, setEmbers] = useState<number[]>([]);

  useEffect(() => {
    setEmbers(Array.from({ length: 30 }, (_, i) => i * 0.5));
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-noir"
      aria-label="Introduzione Premium Belvedere"
    >
      {/* Animated Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Deep Red Glow */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-ember/20 blur-[150px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -top-[10%] -right-[5%] w-[50%] h-[50%] rounded-full bg-[#E63946]/20 blur-[120px]"
        />
        
        {/* Floating Embers */}
        {!shouldReduceMotion && embers.map((delay, i) => (
          <Ember key={i} delay={delay} />
        ))}

        {/* Dynamic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/50 to-[#0A0A0A]" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left Side: Text Content */}
          <motion.div 
            style={{ opacity, y }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 md:mb-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-gold text-[10px] md:text-[12px] uppercase tracking-[0.6em] font-medium">
                  EST. 1980 — MILANO
                </span>
                <div className="h-[1px] w-16 md:w-24 bg-gold/30" />
              </div>
            </motion.div>

            <div className="relative mb-8 md:mb-10">
              <motion.h1 
                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="text-cream text-4xl md:text-6xl lg:text-8xl font-display font-black leading-tight tracking-tighter uppercase mb-4"
              >
                IL RITO <br /> 
                <span className="text-gold">DELLA</span> <br /> 
                BRACE
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.2 }}
              className="text-cream/80 text-base md:text-xl font-light max-w-lg leading-relaxed mb-10 md:mb-12 tracking-wide font-accent italic"
            >
              "Non è solo carne. È un dialogo tra l'uomo e l'elemento primordiale, una danza di calore che trasforma la materia in poesia."
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="flex flex-wrap gap-4 md:gap-6"
            >
              <Button 
                asChild 
                size="lg"
                className="group relative h-12 md:h-16 px-6 md:px-10 bg-gold hover:bg-gold-dark text-noir rounded-lg transition-all duration-300"
              >
                <a href="#prenota" className="flex items-center gap-3 relative z-10">
                  <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em]">Prenota il Rito</span>
                  <Phone className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                </a>
              </Button>
              
              <Button 
                asChild 
                variant="ghost"
                size="lg"
                className="group h-12 md:h-16 px-6 md:px-10 text-cream hover:text-gold hover:bg-white/5 rounded-lg border border-cream/20 hover:border-gold transition-all duration-300"
              >
                <a href="#menu" className="flex items-center gap-3">
                  <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em]">Esplora la Carta</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
            className="relative hidden md:block"
          >
            <div className="relative aspect-[4/5] w-full max-w-[400px] lg:max-w-[500px] ml-auto overflow-hidden border border-gold/20 p-4 rounded-xl">
              <div className="absolute inset-0 bg-gold/5 z-0" />
              <div className="relative h-full w-full overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Premium Steak on Grill" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-transparent to-transparent" />
                
                {/* Decorative Frame */}
                <div className="absolute top-8 left-8 bottom-8 right-8 border border-white/10 pointer-events-none" />
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-gold text-noir p-4 md:p-6 font-display font-bold text-xl flex flex-col items-center leading-none rounded-lg"
              >
                <span className="text-[10px] md:text-sm tracking-widest uppercase mb-1">DRY</span>
                <span className="text-2xl md:text-3xl">45</span>
                <span className="text-[8px] md:text-xs uppercase">DAYS</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative side text */}
      <div className="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2 -rotate-90">
        <span className="text-cream/20 text-[10px] uppercase tracking-[1em] whitespace-nowrap">
          AUTHENTIC ITALIAN STEAKHOUSE
        </span>
      </div>
      <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 rotate-90">
        <span className="text-cream/20 text-[10px] uppercase tracking-[1em] whitespace-nowrap">
          BELVEDERE • ART OF FIRE
        </span>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10" />
    </section>
  );
};

export default Hero;