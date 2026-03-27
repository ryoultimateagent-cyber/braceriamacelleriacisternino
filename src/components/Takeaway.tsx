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
  return (
    <AnimatedSection delay={i * 0.1} animation="fade-up">
      <div className="group relative h-[450px] w-full overflow-hidden border border-gold/10 bg-[#111111]">
        {/* Background Subtle Gradient */}
        <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Visual Element (Icon/Emoji Placeholder) */}
        <div className="h-40 flex items-center justify-center relative overflow-hidden">
           <div className="absolute inset-0 bg-gold/5 z-0" />
           <span className="text-6xl relative z-10 filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110">{p.emoji}</span>
           <div className="absolute top-4 left-4 z-20">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold border border-gold/30 px-3 py-1 rounded-full">
                {p.tag}
              </span>
           </div>
        </div>

        <div className="p-10 flex flex-col h-full">
          <h3 className="text-2xl font-display font-black text-cream uppercase mb-4 tracking-tighter group-hover:text-gold transition-colors">
            {p.name}
          </h3>
          <p className="text-cream/50 text-sm leading-relaxed mb-10 font-accent italic">
            "{p.desc}"
          </p>
          
          <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
            <span className="text-3xl font-display font-black text-gold leading-none">{p.price}</span>
            <div className="w-12 h-12 flex items-center justify-center border border-gold/10 group-hover:border-gold/40 transition-colors">
              <ShoppingBag className="w-5 h-5 text-gold-light group-hover:text-gold transition-colors" />
            </div>
          </div>
        </div>
        
        {/* Decorative Lines */}
        <div className="absolute top-4 left-4 right-4 bottom-4 border border-white/5 pointer-events-none group-hover:border-gold/20 transition-colors duration-500" />
      </div>
    </AnimatedSection>
  );
};

const Takeaway = () => {
  return (
    <section id="takeaway" className="py-32 lg:py-56 bg-noir relative overflow-hidden">
      {/* Background Cinematic Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-32 lg:mb-48">
          <AnimatedSection>
            <span className="text-gold text-xs uppercase tracking-[0.6em] font-bold mb-8 block">Street Food Gourmet</span>
            <h2 className="text-5xl md:text-8xl font-display font-black text-cream uppercase leading-[0.9] tracking-tighter">
              I NOSTRI <br /> <span className="text-gold italic font-light">PANINI</span>
            </h2>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
          {panini.map((p, i) => (
            <TakeawayCard key={i} p={p} i={i} />
          ))}
        </div>

        <AnimatedSection delay={0.4} className="mt-32 text-center">
          <Button 
            asChild 
            size="lg"
            className="h-16 px-12 bg-gold hover:bg-gold-dark text-noir uppercase tracking-[0.3em] font-black rounded-none transition-all duration-500"
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