import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
      className="py-20 md:py-28 bg-[#f7f4ed] relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        <SectionHeader 
          subtitle="QUALITÀ E ACCOGLIENZA"
          title="I Nostri Servizi"
          align="left"
          className="mb-12"
        />

        <div 
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          <div className="space-y-4">
            {menuItems.map((item, index) => (
              <article
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                className="group cursor-pointer"
                role="button"
                tabIndex={0}
              >
                <div className={cn(
                  "flex items-start gap-6 p-6 transition-all duration-300 rounded-[12px] border",
                  activeIndex === index 
                    ? "bg-[#1c1c1c]/5 border-[#1c1c1c]/20" 
                    : "bg-transparent border-transparent hover:bg-[#1c1c1c]/[0.02]"
                )}>
                  <span className={cn(
                    "text-xl font-semibold transition-colors duration-300",
                    activeIndex === index ? "text-[#1c1c1c]" : "text-[#1c1c1c]/20"
                  )}>
                    {item.num}
                  </span>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={cn(
                        "text-lg lg:text-xl font-semibold transition-colors duration-300 tracking-[-0.01em]",
                        activeIndex === index ? "text-[#1c1c1c]" : "text-[#1c1c1c]/60 group-hover:text-[#1c1c1c]"
                      )}>
                        {item.name}
                      </h3>
                      {activeIndex === index && (
                        <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                          <ArrowRight className="text-[#1c1c1c] w-5 h-5" />
                        </motion.div>
                      )}
                    </div>
                    <p className={cn(
                      "text-sm leading-relaxed transition-all duration-500 font-normal",
                      activeIndex === index ? "text-[#5f5f5d]" : "text-transparent opacity-0 max-h-0 overflow-hidden"
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
              <div className="absolute inset-0 z-20 rounded-[16px] overflow-hidden border border-[#eceae4] shadow-sm">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeIndex}
                    initial={{ scale: 1.05, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    src={menuItems[activeIndex].image} 
                    alt={menuItems[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button 
            asChild 
            size="lg"
            className="px-10"
          >
            <a href="https://drive.google.com/file/d/1_LBXD8l_BNEpK1vPxeo7qVWKxIr9ePlB/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              Scarica il menù digitale
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;