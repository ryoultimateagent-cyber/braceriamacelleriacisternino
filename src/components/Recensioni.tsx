import { Star, Quote, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

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

  const next = () => setIndex((prev) => (prev + 1) % reviews.length);
  const prev = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="recensioni" className="py-16 md:py-24 lg:py-28 bg-black relative overflow-hidden">
      <div className="section-container mb-16 text-center">
        <span className="text-primary text-xs font-black uppercase tracking-[0.4em] block italic mb-4">VOCI D'ECCELLENZA</span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[0.9] uppercase italic">
          I NOSTRI <br /> <span className="text-primary">OSPITI</span>
        </h2>
      </div>

      <div className="relative h-[450px] flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-7xl px-8 flex items-center justify-center">
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
                    x: isLeft ? (window.innerWidth < 1024 ? "-90%" : "-105%") : isRight ? (window.innerWidth < 1024 ? "90%" : "105%") : 0,
                    zIndex: isCenter ? 20 : 10
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`absolute w-full max-w-2xl bg-white/5 backdrop-blur-xl p-8 lg:p-16 rounded-[4rem] border border-white/10 shadow-2xl flex flex-col items-center text-center ${isCenter ? 'z-20' : 'z-10 cursor-pointer'}`}
                  onClick={() => !isCenter && setIndex(i)}
                >
                  <Quote className="w-20 h-20 text-primary/10 mb-8" />
                  <div className="flex gap-1.5 text-accent mb-10">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-6 h-6 fill-current" />
                    ))}
                  </div>
                  <p className="text-2xl lg:text-3xl font-black italic text-white leading-tight mb-12">
                    "{review.text}"
                  </p>
                  <div className="pt-10 border-t border-white/10 w-full">
                    <h4 className="text-xl font-black italic uppercase text-white">{review.author}</h4>
                    <span className="text-[10px] font-black tracking-widest uppercase text-primary">{review.role}</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <div className="flex justify-center gap-6 mt-12">
         <button onClick={prev} className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300">
           <ChevronLeft className="w-8 h-8" />
         </button>
         <button onClick={next} className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300">
           <ChevronRight className="w-8 h-8" />
         </button>
      </div>

      <div className="text-center mt-24">
        <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
          <Sparkles className="w-5 h-5 text-accent" />
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
             OLTRE <span className="text-primary">1.000 RECENSIONI</span> A 5 STELLE
          </p>
        </div>
      </div>
    </section>
  );
};

export default Recensioni;
