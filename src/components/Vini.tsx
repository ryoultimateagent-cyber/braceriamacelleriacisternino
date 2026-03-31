import { Wine, Award, Star } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";

const Vini = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <section id="vini" ref={ref} className="section-container py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-[1400px] mx-auto">
          {/* Left Side: Text Content */}
          <AnimatedSection delay={0.2} className="relative z-10 space-y-10">
            <div className="space-y-6">
              <span className="text-primary text-xs font-bold uppercase tracking-[0.4em]">L'INCONTRO PERFETTO</span>
              <h2 className="text-4xl md:text-5xl lg:text-8xl font-black text-foreground tracking-tight leading-[0.9] uppercase">
                LA NOSTRA <br /> <span className="text-primary italic">CANTINA</span>
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl font-medium leading-relaxed max-w-xl italic">
                "Il vino è il compagno della buona carne. Abbiamo curato una selezione che celebra il territorio, dai rossi profondi ai bianchi minerali."
              </p>
            </div>
            
            <div className="h-1.5 w-24 bg-primary rounded-full" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                { label: "PRIMITIVO", note: "L'Anima di Manduria" },
                { label: "NEGROAMARO", note: "Il Sole del Salento" },
                { label: "NERO DI TROIA", note: "Orgoglio della Daunia" },
                { label: "BOLLICINE", note: "Metodo Classico" }
              ].map((item, i) => (
                <div key={i} className="group border-l-4 border-primary/10 pl-6 py-2 hover:border-primary transition-colors duration-300">
                  <h4 className="text-foreground font-black uppercase tracking-widest text-xs mb-1 group-hover:text-primary transition-colors">{item.label}</h4>
                  <p className="text-muted-foreground text-[10px] uppercase tracking-widest font-bold">{item.note}</p>
                </div>
              ))}
            </div>

            <Button 
              asChild 
              size="lg"
              className="h-16 px-10 bg-primary hover:bg-primary/90 text-white font-black rounded-2xl shadow-xl shadow-primary/20 transition-all active:scale-95 group"
            >
              <a href="#" className="flex items-center gap-4">
                <Wine className="w-5 h-5 transition-transform group-hover:rotate-12" />
                <span>SFOGLIA LA CARTA</span>
              </a>
            </Button>
          </AnimatedSection>

          {/* Right Side: Visual Image */}
          <AnimatedSection className="relative mt-12 lg:mt-0">
            <motion.div 
              style={{ y: imageY, rotate }}
              className="relative aspect-[3/4] w-full max-w-[400px] lg:max-w-[500px] ml-auto rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl group"
            >
              <img 
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop" 
                alt="Vini d'Eccellenza" 
                loading="lazy"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              
              {/* Floating Info Badge */}
              <div className="absolute -bottom-8 -left-8 bg-primary text-white p-8 rounded-[2rem] shadow-2xl flex flex-col items-center">
                 <Star className="w-8 h-8 mb-2 fill-current" />
                 <span className="text-[10px] font-black uppercase tracking-widest">CRU SELECTION</span>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Vini;