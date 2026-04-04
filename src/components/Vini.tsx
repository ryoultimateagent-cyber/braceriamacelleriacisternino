import { Wine, Star } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import SectionHeader from "./SectionHeader";

const Vini = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section id="vini" ref={ref} className="py-4 md:py-8 bg-transparent relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="space-y-10">
            <SectionHeader 
              subtitle="L'INCONTRO PERFETTO"
              title="LA NOSTRA CANTINA"
              align="left"
              className="mb-0"
            />
            
            <p className="text-white/50 text-sm md:text-base font-medium leading-relaxed max-w-xl italic">
              "Il vino è il compagno della buona carne. Abbiamo curato una selection che celebra il territorio, dai rossi profondi ai bianchi minerali."
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
              {[
                { label: "PRIMITIVO", note: "Anima di Manduria" },
                { label: "NEGROAMARO", note: "Sole del Salento" },
                { label: "NERO DI TROIA", note: "Orgoglio Dauno" },
                { label: "BOLLICINE", note: "Metodo Classico" }
              ].map((item, i) => (
                <div key={i} className="group border-l-2 border-white/5 pl-5 py-2 hover:border-primary transition-all duration-500">
                  <h4 className="text-white text-[22px] font-bold tracking-[-0.5px] uppercase italic group-hover:text-primary transition-colors mb-1.5">{item.label}</h4>
                  <p className="text-white/45 text-[11px] font-normal tracking-[0.14em] uppercase italic">{item.note}</p>
                </div>
              ))}
            </div>

            <Button 
              asChild 
              className="h-14 px-10 bg-primary hover:bg-primary/90 text-white font-black italic uppercase tracking-tighter rounded-full shadow-lg text-sm group"
            >
              <a href="#prenota" className="flex items-center gap-3">
                <Wine className="w-5 h-5 transition-transform group-hover:rotate-12" />
                SFOGLIA LA CARTA
              </a>
            </Button>
          </div>

          <div className="relative mt-8 lg:mt-0">
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
              
              <div className="absolute -bottom-5 -left-5 bg-primary text-white p-6 rounded-[2rem] shadow-xl flex flex-col items-center border-[6px] border-black">
                 <Star className="w-6 h-6 mb-1 fill-current" />
                 <span className="text-[8px] font-black uppercase tracking-widest italic">CRU SELECTION</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vini;