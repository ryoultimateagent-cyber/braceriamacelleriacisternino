import { Phone, Zap, ShoppingBag, Flame } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";

const panini = [
  { 
    name: "Belvedere Classic", 
    desc: "Carne scelta alla brace, rucola selvatica, scaglie di Grana e pomodoro cuore di bue.", 
    price: "€5",
    tag: "Il Bestseller",
    emoji: "🍔"
  },
  { 
    name: "Black Burger", 
    desc: "Hamburger di scottona (200g), bacon affumicato, cheddar fuso e cipolla caramellata.", 
    price: "€7",
    tag: "Gourmet",
    emoji: "🔥"
  },
  { 
    name: "Zampina Fire", 
    desc: "Zampina molese DOC alla brace, salsa piccante artigianale e misticanza.", 
    price: "€5",
    tag: "Locale",
    emoji: "🌭"
  },
];

const TakeawayCard = ({ p, i }: { p: typeof panini[0], i: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 30 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = event.clientX - rect.left;
    const mouseYPos = event.clientY - rect.top;
    const xPct = (mouseXPos / width - 0.5) * 20;
    const yPct = (mouseYPos / height - 0.5) * 20;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <AnimatedSection delay={i * 0.1}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: useTransform(mouseY, (v) => -v),
          rotateY: useTransform(mouseX, (v) => v),
          transformStyle: "preserve-3d",
        }}
        className="group relative bg-[#111111] border border-gold/10 p-10 lg:p-12 text-center hover:border-gold/40 transition-all duration-300 rounded-[2rem] h-full flex flex-col shadow-2xl overflow-hidden perspective-1000"
      >
        <div 
          style={{ transform: "translateZ(50px)" }}
          className="absolute top-6 right-6"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold bg-gold/5 px-3 py-1 rounded-full border border-gold/20">
            {p.tag}
          </span>
        </div>

        <div 
          style={{ transform: "translateZ(80px)" }}
          className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-500 filter drop-shadow-[0_10px_20px_rgba(212,175,55,0.3)]"
        >
          {p.emoji}
        </div>

        <h3 
          style={{ transform: "translateZ(60px)" }}
          className="text-2xl lg:text-3xl font-display font-black text-cream uppercase mb-4 group-hover:text-gold transition-colors"
        >
          {p.name}
        </h3>
        
        <p 
          style={{ transform: "translateZ(40px)" }}
          className="text-gold-light/60 text-sm lg:text-base mb-8 leading-relaxed font-body"
        >
          {p.desc}
        </p>
        
        <div 
          style={{ transform: "translateZ(70px)" }}
          className="mt-auto flex items-center justify-between"
        >
          <span className="text-3xl font-display font-black text-gold">{p.price}</span>
          <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all">
            <ShoppingBag className="w-5 h-5 text-gold-light" />
          </div>
        </div>
      </motion.div>
    </AnimatedSection>
  );
};

const Takeaway = () => {
  return (
    <section id="takeaway" className="py-32 lg:py-48 bg-gradient-ember relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 lg:mb-32">
          <AnimatedSection>
            <span className="text-gold text-xs uppercase tracking-[0.5em] font-bold mb-6 block">Street Food Gourmet</span>
            <h2 className="text-4xl md:text-7xl font-display font-black text-cream uppercase">
              I NOSTRI <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-ember to-gold italic">PANINI D'AUTORE</span>
            </h2>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {panini.map((p, i) => (
            <TakeawayCard key={i} p={p} i={i} />
          ))}
        </div>

        <AnimatedSection delay={0.4} className="mt-24 text-center">
          <Button 
            asChild 
            className="h-16 px-12 bg-noir border border-gold/30 hover:border-gold text-gold uppercase tracking-[0.3em] font-black rounded-none transition-all duration-500"
          >
            <a href="tel:+393403824158" className="flex items-center gap-4">
              <Phone className="w-5 h-5" />
              Chiama per l'asporto
            </a>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Takeaway;