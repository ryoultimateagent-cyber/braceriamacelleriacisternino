import { Star, Quote, Award } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";

const reviews = [
  {
    text: "Carne eccezionale e brace autentica. Un'esperienza che vale davvero la pena. Il personale è cordiale e la qualità dei prodotti è fuori dal comune. Torneremo sicuramente!",
    author: "Marco R.",
    role: "Local Guide",
    date: "Settembre 2023"
  },
  {
    text: "La migliore fiorentina mai mangiata! Cottura perfetta, ambiente accogliente e personale gentilissimo. Una vera scoperta nel panorama gastronomico pugliese. Consigliatissimo!",
    author: "Giulia M.",
    role: "Food Blogger",
    date: "Agosto 2023"
  },
  {
    text: "Tradizione e qualità. Ogni volta è un piacere tornare. I panini take-away sono fenomenali, rapporto qualità prezzo imbattibile. Un punto di riferimento assoluto.",
    author: "Antonio D.",
    role: "Cliente Storico",
    date: "Giugno 2023"
  },
];

const Recensioni = () => {
  return (
    <section 
      className="py-24 lg:py-40 bg-noir relative overflow-hidden"
      aria-label="Recensioni dei clienti"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(139,21,56,0.1)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto px-6">
        {/* Header */}
        <SectionHeader 
          subtitle="Voci d'Eccellenza"
          title="I Nostri Ospiti"
          className="mb-20 lg:mb-32"
        />

        {/* Reviews Horizontal Scroll / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto items-stretch">
          {reviews.map((review, i) => (
            <AnimatedSection key={i} delay={i * 0.15} className="h-full">
              <motion.div
                whileHover={{ y: -15 }}
                className="relative bg-charcoal/40 backdrop-blur-md border border-white/5 p-10 lg:p-12 rounded-2xl h-full flex flex-col hover:border-fire/20 transition-all duration-500 shadow-2xl overflow-hidden group"
              >
                {/* Decorative Quote Icon */}
                <div className="absolute -top-6 -right-6 p-12 text-fire/5 group-hover:text-fire/10 transition-colors">
                  <Quote className="w-32 h-32 rotate-12" />
                </div>
                
                {/* Stars and Badge */}
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <div className="flex gap-1.5 text-gold">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <Award className="w-6 h-6 text-gold/30" />
                </div>
                
                {/* Review Text */}
                <p className="text-lg lg:text-xl text-gold-light/90 font-accent italic leading-relaxed mb-10 tracking-wide flex-1 relative z-10">
                  "{review.text}"
                </p>
                
                {/* Reviewer Meta */}
                <div className="pt-8 border-t border-white/5 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fire to-gold flex items-center justify-center text-white font-bold shadow-lg">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-cream font-display font-bold text-sm lg:text-base tracking-widest uppercase">
                        {review.author}
                      </div>
                      <div className="flex gap-3 text-[10px] font-bold uppercase tracking-widest text-gold-light/60 group-hover:text-gold-light/80 transition-colors">
                        <span>{review.role}</span>
                        <span className="w-1 h-1 bg-white/20 rounded-full my-auto" aria-hidden="true" />
                        <span>{review.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
        
        {/* Global social proof badge */}
        <AnimatedSection delay={0.6} className="mt-20 lg:mt-32 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 px-10 py-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-noir bg-charcoal overflow-hidden">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 20}`} alt="Immagine di profilo ospite" loading="lazy" />
                </div>
              ))}
            </div>
            <p className="text-gold-light/70 text-xs lg:text-sm font-bold uppercase tracking-widest">
              Oltre <span className="text-gold">1.000 recensioni certificate</span> su TripAdvisor & Google
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Recensioni;
