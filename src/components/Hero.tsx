import { Phone, ArrowRight, Star } from "lucide-react";
import { 
  motion, 
  useScroll, 
  useTransform, 
  useReducedMotion
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const Hero = () => {
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const y = useTransform(scrollY, [0, 500], [0, shouldReduceMotion ? 0 : 200]);
  const contentY = useTransform(scrollY, [0, 500], [0, shouldReduceMotion ? 0 : -50]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1.05, 1.15]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-noir"
      aria-label="Introduzione Cinematografica"
    >
      {/* Cinematic Background Layer */}
      <motion.div
        style={{ y, scale, opacity }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1607116176195-240299402c3b?auto=format&fit=crop&q=80&w=2000')`,
            filter: 'brightness(0.3) contrast(1.1)'
          }}
        />
        {/* Subtle Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-noir/80 via-transparent to-noir" />
        <div className="absolute inset-0 bg-gradient-to-r from-noir/40 via-transparent to-noir/40" />
      </motion.div>

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Main Content */}
      <div className="relative z-20 text-center px-6 w-full max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center mb-10"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-gold/50" />
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-gold fill-gold" />
              ))}
            </div>
            <div className="h-[1px] w-8 bg-gold/50" />
          </div>
          <span className="text-gold text-[11px] uppercase tracking-[0.5em] font-display font-bold">
            Eccellenza nella Brace dal 1980
          </span>
        </motion.div>

        <div className="relative mb-12">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-cream text-7xl md:text-9xl lg:text-[11rem] font-display font-black leading-[0.85] tracking-tighter uppercase select-none"
          >
            MACELLERIA
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-gold via-gold-light to-gold-satin italic">BELVEDERE</span>
          </motion.h1>
          
          {/* Subtle reflection effect */}
          <div className="absolute top-full left-0 w-full opacity-10 blur-xl pointer-events-none">
             <h1 className="text-gold text-7xl md:text-9xl lg:text-[11rem] font-display font-black leading-[0.85] tracking-tighter uppercase scale-y-[-0.3]">
              BELVEDERE
             </h1>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-xl text-cream/70 font-accent italic mb-16 max-w-xl mx-auto leading-relaxed"
        >
          Dove la selezione della materia prima incontra <br className="hidden md:block" /> 
          il fuoco della tradizione secolare.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button 
            asChild 
            variant="gold" 
            className="h-14 px-10 text-xs uppercase tracking-[0.3em] font-bold rounded-none transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] group"
          >
            <a href="tel:+393403824158" className="flex items-center gap-3">
              <Phone className="w-4 h-4" />
              <span>Prenota un tavolo</span>
            </a>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            className="h-14 px-10 border-gold/20 hover:border-gold text-gold text-xs uppercase tracking-[0.3em] font-bold rounded-none bg-noir/50 backdrop-blur-md transition-all duration-300 group"
          >
            <a href="#menu" className="flex items-center gap-3">
              <span>Il nostro menù</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Decorative frame elements */}
      <div className="absolute inset-10 border border-gold/10 pointer-events-none z-10" />
      <div className="absolute top-10 left-10 w-4 h-4 border-t-2 border-l-2 border-gold/30 pointer-events-none z-10" />
      <div className="absolute top-10 right-10 w-4 h-4 border-t-2 border-r-2 border-gold/30 pointer-events-none z-10" />
      <div className="absolute bottom-10 left-10 w-4 h-4 border-b-2 border-l-2 border-gold/30 pointer-events-none z-10" />
      <div className="absolute bottom-10 right-10 w-4 h-4 border-b-2 border-r-2 border-gold/30 pointer-events-none z-10" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold/40 to-transparent relative">
          <motion.div 
            animate={{ y: [0, 64] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-transparent via-gold/60 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;