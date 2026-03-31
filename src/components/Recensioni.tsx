import { Star, Quote, Award, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

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
  return (
    <section id="recensioni" className="section-spacing bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-32">
          <AnimatedSection>
            <span className="text-ember text-xs uppercase tracking-[0.5em] font-bold mb-6 block">Voci d'Eccellenza</span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-foreground uppercase leading-tight">
              I NOSTRI <br /> <span className="text-ember italic">OSPITI DICONO</span>
            </h2>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
          {reviews.map((review, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="h-full">
              <motion.div
                whileHover={{ y: -4 }}
                className="relative bg-white border border-ember/10 p-8 md:p-10 rounded-xl h-full flex flex-col hover:border-ember/30 transition-all duration-300 shadow-xl overflow-hidden group"
              >
                <Quote className="absolute -top-6 -right-6 w-32 h-32 text-ember/5 rotate-12 group-hover:text-ember/10 transition-colors" />
                
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <div className="flex gap-1 text-gold">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Award className="w-6 h-6 text-ember/50" />
                </div>
                
                <p className="text-foreground/80 text-lg font-accent italic leading-relaxed mb-8 md:mb-10 flex-1 relative z-10">
                  "{review.text}"
                </p>
                
                <div className="pt-8 border-t border-black/5 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-ember/10 border border-ember/20 flex items-center justify-center text-ember font-black">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-foreground font-display font-bold text-sm tracking-widest uppercase">
                        {review.author}
                      </div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-foreground/60">
                        {review.role}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="mt-16 md:mt-24 text-center">
          <div className="inline-flex items-center gap-4 px-6 md:px-8 py-3 md:py-4 bg-ember/5 backdrop-blur-md border border-ember/10 rounded-full">
            <Sparkles className="w-4 h-4 text-gold" />
            <p className="text-foreground/60 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">
              Oltre <span className="text-ember">1.000 recensioni</span> a 5 stelle
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Recensioni;