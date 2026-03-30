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
    name: "Antipasti Artigianali",
    desc: "Salumi selezionati, formaggi DOP pugliesi, bruschette croccanti e il miglior capocollo di Martina Franca.",
    clipId: "clip-original",
    image: menuAntipasti
  },
  {
    num: "02",
    name: "Primi Fatti in Casa",
    desc: "Orecchiette tirate a mano ogni giorno, ragù di carne cotto lentamente, risotti cremosi stagionali.",
    clipId: "clip-hexagons",
    image: menuPrimi
  },
  {
    num: "03",
    name: "Carni alla Brace",
    desc: "Fiorentina, costata, tagliata, tartare, costine BBQ. Ogni taglio è una promessa di qualità assoluta.",
    clipId: "clip-pixels",
    image: menuCarni
  },
  {
    num: "04",
    name: "Specialità Pugliesi",
    desc: "Bombette tradizionali, salsiccia artigianale, spiedini misti cotti sulla brace viva.",
    clipId: "clip-original",
    image: menuSpecialita
  },
  {
    num: "05",
    name: "Contorni Premium",
    desc: "Verdure grigliate, patate croccanti al forno, insalate fresche di stagione, cicorie e fave.",
    clipId: "clip-hexagons",
    image: menuContorni
  },
  {
    num: "06",
    name: "Dolci della Casa",
    desc: "Dolci tipici pugliesi fatti in casa, tiramisù cremoso artigianale, sorbetti al limone.",
    clipId: "clip-pixels",
    image: menuDolci
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
      className="section-spacing bg-gradient-premium relative overflow-hidden"
      aria-label="Il nostro menù"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <SectionHeader 
          subtitle="Esperienza Gastronomica"
          title="Il Nostre Menù"
          className="mb-16 md:mb-20"
        />

        {/* Interactive Menu Container */}
        <div 
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 max-w-7xl mx-auto items-center"
        >
          {/* Menu List */}
          <AnimatedSection delay={0.2} className="order-2 lg:order-1">
            <div className="space-y-4">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  onMouseEnter={() => handleItemHover(index)}
                  className="group"
                >
                  <div className={cn(
                    "flex items-start gap-4 md:gap-6 p-4 md:p-6 lg:p-8 transition-all duration-300 rounded-xl border",
                    activeIndex === index 
                      ? "bg-charcoal/60 border-gold/20 shadow-xl" 
                      : "bg-transparent border-transparent hover:bg-white/5"
                  )}>
                    {/* Number */}
                    <span className={cn(
                      "text-xl lg:text-3xl font-display font-bold transition-colors duration-300",
                      activeIndex === index ? "text-fire" : "text-white/60 group-hover:text-gold/60"
                    )}>
                      {item.num}
                    </span>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2 md:mb-3">
                        <h3 className={cn(
                          "text-base lg:text-2xl font-display font-bold transition-colors duration-300",
                          activeIndex === index ? "text-cream" : "text-gold-light/60 group-hover:text-cream"
                        )}>
                          {item.name}
                        </h3>
                        {activeIndex === index && (
                          <div aria-hidden="true">
                            <ArrowRight className="text-fire w-5 h-5 md:w-6 md:h-6" />
                          </div>
                        )}
                      </div>
                      <p className={cn(
                        "text-xs md:text-sm lg:text-lg leading-relaxed transition-all duration-300 tracking-wide font-accent italic",
                        activeIndex === index 
                          ? "text-gold-light opacity-90" 
                          : "text-white/60 opacity-0 lg:opacity-30 max-h-0 lg:max-h-20 overflow-hidden"
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
          <AnimatedSection delay={0.4} className="order-1 lg:order-2 flex justify-center sticky top-32 h-fit">
            <div className="relative w-full max-w-lg aspect-square">
              {/* Mobile Fallback */}
              <div className="lg:hidden absolute inset-0 z-20 rounded-xl overflow-hidden border border-gold/20 shadow-2xl">
                <img 
                  src={menuItems[activeIndex].image} 
                  alt={menuItems[activeIndex].name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/80 to-transparent flex items-end p-6">
                  <h4 className="text-lg md:text-xl font-display font-bold text-gold uppercase">{menuItems[activeIndex].name}</h4>
                </div>
              </div>

              {/* Desktop Animated SVG */}
              <div className="hidden lg:block">
                <div className="absolute -top-10 -right-10 w-40 h-40 border border-gold/10 rounded-full animate-pulse-glow" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 border border-fire/10 rounded-full animate-pulse-glow" />
                
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full relative z-10 filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                >
                  <defs>
                    <clipPath id="clip-original">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <rect
                          key={i}
                          className="path"
                          x={(i % 3) * 135 + 5}
                          y={Math.floor(i / 3) * 135 + 5}
                          width="125"
                          height="125"
                          rx="12"
                        />
                      ))}
                    </clipPath>

                    <clipPath id="clip-hexagons">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <circle
                          key={i}
                          className="path"
                          cx={50 + (i % 4) * 100}
                          cy={50 + Math.floor(i / 4) * 100 + ((i % 4) % 2 === 0 ? 0 : 50)}
                          r="48"
                        />
                      ))}
                    </clipPath>

                    <clipPath id="clip-pixels">
                      {Array.from({ length: 25 }).map((_, i) => (
                        <rect
                          key={i}
                          className="path"
                          x={(i % 5) * 80 + 5}
                          y={Math.floor(i / 5) * 80 + 5}
                          width="70"
                          height="70"
                          rx="6"
                        />
                      ))}
                    </clipPath>
                    
                    <linearGradient id="menu-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--red))" />
                      <stop offset="100%" stopColor="hsl(var(--gold))" />
                    </linearGradient>
                  </defs>

                  <g ref={mainGroupRef} clipPath="url(#clip-original)">
                    <image
                      ref={imageRef}
                      href={menuItems[0].image}
                      width="400"
                      height="400"
                      preserveAspectRatio="xMidYMid slice"
                    />
                    <rect width="400" height="400" fill="url(#menu-gradient)" opacity="0.15" />
                  </g>
                </svg>

                <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-gold/30" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-gold/30" />
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Action Button */}
        <AnimatedSection delay={0.6} className="text-center mt-12 md:mt-20">
          <Button 
            asChild 
            variant="gold" 
            size="lg" 
            className="h-12 md:h-14 px-8 md:px-12 text-xs md:text-sm uppercase tracking-widest font-bold shadow-2xl rounded-lg"
          >
            <a
              href="https://drive.google.com/file/d/1_LBXD8l_BNEpK1vPxeo7qVWKxIr9ePlB/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 md:gap-4"
            >
              <FileText className="w-4 h-4 md:w-5 md:h-5" />
              Scarica Menù Digitale
            </a>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Menu;