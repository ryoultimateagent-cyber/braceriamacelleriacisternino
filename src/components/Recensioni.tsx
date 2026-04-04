import { Star, Quote, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
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
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % reviews.length);
  const prev = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="recensioni" className="py-20 md:py-28 bg-[#f7f4ed] relative overflow-hidden">
      <div className="section-container mb-12 text-center">
        <SectionHeader 
          subtitle="VOCI D'ECCELLENZA"
          title="Dicono di Noi"
          align="center"
          className="mb-0"
        />
      </div>

      <div className="relative h-[450px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-5xl px-6 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-2xl bg-[#f7f4ed] p-10 md:p-12 rounded-[16px] border border-[#eceae4] shadow-sm flex flex-col items-center text-center"
            >
              <Quote className="w-10 h-10 text-[#1c1c1c]/5 mb-8" />
              <div className="flex gap-1 text-[#1c1c1c] mb-8">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xl md:text-2xl font-normal text-[#1c1c1c] leading-snug mb-10 tracking-[-0.01em]">
                "{reviews[index].text}"
              </p>
              <div className="pt-8 border-t border-[#eceae4] w-full max-w-[200px]">
                <h4 className="text-lg font-semibold text-[#1c1c1c] mb-1">{reviews[index].author}</h4>
                <span className="text-[10px] font-medium tracking-widest uppercase text-[#5f5f5d]">{reviews[index].role}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-8">
         <button 
           onClick={prev} 
           className="w-12 h-12 rounded-full border border-[#eceae4] flex items-center justify-center text-[#1c1c1c]/40 hover:text-[#1c1c1c] hover:bg-[#1c1c1c]/5 transition-all duration-300"
           aria-label="Recensione precedente"
         >
           <ChevronLeft className="w-5 h-5" />
         </button>
         <button 
           onClick={next} 
           className="w-12 h-12 rounded-full border border-[#eceae4] flex items-center justify-center text-[#1c1c1c]/40 hover:text-[#1c1c1c] hover:bg-[#1c1c1c]/5 transition-all duration-300"
           aria-label="Recensione successiva"
         >
           <ChevronRight className="w-5 h-5" />
         </button>
      </div>

      <div className="text-center mt-12">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#1c1c1c]/[0.02] rounded-full border border-[#eceae4]">
          <Sparkles className="w-4 h-4 text-[#1c1c1c]" />
          <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-[#5f5f5d]">
             Oltre <span className="text-[#1c1c1c] font-semibold">1.000 recensioni</span> a 5 stelle
          </p>
        </div>
      </div>
    </section>
  );
};

export default Recensioni;