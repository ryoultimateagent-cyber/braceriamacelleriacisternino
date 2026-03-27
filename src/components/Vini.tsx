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
    <section id="vini" ref={ref} className="py-32 lg:py-56 bg-noir relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] border border-gold/5 rounded-full scale-150 animate-pulse-glow pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-[1400px] mx-auto">
          {/* Left Side: Text Content */}
          <AnimatedSection delay={0.2} className="relative z-10">
            <span className="text-gold text-xs uppercase tracking-[0.6em] font-bold mb-8 block">L'Incontro Perfetto</span>
            <h2 className="text-5xl md:text-8xl font-display font-black text-cream uppercase leading-[0.9] mb-12">
              LA NOSTRA <br /> <span className="text-gold italic font-light">CANTINA</span>
            </h2>
            
            <div className="h-1 w-24 bg-gold mb-12" />
            
            <p className="text-cream/60 text-xl font-accent italic leading-relaxed mb-16 max-w-xl">
              "Il vino è il compagno silenzioso della brace. Abbiamo curato una selezione che celebra il territorio pugliese, dai rossi profondi ai bianchi minerali delle nostre coste."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              {[
                { label: "PRIMITIVO", note: "L'Anima di Manduria" },
                { label: "NEGROAMARO", note: "Il Sole del Salento" },
                { label: "NERO DI TROIA", note: "Orgoglio della Daunia" },
                { label: "BOLLICINE", note: "Metodo Classico" }
              ].map((item, i) => (
                <div key={i} className="group border-l border-gold/20 pl-6 py-2 hover:border-gold transition-colors duration-500">
                  <h4 className="text-cream font-bold uppercase tracking-widest text-xs mb-2 group-hover:text-gold transition-colors">{item.label}</h4>
                  <p className="text-cream/30 text-[10px] uppercase tracking-widest">{item.note}</p>
                </div>
              ))}
            </div>

            <Button 
              asChild 
              size="lg"
              className="h-16 px-12 bg-gold hover:bg-gold-dark text-noir uppercase tracking-[0.3em] font-black rounded-none transition-all duration-500"
            >
              <a href="https://drive.google.com/file/d/1CYEh6u9jwJT04kDssM7RbBK_p04M-QZj/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                <Wine className="w-5 h-5" />
                Sfoglia la Carta
              </a>
            </Button>
          </AnimatedSection>

          {/* Right Side: Visual Image */}
          <AnimatedSection className="relative">
            <motion.div 
              style={{ y: imageY, rotate }}
              className="relative aspect-[3/4] w-full max-w-[500px] ml-auto overflow-hidden border border-gold/10 p-4"
            >
              <div className="absolute inset-0 bg-gold/5 z-0" />
              <div className="relative h-full w-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop" 
                  alt="Fine Wine Collection" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-transparent to-transparent" />
                
                {/* Floating Info Badge */}
                <div className="absolute -bottom-6 -left-6 bg-gold text-noir p-8 shadow-2xl">
                   <Star className="w-8 h-8 mb-2" />
                   <span className="text-[10px] font-black uppercase tracking-widest">Cru Selection</span>
                </div>
              </div>
              
              {/* Decorative Frame */}
              <div className="absolute top-8 left-8 bottom-8 right-8 border border-white/10 pointer-events-none" />
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Vini;