import { Wine, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import SectionHeader from "./SectionHeader";
import { useParallax } from "@/hooks/useParallax";
import ScrollReveal from "./ScrollReveal";

const Vini = () => {
  const { ref: imageRef, transform: imageY } = useParallax(50);
  const { ref: badgeRef, transform: badgeY } = useParallax(-20);

  return (
    <section id="vini" className="py-24 md:py-32 bg-transparent relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="space-y-10">
            <SectionHeader 
              subtitle="L'INCONTRO PERFETTO"
              title="LA NOSTRA CANTINA"
              align="left"
              className="mb-0"
            />
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white/60 text-lg md:text-xl font-medium leading-relaxed max-w-xl italic"
            >
              "Il vino è il compagno della buona carne. Abbiamo curato una selection che celebra il territorio, dai rossi profondi ai bianchi minerali."
            </motion.p>
            
            <ScrollReveal staggerChildren={0.1} variant="fade-left" className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-8">
              {[
                { label: "PRIMITIVO", note: "Anima di Manduria" },
                { label: "NEGROAMARO", note: "Sole del Salento" },
                { label: "NERO DI TROIA", note: "Orgoglio Dauno" },
                { label: "BOLLICINE", note: "Metodo Classico" }
              ].map((item, i) => (
                <div key={i} className="group border-l-2 border-white/5 pl-5 py-2 hover:border-primary transition-all duration-500">
                  <h4 className="text-white text-[24px] md:text-[28px] font-black tracking-tighter uppercase italic group-hover:text-primary transition-colors mb-2 leading-none">{item.label}</h4>
                  <p className="text-white/50 text-[12px] font-bold tracking-[0.2em] uppercase italic">{item.note}</p>
                </div>
              ))}
            </ScrollReveal>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Button 
                asChild 
                className="h-14 px-10 bg-primary hover:bg-primary/90 text-white font-black italic uppercase tracking-tighter rounded-full shadow-lg text-sm group"
              >
                <a href="#prenota" className="flex items-center gap-3">
                  <Wine className="w-5 h-5 transition-transform group-hover:rotate-12" />
                  SFOGLIA LA CARTA
                </a>
              </Button>
            </motion.div>
          </div>

          <div className="relative mt-8 lg:mt-0" ref={imageRef}>
            <motion.div 
              style={{ y: imageY }}
              className="relative aspect-[3/4] w-full max-w-md ml-auto rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl group fire-glow-card"
            >
              <img 
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop" 
                alt="Vini d'Eccellenza" 
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              
              <motion.div 
                ref={badgeRef}
                style={{ y: badgeY }}
                className="absolute -bottom-5 -left-5 bg-primary text-white p-6 rounded-[2rem] shadow-xl flex flex-col items-center border-[6px] border-black"
              >
                 <Star className="w-6 h-6 mb-1 fill-current" />
                 <span className="text-[8px] font-black uppercase tracking-widest italic">CRU SELECTION</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vini;
