import { Star, Quote, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import SectionHeader from "./SectionHeader";

const reviews = [
  {
    text: "Carne eccezionale e brace autentica. Un'esperienza che vale davvero la pena. Il personale è cordiale e la qualità dei prodotti è fuori dal comune.",
    author: "Marco R.",
    role: "Local Guide",
  },
  {
    text: "La migliore fiorentina mai mangiata! Cottura perfetta, ambiente accogliente e personale gentilissimo. Una vera scoperta nel panorama pugliese.",
    author: "Giulia M.",
    role: "Food Blogger",
  },
  {
    text: "Tradizione e qualità. Ogni volta è un piacere tornare. I panini take-away sono fenomenali, rapporto qualità prezzo imbattibile. Un punto di riferimento.",
    author: "Antonio D.",
    role: "Cliente Storico",
  },
];

const Recensioni = () => {
  const [index, setIndex] = useState(1);
  const isMobile = useIsMobile();

  const next = useCallback(() => {
    if (reviews.length === 0) return;
    setIndex((prev) => (prev + 1) % reviews.length);
  }, []);

  const prev = useCallback(() => {
    if (reviews.length === 0) return;
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="recensioni" className="py-4 md:py-8 bg-transparent relative overflow-hidden" role="region" aria-label="Carosello recensioni">
      <div className="section-container mb-12 text-center">
        <SectionHeader 
          subtitle="VOCI D'ECCELLENZA"
          title="I NOSTRI OSPITI"
          align="center"
          className="mb-0"
        />
      </div>

      <div className="relative h-[450px] flex items-center justify-center overflow-hidden" aria-live="polite">
        <div className="relative w-full max-w-6xl px-4 flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            {reviews.map((review, i) => {
              const isCenter = i === index;
              const isLeft = i === (index - 1 + reviews.length) % reviews.length;
              const isRight = i === (index + 1) % reviews.length;

              if (!isCenter && !isLeft && !isRight) return null;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9, x: isLeft ? -50 : isRight ? 50 : 0 }}
                  animate={{ 
                    opacity: isCenter ? 1 : 0.4, 
                    scale: isCenter ? 1 : 0.9, 
                    x: isLeft ? (isMobile ? "-85%" : "-100%") : isRight ? (isMobile ? "85%" : "100%") : 0,
                    zIndex: isCenter ? 20 : 10
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`absolute w-full max-w-2xl bg-white/5 backdrop-blur-xl p-10 lg:p-14 rounded-[3rem] border border-white/10 shadow-xl flex flex-col items-center text-center fire-glow-card focus-visible:ring-2 focus-visible:ring-primary ${isCenter ? 'z-20' : 'z-10 cursor-pointer'}`}
                  tabIndex={isCenter ? 0 : -1}
                  onClick={() => !isCenter && setIndex(i)}
                >
                  <Quote className="w-12 h-12 text-primary/10 mb-6" />
                  <div className="flex gap-1 text-primary/40 mb-8">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg md:text-xl lg:text-2xl font-normal italic text-white/90 leading-relaxed mb-10">
                    "{review.text}"
                  </p>
                  <div className="pt-8 border-t border-white/5 w-full">
                    <h4 className="text-[13px] font-semibold italic uppercase text-white tracking-[0.10em]">{review.author}</h4>
                    <span className="text-[11px] font-normal tracking-[0.08em] uppercase text-white/65">{review.role}</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-8">
         <button 
           onClick={prev} 
           className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-primary transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary"
           aria-label="Recensione precedente"
         >
           <ChevronLeft className="w-5 h-5" />
         </button>
         <button 
           onClick={next} 
           className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-primary transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary"
           aria-label="Recensione successiva"
         >
           <ChevronRight className="w-5 h-5" />
         </button>
      </div>

      <div className="text-center mt-12">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full border border-white/5">
          <Sparkles className="w-4 h-4 text-primary" />
          <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-white/60">
             OLTRE <span className="text-primary">1.000 RECENSIONI</span> A 5 STELLE
          </p>
        </div>
      </div>
    </section>
  );
};

export default Recensioni;