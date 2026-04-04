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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
        >
          {menuItems.map((item, index) => (
            <article
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              className="group cursor-pointer p-6 transition-all duration-500 rounded-[1.5rem] border border-white/5 bg-white/5 hover:border-primary/20"
              role="button"
              tabIndex={0}
            >
              <div className="flex flex-col gap-y-1.5 h-full">
                <span className="text-[11px] font-normal tracking-[0.10em] text-white/35 italic">
                  {item.num}
                </span>
                
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[17px] font-semibold text-white uppercase italic tracking-[0.04em] group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-[14px] leading-[1.60] text-white/70 font-normal">
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