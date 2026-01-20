import { Phone, Zap, Users, Star } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const Prenota = () => {
  return (
    <section id="prenota" className="py-16 sm:py-24 bg-gradient-to-br from-charcoal to-noir border-t border-b border-fire/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,21,56,0.1)_0%,transparent_60%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-12 sm:mb-16">
          <span className="font-accent text-fire italic tracking-[4px] uppercase text-xs sm:text-sm">
            Riservazione
          </span>
          <h2 className="font-elegant text-3xl sm:text-5xl lg:text-6xl font-bold text-cream mt-4 relative inline-block section-divider">
            Prenota il Tuo Tavolo
          </h2>
        </AnimatedSection>

        {/* Content */}
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection delay={0.2}>
            <p className="font-accent text-lg sm:text-xl text-gold-light italic leading-relaxed mb-8 sm:mb-10 px-4">
              Chiamaci o passa a trovarci. Ti aspettiamo con un calice di vino pregiato 
              e il profumo inconfondibile della brace accesa che ti accoglierà.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="tel:+393403824158"
              className="inline-flex items-center gap-3 sm:gap-4 font-elegant text-2xl sm:text-4xl lg:text-5xl font-bold text-fire transition-all duration-300 mb-12 sm:mb-16"
            >
              <Phone className="w-6 h-6 sm:w-10 sm:h-10" />
              +39 340 38 24 158
            </motion.a>
          </AnimatedSection>

          {/* Benefits */}
          <AnimatedSection delay={0.6}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
              {[
                { icon: Zap, label: "Servizio Rapido" },
                { icon: Users, label: "Accoglienza Calorosa" },
                { icon: Star, label: "Qualità Premium" },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <item.icon className="w-10 h-10 sm:w-12 sm:h-12 text-gold" />
                  </div>
                  <div className="text-sm sm:text-lg text-gold-light uppercase tracking-wider">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Prenota;
