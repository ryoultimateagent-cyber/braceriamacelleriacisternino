import { Phone, ArrowRight, Flame } from "lucide-react";
import { 
  motion, 
  useScroll, 
  useTransform, 
  useReducedMotion,
  AnimatePresence
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
      className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
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
          className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-[#780000] blur-[150px]"
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
      <motion.div 
        style={{ opacity, y }}
        className="relative z-10 text-center px-6 w-full max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-[#FEFAE0]/30" />
            <span className="text-[#FEFAE0] text-[12px] uppercase tracking-[0.6em] font-medium">
              EST. 1980
            </span>
            <div className="h-[1px] w-12 bg-[#FEFAE0]/30" />
          </div>
        </motion.div>

        <div className="relative mb-12 flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-[#FEFAE0] text-7xl md:text-[10rem] lg:text-[13rem] font-display font-black leading-[0.8] tracking-tighter uppercase mb-2 select-none"
          >
            BRACE
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
            className="h-[2px] bg-gradient-to-r from-transparent via-[#E63946] to-transparent max-w-[400px] mb-4"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            className="text-[#F3722C] text-2xl md:text-5xl font-display uppercase tracking-[0.4em] font-light"
          >
            & PASSIONE
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="text-[#FEFAE0]/70 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-16 tracking-wide italic"
        >
          L'esperienza sensoriale definitiva del fuoco. Materie prime d'eccellenza, maestria ancestrale, atmosfera senza tempo.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-8 justify-center items-center"
        >
          <Button 
            asChild 
            className="group relative h-16 px-12 bg-[#C1121F] hover:bg-[#E63946] text-[#FEFAE0] rounded-full transition-all duration-500 overflow-hidden"
          >
            <a href="#prenota" className="flex items-center gap-3 relative z-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Prenota un Tavolo</span>
              <Phone className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
            </a>
          </Button>
          
          <Button 
            asChild 
            variant="ghost"
            className="group h-16 px-12 text-[#FEFAE0] hover:text-[#FEFAE0] hover:bg-white/5 rounded-full border border-[#FEFAE0]/20 transition-all duration-500"
          >
            <a href="#menu" className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Esplora il Menù</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Decorative side text */}
      <div className="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2 -rotate-90">
        <span className="text-[#FEFAE0]/20 text-[10px] uppercase tracking-[1em] whitespace-nowrap">
          AUTHENTIC ITALIAN STEAKHOUSE
        </span>
      </div>
      <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 rotate-90">
        <span className="text-[#FEFAE0]/20 text-[10px] uppercase tracking-[1em] whitespace-nowrap">
          BELVEDERE • ART OF FIRE
        </span>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10" />
    </section>
  );
};

export default Hero;