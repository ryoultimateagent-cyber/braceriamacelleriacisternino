import { cn } from "@/lib/utils";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { FileText, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
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
      className="py-16 md:py-24 lg:py-28 bg-black relative overflow-hidden"
      aria-label="I nostri servizi"
    >
      {/* Background Separators */}
      <div className="absolute inset-0 flex justify-between px-[10%] pointer-events-none opacity-10">
        {[1, 2, 3, 4].map(i => (
          <motion.div 
            key={i}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, delay: i * 0.2 }}
            className="w-[1px] h-full bg-white origin-top"
          />
        ))}
      </div>

      <svg className="absolute w-0 h-0 invisible pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="clip-original">
            <rect className="path" x="0" y="0" width="512" height="512" rx="40" />
          </clipPath>
          <clipPath id="clip-hexagons">
            <path className="path" d="M256,0 L477.7,128 L477.7,384 L256,512 L34.3,384 L34.3,128 Z" />
          </clipPath>
          <clipPath id="clip-pixels">
             <rect className="path" x="50" y="50" width="412" height="412" rx="100" />
          </clipPath>
        </defs>
      </svg>

      <div className="section-container relative z-10">
        <div className="mb-24 space-y-4">
          <span className="text-primary text-xs font-black uppercase tracking-[0.4em] block italic">QUALITÀ E ACCOGLIENZA</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.85] uppercase italic">
            I NOSTRI <br /> <span className="text-primary">SERVIZI</span>
          </h2>
        </div>

        <div 
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center"
        >
          <div className="space-y-4">
            {menuItems.map((item, index) => (
              <article
                key={index}
                onMouseEnter={() => handleItemHover(index)}
                className="group cursor-pointer"
                role="button"
                tabIndex={0}
              >
                <div className={cn(
                  "flex items-start gap-8 p-10 transition-all duration-700 rounded-[2rem] border-2",
                  activeIndex === index 
                    ? "bg-white/5 border-primary shadow-[0_0_50px_rgba(204,0,0,0.15)] scale-[1.02]" 
                    : "bg-transparent border-transparent hover:bg-white/5"
                )}>
                  <span className={cn(
                    "text-3xl lg:text-5xl font-black transition-colors duration-500 italic",
                    activeIndex === index ? "text-primary" : "text-white/10"
                  )}>
                    {item.num}
                  </span>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className={cn(
                        "text-2xl lg:text-4xl font-black transition-colors duration-500 uppercase italic tracking-tighter",
                        activeIndex === index ? "text-white" : "text-white/40 group-hover:text-white"
                      )}>
                        {item.name}
                      </h3>
                      {activeIndex === index && (
                        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                          <ArrowRight className="text-primary w-8 h-8" />
                        </motion.div>
                      )}
                    </div>
                    <p className={cn(
                      "text-lg lg:text-xl leading-relaxed transition-all duration-700 font-medium",
                      activeIndex === index ? "text-white/60" : "text-white/0 opacity-0 max-h-0 overflow-hidden"
                    )}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center lg:sticky lg:top-40 h-fit">
            <div className="relative w-full max-w-xl aspect-square">
              <div className="absolute inset-0 z-20 rounded-[4rem] overflow-hidden border border-white/10 fire-glow-card">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeIndex}
                    initial={{ scale: 1.2, opacity: 0, rotate: 5 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    exit={{ scale: 0.8, opacity: 0, rotate: -5 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    src={menuItems[activeIndex].image} 
                    alt={menuItems[activeIndex].name}
                    className="w-full h-full object-cover grayscale brightness-50"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              </div>
              
              {/* Floating Shapes Background */}
              <div className="absolute -z-10 -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
              <div className="absolute -z-10 -bottom-20 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />
            </div>
          </div>
        </div>

        <div className="text-center mt-32">
          <Button 
            asChild 
            className="h-20 px-16 bg-white text-black hover:bg-white/90 font-black uppercase tracking-tighter text-lg rounded-full active:scale-95 transition-all shadow-[0_20px_60px_rgba(255,255,255,0.1)]"
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
