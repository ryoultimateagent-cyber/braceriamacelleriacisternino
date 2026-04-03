import { Wine, Star } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const Vini = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);


  return (
    <section id="vini" ref={ref} className="py-16 md:py-24 lg:py-28 bg-black relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center">
          
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-primary text-xs font-black uppercase tracking-[0.4em] block italic">L'INCONTRO PERFETTO</span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.85] uppercase italic">
                LA NOSTRA <br /> <span className="text-primary">CANTINA</span>
              </h2>
              <p className="text-white/60 text-xl lg:text-2xl font-medium leading-relaxed max-w-2xl italic">
                "Il vino è il compagno della buona carne. Abbiamo curato una selection che celebra il territorio, dai rossi profondi ai bianchi minerali."
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                { label: "PRIMITIVO", note: "L'Anima di Manduria" },
                { label: "NEGROAMARO", note: "Il Sole del Salento" },
                { label: "NERO DI TROIA", note: "Orgoglio della Daunia" },
                { label: "BOLLICINE", note: "Metodo Classico" }
              ].map((item, i) => (
                <div key={i} className="group border-l-4 border-white/10 pl-8 py-4 hover:border-primary transition-all duration-500">
                  <h4 className="text-white/40 font-black uppercase tracking-widest text-sm mb-1 group-hover:text-primary transition-colors italic">{item.label}</h4>
                  <p className="text-white/20 text-xs uppercase tracking-widest font-black italic">{item.note}</p>
                </div>
              ))}
            </div>

            <Button 
              asChild 
              className="h-20 px-12 bg-primary hover:bg-primary/90 text-white font-black italic uppercase tracking-tighter rounded-full shadow-[0_20px_50px_rgba(204,0,0,0.3)] text-xl group"
            >
              <a href="#prenota" className="flex items-center gap-4">
                <Wine className="w-6 h-6 transition-transform group-hover:rotate-12" />
                SFOGLIA LA CARTA
              </a>
            </Button>
          </div>

          <div className="relative mt-12 lg:mt-0">
            <motion.div 
              style={{ y: imageY }}
              className="relative aspect-[3/4] w-full max-w-xl ml-auto rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl group fire-glow-card"
            >
              <img 
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop" 
                alt="Vini d'Eccellenza" 
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              
              <div className="absolute -bottom-10 -left-10 bg-primary text-white p-12 rounded-[3rem] shadow-2xl flex flex-col items-center border-4 border-black">
                 <Star className="w-10 h-10 mb-2 fill-current" />
                 <span className="text-[10px] font-black uppercase tracking-widest italic">CRU SELECTION</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vini;
