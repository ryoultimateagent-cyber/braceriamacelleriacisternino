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
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  return (
    <section id="vini" ref={ref} className="py-32 lg:py-48 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] border border-gold/5 rounded-full scale-150 animate-pulse-glow" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center max-w-7xl mx-auto">
          <AnimatedSection className="relative order-2 lg:order-1">
            <motion.div 
              style={{ y: imageY, rotate }}
              className="relative aspect-[4/5] bg-noir rounded-[3rem] overflow-hidden shadow-2xl group flex items-center justify-center border border-gold/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-ember/20 via-transparent to-gold/20 mix-blend-overlay" />
              <img 
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop" 
                alt="Wine Selection" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 transition-opacity group-hover:opacity-60 duration-700" 
              />
              <div className="relative z-10 text-[12rem] filter drop-shadow-[0_20px_50px_rgba(139,21,56,0.5)] group-hover:scale-105 transition-transform duration-700 select-none">🍷</div>
              
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-noir/80 backdrop-blur-xl border border-gold/40 p-6 rounded-2xl flex items-center gap-4">
                <Award className="text-gold w-6 h-6" />
                <span className="text-gold text-[10px] uppercase font-black tracking-[0.3em]">Selezione Cru Puglia</span>
              </div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="relative z-10 order-1 lg:order-2">
            <span className="text-gold text-xs uppercase tracking-[0.5em] font-bold mb-6 block">L'Incontro Perfetto</span>
            <h2 className="text-4xl md:text-7xl font-display font-black text-cream uppercase leading-tight mb-10">
              CANTINA <br /> <span className="text-ember italic">D'AUTORE</span>
            </h2>
            
            <p className="text-gold-light/70 text-lg md:text-xl font-accent italic leading-relaxed mb-12">
              Il vino è l'anima della cena. Ogni bottiglia nella nostra carta è stata scelta per dialogare con l'intensità della brace. Dai rossi opulenti del Salento alle bollicine più ricercate.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                { label: "Primitivo", note: "Manduria & Gioia del Colle" },
                { label: "Negroamaro", note: "Il cuore del Salento" },
                { label: "Nero di Troia", note: "Eleganza della Daunia" },
                { label: "Bollicine", note: "Metodo Classico" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-gold/5 border border-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold group-hover:text-noir transition-all duration-500">
                    <Star className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-cream font-bold uppercase tracking-widest text-sm">{item.label}</h4>
                    <p className="text-gold-light/40 text-[10px] uppercase tracking-wider">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              asChild 
              className="h-16 px-12 bg-gold hover:bg-gold-satin text-noir uppercase tracking-[0.3em] font-black rounded-none shadow-fire transition-all duration-500"
            >
              <a href="https://drive.google.com/file/d/1CYEh6u9jwJT04kDssM7RbBK_p04M-QZj/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                <Wine className="w-5 h-5" />
                Sfoglia la Carta Vini
              </a>
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Vini;