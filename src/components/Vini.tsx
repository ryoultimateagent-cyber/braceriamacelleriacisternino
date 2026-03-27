import { Wine, ArrowRight, Award } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";
import { Button } from "@/components/ui/button";

const Vini = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <section 
      id="vini" 
      ref={ref} 
      className="py-24 lg:py-40 bg-charcoal relative overflow-hidden"
      aria-label="La nostra cantina"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <AnimatedSection delay={0.2} className="relative z-10">
            <SectionHeader 
              subtitle="Selezione Enologica"
              title="La Nostra Cantina"
              align="left"
              className="mb-12"
            />
            
            <div className="space-y-6 lg:space-y-8">
              <p className="text-lg lg:text-xl text-gold-light/90 font-accent italic leading-relaxed">
                "Il vino è il compagno ideale della brace. Abbiamo curato una selezione che celebra 
                il carattere forte della Puglia e l'eleganza delle migliori vigne italiane."
              </p>
              
              <div className="space-y-4">
                {[
                  "Primitivo di Manduria e Gioia del Colle",
                  "Negroamaro del Salento",
                  "Nero di Troia della Daunia",
                  "Selezione di Bollicine Metodo Classico"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-1.5 h-1.5 bg-fire rounded-full group-hover:scale-150 transition-transform" />
                    <span className="text-gold-light/70 font-display text-sm lg:text-base tracking-wider uppercase group-hover:text-gold transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-10">
                <Button 
                  asChild 
                  variant="gold" 
                  size="lg" 
                  className="h-14 px-10 text-sm uppercase tracking-widest font-bold shadow-2xl"
                >
                  <a
                    href="https://drive.google.com/file/d/1CYEh6u9jwJT04kDssM7RbBK_p04M-QZj/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4"
                  >
                    <Wine className="w-5 h-5" />
                    Sfoglia la Carta Vini
                  </a>
                </Button>
              </div>
            </div>
          </AnimatedSection>

          {/* Visual Side */}
          <AnimatedSection delay={0.4} className="relative">
            <motion.div 
              style={{ y: imageY, rotate }}
              className="relative aspect-[4/5] bg-noir/40 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden shadow-2xl group flex items-center justify-center text-[10rem] lg:text-[14rem] select-none"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-fire/10 via-transparent to-gold/10 opacity-30" />
              <div 
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity" 
                aria-hidden="true"
              />
              
              <span className="relative z-10 filter drop-shadow-[0_20px_50px_rgba(139,21,56,0.5)] group-hover:scale-105 transition-transform duration-700" role="img" aria-label="Calice di vino rosso">
                🍷
              </span>
              
              {/* Floating Award/Badge */}
              <div className="absolute top-10 right-10 bg-noir/80 backdrop-blur-md border border-gold/40 p-6 rounded-full rotate-12 group-hover:rotate-0 transition-transform">
                <Award className="text-gold w-8 h-8" />
              </div>
            </motion.div>
            
            {/* Background Decorative Rings */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-fire/10 rounded-full scale-150 animate-pulse-glow" />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Vini;
