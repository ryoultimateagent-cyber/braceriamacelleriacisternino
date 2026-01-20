import { Wine } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";

const Vini = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section id="vini" ref={ref} className="py-16 sm:py-24 bg-charcoal relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-12 sm:mb-20">
          <span className="font-accent text-fire italic tracking-[4px] uppercase text-xs sm:text-sm">
            Selezione Curata
          </span>
          <h2 className="font-elegant text-3xl sm:text-5xl lg:text-6xl font-bold text-cream mt-4 relative inline-block section-divider">
            Carta Vini
          </h2>
        </AnimatedSection>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto">
          <AnimatedSection delay={0.2}>
            <h3 className="font-elegant text-2xl sm:text-3xl font-semibold text-fire mb-4 sm:mb-6">
              Vini d'Eccellenza
            </h3>
            <p className="text-gold-light leading-relaxed text-base sm:text-lg mb-4 sm:mb-6">
              Una selezione curata di vini pugliesi e nazionali, scelti per esaltare 
              i sapori intensi della brace. Primitivo, Negroamaro, Nero di Troia e 
              grandi etichette italiane che raccontano il territorio e la tradizione.
            </p>
            <p className="text-gold-light leading-relaxed text-base sm:text-lg mb-6 sm:mb-8">
              Ogni bottiglia racconta una storia, ogni sorso è un'emozione unica. 
              Il nostro personale esperto saprà consigliarti l'abbinamento perfetto 
              per rendere indimenticabile la tua esperienza gastronomica.
            </p>
            <a
              href="https://drive.google.com/file/d/1CYEh6u9jwJT04kDssM7RbBK_p04M-QZj/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-fire to-fire-dark text-cream font-bold uppercase tracking-wider text-xs sm:text-sm shadow-[0_10px_30px_rgba(139,21,56,0.3)] hover:translate-y-[-3px] hover:shadow-[0_15px_40px_rgba(139,21,56,0.5)] transition-all duration-400"
            >
              <Wine className="w-4 h-4 sm:w-5 sm:h-5" />
              Scarica Carta Vini
            </a>
          </AnimatedSection>

          {/* Wine Visual with parallax */}
          <AnimatedSection delay={0.4}>
            <motion.div 
              style={{ y: imageY }}
              className="h-[300px] sm:h-[400px] lg:h-[500px] bg-charcoal/50 border border-fire/30 flex items-center justify-center text-7xl sm:text-9xl hover:border-fire hover:shadow-[0_20px_50px_rgba(139,21,56,0.4)] transition-all duration-400"
            >
              🍷
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Vini;
