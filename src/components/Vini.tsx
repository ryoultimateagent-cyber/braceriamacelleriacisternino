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
    <section id="vini" ref={ref} className="py-20 md:py-28 bg-[#f7f4ed] relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="space-y-10">
            <SectionHeader 
              subtitle="L'INCONTRO PERFETTO"
              title="La Nostra Cantina"
              align="left"
              className="mb-0"
            />
            
            <p className="text-[#5f5f5d] text-lg font-normal leading-relaxed max-w-xl">
              "Il vino è il compagno della buona carne. Abbiamo curato una selezione che celebra il territorio, dai rossi profondi ai bianchi minerali."
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              {[
                { label: "PRIMITIVO", note: "Anima di Manduria" },
                { label: "NEGROAMARO", note: "Sole del Salento" },
                { label: "NERO DI TROIA", note: "Orgoglio Dauno" },
                { label: "BOLLICINE", note: "Metodo Classico" }
              ].map((item, i) => (
                <div key={i} className="group border-l border-[#eceae4] pl-5 py-2 hover:border-[#1c1c1c]/40 transition-all duration-300">
                  <h4 className="text-[#1c1c1c] font-semibold uppercase tracking-wider text-[11px] mb-1 group-hover:text-[#1c1c1c] transition-colors">{item.label}</h4>
                  <p className="text-[#5f5f5d] text-[10px] uppercase tracking-widest font-normal">{item.note}</p>
                </div>
              ))}
            </div>

            <Button 
              asChild 
              size="lg"
              className="group"
            >
              <a href="#prenota" className="flex items-center gap-3">
                <Wine className="w-4 h-4 transition-transform group-hover:rotate-12" />
                <span>Sfoglia la carta</span>
              </a>
            </Button>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <motion.div 
              style={{ y: imageY }}
              className="relative aspect-[3/4] w-full max-w-md ml-auto rounded-[16px] overflow-hidden border border-[#eceae4] shadow-sm group"
            >
              <img 
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop" 
                alt="Vini d'Eccellenza" 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c]/40 via-transparent to-transparent opacity-60" />
              
              <div className="absolute -bottom-4 -left-4 bg-[#1c1c1c] text-[#fcfbf8] p-5 rounded-[12px] shadow-lg flex flex-col items-center">
                 <Star className="w-5 h-5 mb-1.5 fill-current" />
                 <span className="text-[9px] font-semibold uppercase tracking-widest">CRU SELECTION</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vini;