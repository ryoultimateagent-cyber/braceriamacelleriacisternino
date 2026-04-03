import { cn } from "@/lib/utils";
import { useRef, useState, useLayoutEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import SectionHeader from "./SectionHeader";

// Import images
import menuAntipasti from "@/assets/menu-antipasti.jpg";
import menuPrimi from "@/assets/menu-primi.jpg";
import menuCarni from "@/assets/menu-carni.jpg";
import menuSpecialita from "@/assets/menu-specialita.jpg";
import menuContorni from "@/assets/menu-contorni.jpg";
import menuDolci from "@/assets/menu-dolci.jpg";

interface MenuItem {
  num: string;
  name: string;
  desc: string;
  image: string;
}

const menuItems: MenuItem[] = [
  {
    num: "01",
    name: "Braceria Serale",
    desc: "Su ordinazione, serviamo i migliori tagli cotti sulla nostra brace viva.",
    image: menuCarni
  },
  {
    num: "02",
    name: "Asporto Disponibile",
    desc: "Porta la nostra qualità a casa tua con il servizio d'asporto rapido.",
    image: menuSpecialita
  },
  {
    num: "03",
    name: "Prenotazioni",
    desc: "Accettiamo prenotazioni per garantirti il miglior tavolo e servizio.",
    image: menuAntipasti
  },
  {
    num: "04",
    name: "Comfort & Accesso",
    desc: "Parcheggio in zona, tavoli all'esterno e seggioloni per bambini.",
    image: menuContorni
  },
  {
    num: "05",
    name: "Pagamenti & Pet",
    desc: "Accettiamo Visa/Mastercard/AmEx. Siamo orgogliosamente Pet Friendly.",
    image: menuDolci
  },
  {
    num: "06",
    name: "Passione Putignanese",
    desc: "Dal 1986, l'arte della carne nel cuore di Putignano.",
    image: menuPrimi
  }
];

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      id="menu" 
      className="py-16 md:py-24 bg-transparent relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        <SectionHeader 
          subtitle="QUALITÀ E ACCOGLIENZA"
          title="I NOSTRI SERVIZI"
          align="left"
          className="mb-12"
        />

        <div 
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          <div className="space-y-2">
            {menuItems.map((item, index) => (
              <article
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                className="group cursor-pointer"
                role="button"
                tabIndex={0}
              >
                <div className={cn(
                  "flex items-start gap-6 p-5 transition-all duration-500 rounded-[1.5rem] border-2",
                  activeIndex === index 
                    ? "bg-white/5 border-primary/20 shadow-[0_0_30px_rgba(204,0,0,0.1)] scale-[1.01]" 
                    : "bg-transparent border-transparent hover:bg-white/5"
                )}>
                  <span className={cn(
                    "text-xl lg:text-2xl font-black transition-colors duration-500 italic",
                    activeIndex === index ? "text-primary" : "text-white/10"
                  )}>
                    {item.num}
                  </span>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={cn(
                        "text-lg lg:text-xl font-black transition-colors duration-500 uppercase italic tracking-tighter",
                        activeIndex === index ? "text-white" : "text-white/40 group-hover:text-white"
                      )}>
                        {item.name}
                      </h3>
                      {activeIndex === index && (
                        <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                          <ArrowRight className="text-primary w-6 h-6" />
                        </motion.div>
                      )}
                    </div>
                    <p className={cn(
                      "text-sm leading-relaxed transition-all duration-700 font-medium",
                      activeIndex === index ? "text-white/50" : "text-white/0 opacity-0 max-h-0 overflow-hidden"
                    )}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center lg:sticky lg:top-32 h-fit">
            <div className="relative w-full max-w-lg aspect-square">
              <div className="absolute inset-0 z-20 rounded-[3rem] overflow-hidden border border-white/5 fire-glow-card">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeIndex}
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    src={menuItems[activeIndex].image} 
                    alt={menuItems[activeIndex].name}
                    className="w-full h-full object-cover grayscale brightness-50"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button 
            asChild 
            className="h-14 px-12 bg-white text-black hover:bg-white/90 font-black uppercase tracking-tighter text-sm rounded-full transition-all shadow-xl"
          >
            <a href="https://drive.google.com/file/d/1_LBXD8l_BNEpK1vPxeo7qVWKxIr9ePlB/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              SCARICA IL MENÙ DIGITALE
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;