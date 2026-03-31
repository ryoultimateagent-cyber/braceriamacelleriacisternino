import { cn } from "@/lib/utils";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { FileText, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";
import { Button } from "@/components/ui/button";

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
  clipId: string;
  image: string;
}

const menuItems: MenuItem[] = [
  {
    num: "01",
    name: "Braceria Serale",
    desc: "Su ordinazione, serviamo i migliori tagli cotti sulla nostra brace viva.",
    clipId: "clip-original",
    image: menuCarni
  },
  {
    num: "02",
    name: "Asporto Disponibile",
    desc: "Porta la nostra qualità a casa tua con il servizio d'asporto rapido.",
    clipId: "clip-hexagons",
    image: menuSpecialita
  },
  {
    num: "03",
    name: "Prenotazioni",
    desc: "Accettiamo prenotazioni per garantirti il miglior tavolo e servizio.",
    clipId: "clip-pixels",
    image: menuAntipasti
  },
  {
    num: "04",
    name: "Comfort & Accesso",
    desc: "Parcheggio in zona, tavoli all'esterno e seggioloni per bambini.",
    clipId: "clip-original",
    image: menuContorni
  },
  {
    num: "05",
    name: "Pagamenti & Pet",
    desc: "Accettiamo Visa/Mastercard/AmEx. Siamo orgogliosamente Pet Friendly.",
    clipId: "clip-hexagons",
    image: menuDolci
  },
  {
    num: "06",
    name: "Passione Putignanese",
    desc: "Dal 1986, l'arte della carne nel cuore di Putignano.",
    clipId: "clip-pixels",
    image: menuPrimi
  }
];

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<SVGImageElement>(null);
  const mainGroupRef = useRef<SVGGElement>(null);
  const masterTl = useRef<gsap.core.Timeline | null>(null);

  const createLoop = (index: number) => {
    const item = menuItems[index];
    const selector = `#${item.clipId} .path`;

    if (masterTl.current) masterTl.current.kill();

    if (imageRef.current) imageRef.current.setAttribute("href", item.image);
    if (mainGroupRef.current) mainGroupRef.current.setAttribute("clip-path", `url(#${item.clipId})`);
    
    gsap.set(selector, { scale: 0, transformOrigin: "50% 50%" });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    tl.to(selector, {
      scale: 1,
      duration: 0.8,
      stagger: { amount: 0.4, from: "random" },
      ease: "expo.out",
    })
    .to(selector, {
      scale: 1.05,
      duration: 1.5,
      yoyo: true,
      repeat: 1,
      ease: "sine.inOut",
      stagger: { amount: 0.2, from: "center" }
    })
    .to(selector, {
      scale: 0,
      duration: 0.6,
      stagger: { amount: 0.3, from: "edges" },
      ease: "expo.in",
    });

    masterTl.current = tl;
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      createLoop(0);
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleItemHover = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
    createLoop(index);
  };

  return (
    <section 
      id="menu" 
      className="section-container py-24 md:py-32 bg-white relative overflow-hidden"
      aria-label="I nostri servizi"
    >
      <div className="relative z-10">
        {/* Header */}
        <SectionHeader 
          subtitle="QUALITÀ E ACCOGLIENZA"
          title="I Nostri Servizi"
          className="mb-16 md:mb-24"
        />

        {/* Interactive Menu Container */}
        <div 
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-7xl mx-auto items-center"
        >
          {/* Menu List */}
          <AnimatedSection delay={0.2} className="order-2 lg:order-1">
            <div className="space-y-4">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  onMouseEnter={() => handleItemHover(index)}
                  onClick={() => handleItemHover(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleItemHover(index);
                    }
                  }}
                  className="group"
                  role="button"
                  tabIndex={0}
                  aria-label={`Scopri di più su: ${item.name}`}
                >
                  <div className={cn(
                    "flex items-start gap-6 p-8 transition-all duration-500 rounded-3xl border-2",
                    activeIndex === index 
                      ? "bg-primary/5 border-primary shadow-2xl scale-[1.02]" 
                      : "bg-transparent border-transparent hover:bg-secondary/50"
                  )}>
                    {/* Number */}
                    <span className={cn(
                      "text-2xl lg:text-4xl font-black transition-colors duration-300",
                      activeIndex === index ? "text-primary" : "text-foreground/10 group-hover:text-primary/30"
                    )}>
                      {item.num}
                    </span>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className={cn(
                          "text-xl lg:text-2xl font-black transition-colors duration-300 uppercase tracking-tight",
                          activeIndex === index ? "text-foreground" : "text-foreground/40 group-hover:text-foreground"
                        )}>
                          {item.name}
                        </h3>
                        {activeIndex === index && (
                          <motion.div 
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                          >
                            <ArrowRight className="text-primary w-6 h-6" />
                          </motion.div>
                        )}
                      </div>
                      <p className={cn(
                        "text-base lg:text-lg leading-relaxed transition-all duration-500 font-medium",
                        activeIndex === index 
                          ? "text-muted-foreground opacity-100" 
                          : "text-muted-foreground/30 opacity-0 max-h-0 overflow-hidden"
                      )}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Animated Visual */}
          <AnimatedSection delay={0.4} className="order-1 lg:order-2 flex justify-center lg:sticky lg:top-40 h-fit">
            <div className="relative w-full max-w-lg aspect-square">
              {/* Image Container */}
              <div className="absolute inset-0 z-20 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeIndex}
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "circOut" }}
                    src={menuItems[activeIndex].image} 
                    alt={menuItems[activeIndex].name}
                    loading="lazy"
                    width="512"
                    height="512"
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-12 -right-12 w-64 h-64 border-[30px] border-primary/5 rounded-full" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 border-[20px] border-accent/10 rounded-full" />
            </div>
          </AnimatedSection>
        </div>

        {/* Action Button */}
        <AnimatedSection delay={0.6} className="text-center mt-24">
          <Button 
            asChild 
            size="lg" 
            className="h-16 px-12 bg-foreground text-background hover:bg-foreground/90 font-black uppercase tracking-widest text-sm shadow-2xl rounded-2xl active:scale-95 transition-all"
          >
            <a
              href="https://drive.google.com/file/d/1_LBXD8l_BNEpK1vPxeo7qVWKxIr9ePlB/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4"
            >
              <FileText className="w-5 h-5" />
              SCARICA IL MENÙ DIGITALE
            </a>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Menu;