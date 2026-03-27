import { Phone, Zap, Sparkles } from "lucide-react";
import { 
  motion, 
  useScroll, 
  useTransform, 
  useReducedMotion,
  useSpring,
  useMotionValue
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRef, useState, useEffect } from "react";

const Hero = () => {
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse tracking for interactive parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  const y = useTransform(scrollY, [0, 500], [0, shouldReduceMotion ? 0 : 250]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 40;
      const y = (clientY / innerHeight - 0.5) * 40;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[110vh] flex items-center justify-center overflow-hidden bg-noir"
      aria-label="Introduzione Cinematografica"
    >
      {/* Cinematic Background Layer */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=2000')`,
            filter: 'brightness(0.4) contrast(1.2)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-noir/80 via-transparent to-noir" />
      </motion.div>

      {/* Floating Interactive Particles */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              x: useTransform(springX, (v) => v * (i % 3 + 1) * 0.2),
              y: useTransform(springY, (v) => v * (i % 3 + 1) * 0.2),
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.4, 0],
              scale: [0.5, 1, 0.5],
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute w-1 h-1 bg-gold rounded-full blur-[2px]"
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 text-center px-6 max-w-7xl mx-auto"
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1 border border-gold/30 bg-gold/5 backdrop-blur-sm rounded-full mb-8"
        >
          <Sparkles className="w-3 h-3 text-gold" />
          <span className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold">
            Tradizione e Passione dal 1980
          </span>
        </motion.div>

        <div className="overflow-hidden mb-4">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-cream text-6xl md:text-9xl lg:text-[10rem] font-display font-black leading-none tracking-tighter uppercase"
          >
            MACELLERIA
          </motion.h1>
        </div>
        
        <div className="overflow-hidden mb-12">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-ember via-gold to-ember bg-[length:200%_auto] animate-gradient-flow text-6xl md:text-9xl lg:text-[10rem] font-display font-black leading-none tracking-tighter uppercase italic"
          >
            BELVEDERE
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-xl md:text-2xl text-gold-light/80 font-accent italic mb-16 max-w-2xl mx-auto"
        >
          L'arte della brace, il culto della materia prima.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button 
            asChild 
            variant="default" 
            className="h-16 px-12 bg-gold hover:bg-gold-satin text-noir uppercase tracking-[0.3em] font-bold rounded-none transition-all duration-500 hover:scale-105"
          >
            <a href="tel:+393403824158" className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <span>Prenota Ora</span>
            </a>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            className="h-16 px-12 border-gold/30 hover:border-gold text-gold uppercase tracking-[0.3em] font-bold rounded-none bg-transparent transition-all duration-500"
          >
            <a href="#menu" className="flex items-center gap-3">
              <Zap className="w-5 h-5" />
              <span>Scopri il Menù</span>
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gold/40 text-[10px] uppercase tracking-[0.4em] font-bold">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;