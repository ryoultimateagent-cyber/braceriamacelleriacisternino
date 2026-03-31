import { Star, Quote, Award, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";
import { Skeleton } from "./ui/skeleton";

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="recensioni" className="section-container py-24 md:py-32 bg-transparent relative overflow-hidden">
      <div className="relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <AnimatedSection>
            <span className="text-primary text-xs font-bold uppercase tracking-[0.4em] mb-4 block">VOCI D'ECCELLENZA</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-none uppercase">
              I NOSTRI <br /> <span className="text-primary italic">OSPITI DICONO</span>
            </h2>
            <div className="h-1.5 w-24 bg-primary mx-auto mt-8 rounded-full shadow-[0_0_15px_rgba(255,61,0,0.5)]" />
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {loading ? (
            [...Array(3)].map((_, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-white/5 h-[400px] space-y-4 border border-white/5">
                <div className="flex gap-1.5 mb-10">
                  {[...Array(5)].map((_, j) => (
                    <Skeleton key={j} className="w-5 h-5 rounded-full bg-white/10" />
                  ))}
                </div>
                <Skeleton className="h-4 w-full bg-white/10" />
                <Skeleton className="h-4 w-full bg-white/10" />
                <Skeleton className="h-4 w-3/4 bg-white/10" />
                <div className="pt-8 mt-12 border-t border-white/10 flex items-center gap-4">
                  <Skeleton className="h-14 w-14 rounded-2xl bg-white/10" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-24 bg-white/10" />
                    <Skeleton className="h-3 w-16 bg-white/10" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            reviews.map((review, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="h-full">
                <motion.article
                  whileHover={{ y: -8 }}
                  className="relative bg-white/5 p-10 rounded-[2.5rem] h-full flex flex-col border border-white/5 hover:border-primary/20 hover:bg-white/10 transition-all duration-500 group"
                >
                  <Quote className="absolute -top-4 -right-4 w-24 h-24 text-primary/5 rotate-12 group-hover:text-primary/10 transition-colors duration-500" />
                  
                  <div className="flex items-center justify-between mb-10 relative z-10">
                    <div className="flex gap-1.5 text-accent">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed mb-10 flex-1 relative z-10 italic">
                    "{review.text}"
                  </p>
                  
                  <div className="pt-8 border-t border-white/10 relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary font-black text-xl border border-white/10">
                        {review.author.charAt(0)}
                      </div>
                      <div>
                        <div className="text-white font-black text-sm tracking-tight uppercase">
                          {review.author}
                        </div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                          {review.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </AnimatedSection>
            ))
          )}
        </div>

        <AnimatedSection delay={0.4} className="mt-16 md:mt-24 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-2xl">
            <Sparkles className="w-5 h-5 text-accent" />
            <p className="text-white/40 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
              OLTRE <span className="text-primary">1.000 RECENSIONI</span> A 5 STELLE
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Recensioni;