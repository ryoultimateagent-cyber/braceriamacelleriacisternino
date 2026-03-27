import { Phone, ChevronDown, Award, Sparkles, Code, Zap } from "lucide-react";
import { 
  motion, 
  useScroll, 
  useTransform, 
  useReducedMotion,
  useMotionValue,
  useSpring,
  AnimatePresence
} from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { useRef, useState, useEffect } from "react";

const Hero = () => {
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Mouse tracking parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  const y = useTransform(scrollY, [0, 500], [0, shouldReduceMotion ? 0 : 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, shouldReduceMotion ? 1 : 0]);
  
  // Mouse move handler per parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      mouseX.set(x * 30);
      mouseY.set(y * 30);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[110vh] flex items-center justify-center overflow-hidden bg-noir"
      aria-label="Introduzione e Benvenuto"
      role="region"
    >
      {/* 1. Dynamic Background Parallax Layer */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: `url(${heroBg})` }}
          aria-hidden="true"
        />
        
        {/* Animated Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-noir/80 via-noir/40 to-noir" />
        
        {/* Floating Glowing Orbs (Interactive) */}
        <motion.div 
          style={{ x: springX, y: springY }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-fire/20 rounded-full blur-[150px] opacity-40"
        />
        <motion.div 
          style={{ x: useTransform(springX, (v) => -v * 2), y: useTransform(springY, (v) => -v * 2) }}
          className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-gold/15 rounded-full blur-[180px] opacity-30"
        />
        
        {/* Matrix-like Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_20%,#000_30%,transparent_100%)]" />
      </motion.div>

      {/* 2. Floating Animated Elements (Parallax) */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.4, 0],
              scale: [0.5, 1, 0.5],
              y: [0, -100, -200],
              x: Math.random() * 100 - 50
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 90 + 5}%`,
              bottom: "0%",
            }}
            className="absolute"
          >
            <div className="w-1 h-1 bg-gold rounded-full blur-[1px]" />
          </motion.div>
        ))}
      </div>

      {/* 3. Main Content Container */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 text-center px-6 max-w-7xl mx-auto pt-20"
      >
        {/* Interactive Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-3 px-6 py-2 border border-gold/30 bg-gold/5 backdrop-blur-md rounded-full mb-10 cursor-default group overflow-hidden relative"
        >
          <motion.div 
            className="absolute inset-0 bg-gold/10 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
          />
          <Sparkles className="w-4 h-4 text-gold animate-pulse" />
          <span className="text-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] relative z-10">
            Eccellenza senza compromessi dal 1980
          </span>
        </motion.div>

        {/* Cinematic Title with Splitting Reveal */}
        <div className="mb-12 overflow-hidden perspective-1000">
          <motion.h1 
            initial={{ opacity: 0, rotateX: -90, y: 50 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-cream text-5xl sm:text-7xl md:text-9xl lg:text-[11rem] font-display font-bold leading-[0.85] tracking-tighter uppercase mb-4"
          >
            Macelleria
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, x: -100, skewX: -20 }}
            animate={{ opacity: 1, x: 0, skewX: 0 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-fire via-gold to-fire bg-[length:200%_auto] animate-gradient-flow text-5xl sm:text-7xl md:text-9xl lg:text-[11rem] font-display font-bold leading-[0.85] tracking-tighter uppercase italic"
          >
            Belvedere
          </motion.h1>
        </div>

        {/* Sophisticated Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="relative inline-block"
        >
          <p className="text-xl md:text-3xl text-gold-light/90 font-accent italic tracking-widest mb-16 max-w-3xl mx-auto leading-relaxed">
            Un'eredità di gusto, un santuario della <span className="text-gold border-b border-gold/40">carne d'autore</span>.
          </p>
        </motion.div>

        {/* Magnetic Buttons (Concept) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-8 justify-center items-center"
        >
          <Button 
            asChild 
            variant="gold" 
            size="lg" 
            className="group h-16 px-12 text-sm md:text-base uppercase tracking-[0.3em] font-bold rounded-none relative overflow-hidden transition-all duration-500 hover:tracking-[0.5em]"
          >
            <a href="tel:+393403824158" className="flex items-center gap-4">
              <Phone className="w-5 h-5 transition-transform group-hover:rotate-12" />
              <span>Esperienza Esclusiva</span>
            </a>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="group h-16 px-12 text-sm md:text-base uppercase tracking-[0.3em] font-bold rounded-none border-white/20 hover:border-gold/50 bg-white/5 backdrop-blur-sm transition-all duration-500"
          >
            <a href="#menu" className="flex items-center gap-4">
              <Zap className="w-5 h-5 text-gold group-hover:scale-125 transition-transform" />
              <span>Esplora Menù</span>
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Modern Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gold/50 to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 64] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gold"
          />
        </div>
        <span className="text-gold/40 text-[8px] uppercase tracking-[0.5em] font-bold rotate-90 translate-y-4">SCROLL</span>
      </motion.div>

      {/* Subtle Noise Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50" />
    </section>
  );
};

export default Hero;
