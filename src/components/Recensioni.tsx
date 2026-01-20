import { Star } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const reviews = [
  {
    text: "Carne eccezionale e brace autentica. Un'esperienza che vale davvero la pena. Il personale è cordiale e la qualità dei prodotti è fuori dal comune. Torneremo sicuramente!",
    author: "Marco R.",
  },
  {
    text: "La migliore fiorentina mai mangiata! Cottura perfetta, ambiente accogliente e personale gentilissimo. Una vera scoperta nel panorama gastronomico pugliese. Consigliatissimo!",
    author: "Giulia M.",
  },
  {
    text: "Tradizione e qualità. Ogni volta è un piacere tornare. I panini take-away sono fenomenali, rapporto qualità prezzo imbattibile. Un punto di riferimento assoluto.",
    author: "Antonio D.",
  },
];

const Recensioni = () => {
  return (
    <section className="py-16 sm:py-24 bg-noir relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-12 sm:mb-20">
          <span className="font-accent text-fire italic tracking-[4px] uppercase text-xs sm:text-sm">
            Testimonianze
          </span>
          <h2 className="font-elegant text-3xl sm:text-5xl lg:text-6xl font-bold text-cream mt-4 relative inline-block section-divider">
            Dicono di Noi
          </h2>
          <p className="font-accent text-base sm:text-lg text-gold-light italic mt-8 sm:mt-10 max-w-2xl mx-auto px-4">
            Le parole dei nostri clienti sono il nostro più grande orgoglio
          </p>
        </AnimatedSection>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {reviews.map((review, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 15px 40px rgba(139,21,56,0.3)" }}
                className="bg-charcoal/50 border border-gold/20 p-6 sm:p-8 hover:border-fire transition-all duration-400 h-full"
              >
                {/* Stars */}
                <div className="flex gap-1 text-fire mb-4 sm:mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  ))}
                </div>
                <p className="font-accent text-base sm:text-lg text-gold-light italic leading-relaxed mb-4 sm:mb-6">
                  "{review.text}"
                </p>
                <div className="font-semibold text-cream uppercase tracking-wide text-xs sm:text-sm">
                  — {review.author}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recensioni;
