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
    <section id="vini" ref={ref} className="section-spacing bg-noir relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] border border-gold/5 rounded-full scale-150 animate-pulse-glow pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-[1400px] mx-auto">
          {/* Left Side: Text Content */}
          <AnimatedSection delay={0.2} className="relative z-10">
            <span className="text-gold text-xs uppercase tracking-[0.6em] font-bold mb-6 md:mb-8 block">L'Incontro Perfetto</span>
            <h2 className="text-3xl md:text-6xl lg:text-8xl font-display font-black text-cream uppercase leading-[0.9] mb-8 md:mb-12">
              LA NOSTRA <br /> <span className="text-gold italic font-light">CANTINA</span>
            </h2>
            
            <div className="h-1 w-24 bg-gold mb-10 md:mb-12" />
            
            <p className="text-cream/70 text-lg md:text-xl font-accent italic leading-relaxed mb-10 md:mb-16 max-w-xl">
              "Il vino è il compagno silenzioso della brace. Abbiamo curato una selection che celebra il territorio pugliese, dai rossi profondi ai bianchi minerali delle nostre coste."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-10 md:mb-16">
              {[
                { label: "PRIMITIVO", note: "L'Anima di Manduria" },
                { label: "NEGROAMARO", note: "Il Sole del Salento" },
                { label: "NERO DI TROIA", note: "Orgoglio della Daunia" },
                { label: "BOLLICINE", note: "Metodo Classico" }
              ].map((item, i) => (
                <div key={i} className="group border-l border-gold/30 pl-6 py-2 hover:border-gold transition-colors duration-300">
                  <h4 className="text-cream font-bold uppercase tracking-widest text-[10px] md:text-xs mb-2 group-hover:text-gold transition-colors">{item.label}</h4>
                  <p className="text-cream/60 text-[9px] md:text-[10px] uppercase tracking-widest">{item.note}</p>
                </div>
              ))}
            </div>

            <Button 
              asChild 
              size="lg"
              className="h-12 md:h-16 px-8 md:px-12 bg-gold hover:bg-gold-dark text-noir uppercase tracking-[0.3em] font-black text-xs md:text-sm rounded-lg transition-all duration-300"
            >
              <a href="https://drive.google.com/file/d/1CYEh6u9jwJT04kDssM7RbBK_p04M-QZj/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 md:gap-4">
                <Wine className="w-4 h-4 md:w-5 md:h-5" />
                Sfoglia la Carta
              </a>
            </Button>
          </AnimatedSection>

          {/* Right Side: Visual Image */}
          <AnimatedSection className="relative mt-12 lg:mt-0">
            <motion.div 
              style={{ y: imageY, rotate }}
              className="relative aspect-[3/4] w-full max-w-[400px] lg:max-w-[500px] ml-auto overflow-hidden border border-gold/10 p-4 rounded-xl"
            >
              <div className="absolute inset-0 bg-gold/5 z-0" />
              <div className="relative h-full w-full overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop" 
                  alt="Fine Wine Collection" 
                  loading="lazy"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-transparent to-transparent" />
                
                {/* Floating Info Badge */}
                <div className="absolute -bottom-6 -left-6 bg-gold text-noir p-6 md:p-8 shadow-2xl rounded-xl">
                   <Star className="w-6 h-6 md:w-8 md:h-8 mb-2" />
                   <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest">Cru Selection</span>
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