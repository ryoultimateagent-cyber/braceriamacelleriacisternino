import { cn } from "@/lib/utils";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { FileText } from "lucide-react";
import gsap from "gsap";
import AnimatedSection from "./AnimatedSection";

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

    // 1. IN (Expo Out)
    tl.to(selector, {
      scale: 1,
      duration: 0.8,
      stagger: { amount: 0.4, from: "random" },
      ease: "expo.out",
    })
    // 2. IDLE (Sine Breath)
    .to(selector, {
      scale: 1.05,
      duration: 1.5,
      yoyo: true,
      repeat: 1,
      ease: "sine.inOut",
      stagger: { amount: 0.2, from: "center" }
    })
    // 3. OUT (Expo In)
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
    <section id="menu" className="py-16 sm:py-24 bg-noir relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-12 sm:mb-16">
          <span className="font-accent text-fire italic tracking-[4px] uppercase text-xs sm:text-sm">
            Le Nostre Proposte
          </span>
          <h2 className="font-elegant text-3xl sm:text-5xl lg:text-6xl font-bold text-cream mt-4 relative inline-block section-divider">
            Il Nostro Menù
          </h2>
          <p className="font-accent text-base sm:text-lg text-gold-light italic mt-8 sm:mt-10 max-w-2xl mx-auto px-4">
            Un viaggio nei sapori autentici della Puglia, dalla tradizione all'innovazione
          </p>
        </AnimatedSection>

        {/* Interactive Menu */}
        <div 
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-center"
        >
          {/* LEFT SIDE: MENU LIST */}
          <AnimatedSection delay={0.2} className="order-2 lg:order-1">
            <div className="space-y-2 sm:space-y-3">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  onMouseEnter={() => handleItemHover(index)}
                  onClick={() => handleItemHover(index)}
                  className="group cursor-pointer"
                >
                  <div className={cn(
                    "flex items-start gap-4 sm:gap-6 p-4 sm:p-5 transition-all duration-500 border-l-4",
                    activeIndex === index 
                      ? "bg-charcoal/60 border-fire" 
                      : "bg-charcoal/20 border-gold/30 hover:bg-charcoal/40 hover:border-gold"
                  )}>
                    {/* Number */}
                    <span className={cn(
                      "font-accent text-2xl sm:text-3xl font-bold transition-colors duration-300",
                      activeIndex === index ? "text-fire" : "text-gold/50 group-hover:text-gold"
                    )}>
                      {item.num}
                    </span>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className={cn(
                        "font-elegant text-xl sm:text-2xl font-semibold transition-colors duration-300 mb-2",
                        activeIndex === index ? "text-cream" : "text-gold-light group-hover:text-cream"
                      )}>
                        {item.name}
                      </h3>
                      <p className={cn(
                        "text-sm leading-relaxed transition-all duration-500",
                        activeIndex === index 
                          ? "text-gold-light opacity-100 max-h-20" 
                          : "text-gold/60 opacity-70 max-h-0 overflow-hidden lg:max-h-20 lg:opacity-70"
                      )}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* RIGHT SIDE: ANIMATED IMAGE */}
          <AnimatedSection delay={0.4} className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Decorative border */}
              <div className="absolute inset-0 border-2 border-gold/30 transform rotate-3" />
              <div className="absolute inset-0 border-2 border-fire/30 transform -rotate-3" />
              
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full relative z-10"
                style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))" }}
              >
                <defs>
                  {/* Original - Large Rectangles */}
                  <clipPath id="clip-original">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <rect
                        key={i}
                        className="path"
                        x={(i % 3) * 135 + 5}
                        y={Math.floor(i / 3) * 135 + 5}
                        width="125"
                        height="125"
                        rx="8"
                      />
                    ))}
                  </clipPath>

                  {/* Hexagons Pattern */}
                  <clipPath id="clip-hexagons">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <circle
                        key={i}
                        className="path"
                        cx={50 + (i % 4) * 100}
                        cy={50 + Math.floor(i / 4) * 100 + ((i % 4) % 2 === 0 ? 0 : 50)}
                        r="45"
                      />
                    ))}
                  </clipPath>

                  {/* Pixels - Small Squares */}
                  <clipPath id="clip-pixels">
                    {Array.from({ length: 25 }).map((_, i) => (
                      <rect
                        key={i}
                        className="path"
                        x={(i % 5) * 80 + 5}
                        y={Math.floor(i / 5) * 80 + 5}
                        width="70"
                        height="70"
                        rx="4"
                      />
                    ))}
                  </clipPath>
                </defs>

                <g ref={mainGroupRef} clipPath="url(#clip-original)">
                  <image
                    ref={imageRef}
                    href={menuItems[0].image}
                    width="400"
                    height="400"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </g>

                {/* Overlay gradient */}
                <rect 
                  width="400" 
                  height="400" 
                  fill="url(#menu-gradient)" 
                  opacity="0.3"
                  style={{ pointerEvents: 'none' }}
                />
                <defs>
                  <linearGradient id="menu-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--fire))" />
                    <stop offset="100%" stopColor="hsl(var(--gold))" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold" />
            </div>
          </AnimatedSection>
        </div>

        {/* Download Button */}
        <AnimatedSection delay={0.6} className="text-center mt-12 sm:mt-16">
          <a
            href="https://drive.google.com/file/d/1_LBXD8l_BNEpK1vPxeo7qVWKxIr9ePlB/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-fire to-fire-dark text-cream font-bold uppercase tracking-wider text-xs sm:text-sm shadow-[0_10px_30px_rgba(139,21,56,0.3)] hover:translate-y-[-3px] hover:shadow-[0_15px_40px_rgba(139,21,56,0.5)] transition-all duration-400"
          >
            <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
            Scarica Menù Completo
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Menu;
