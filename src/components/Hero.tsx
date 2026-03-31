import { Phone, ArrowRight } from "lucide-react";
import { 
  motion, 
  useScroll, 
  useTransform, 
  useReducedMotion,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRef, useEffect, useState } from "react";

const Hero = () => {
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 500], [0, shouldReduceMotion ? 0 : 50]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-24 pb-16"
      aria-label="Introduzione Macelleria Belvedere"
    >
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <motion.div 
          animate={{ 
            x: [0, 20, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 0],
            y: [0, 20, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[0%] -right-[10%] w-[60%] h-[60%] rounded-full bg-accent/5 blur-[150px]"
        />
      </div>

      {/* Main Content */}
      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Content (Grid: 7) */}
          <motion.div 
            style={{ opacity, y }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-8"
            >
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              DAL 1986 — PUTIGNANO
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-foreground font-black leading-[1.05] tracking-tight mb-8"
            >
              MACELLERIA <br /> 
              <span className="text-primary italic">BRACERIA</span> <br /> 
              BELVEDERE
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-muted-foreground text-lg md:text-xl font-medium max-w-xl leading-relaxed mb-12"
            >
              L'arte della carne a Putignano. Una tradizione di famiglia che porta in tavola la migliore qualità pugliese, cotta lentamente sulla nostra brace ardente.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
            >
              <Button 
                asChild 
                size="lg"
                className="h-16 px-10 bg-primary hover:bg-primary/90 text-white rounded-2xl font-bold text-base transition-all shadow-xl shadow-primary/20 active:scale-95 group"
              >
                <a href="tel:+390804058608" className="flex items-center gap-3">
                  <span>PRENOTA ORA</span>
                  <Phone className="w-5 h-5 transition-transform group-hover:rotate-12" />
                </a>
              </Button>
              
              <Button 
                asChild 
                variant="outline"
                size="lg"
                className="h-16 px-10 border-foreground/10 hover:bg-secondary rounded-2xl font-bold text-base transition-all active:scale-95"
              >
                <a href="#menu" className="flex items-center gap-2">
                  <span>SCOPRI IL MENÙ</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </motion.div>

            {/* Stats / Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-16 flex items-center gap-12 pt-8 border-t border-foreground/5"
            >
              <div>
                <p className="text-2xl font-bold text-foreground">35+</p>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">ANNI DI STORIA</p>
              </div>
              <div className="w-px h-10 bg-foreground/10" />
              <div>
                <p className="text-2xl font-bold text-foreground">4.8</p>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">RATING GOOGLE</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image (Grid: 5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Carne alla brace di qualità" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              
              {/* Floating Content Card */}
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
                <p className="text-white/80 text-xs font-bold tracking-widest uppercase mb-1">LA NOSTRA SPECIALITÀ</p>
                <h3 className="text-white text-2xl font-black uppercase tracking-tight">Tagliata Belvedere</h3>
              </div>
            </div>

            {/* Abstract Decorative Element */}
            <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 border-8 border-primary/10 rounded-full" />
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/40"
      >
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-muted-foreground/40 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;