import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";

const tagli = [
  {
    name: "Fiorentina Premium",
    desc: "T-Bone da ~1kg, perfetta per 2 persone. Cottura al sangue per esaltare la morbidezza estrema e il sapore profondo della migliore carne selezionata.",
  },
  {
    name: "Costata di Scottona",
    desc: "400/500g di pura eccellenza. Marezzatura perfetta che si scioglie in bocca. Il nostro bestseller assoluto, amato da tutti gli intenditori di carne.",
  },
  {
    name: "Tartare Esplosiva",
    desc: "Carne cruda di primissima scelta, tagliata al momento. Classica o con il nostro twist piccante che fa la differenza.",
  },
  {
    name: "Tagliata Signature",
    desc: "Scottona ~300g su letto di rucola fresca. Il classico pugliese reinterpretato con maestria dalla nostra tradizione centenaria.",
  },
  {
    name: "Costine BBQ Slow",
    desc: "Cottura lenta sulla brace per ore. Morbidezza estrema, affumicatura naturale, glassa homemade. Un'esperienza unica.",
  },
  {
    name: "Bombette Tradizionali",
    desc: "Le autentiche bombette pugliesi servite al tavolo sulla brace. Tradizione pura che scalda il cuore e delizia il palato.",
  },
];

const Tagli = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const bgY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="brace" ref={ref} className="py-16 sm:py-24 bg-charcoal relative overflow-hidden">
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.08)_0%,transparent_60%)]" 
      />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-12 sm:mb-20">
          <span className="font-accent text-fire italic tracking-[4px] uppercase text-xs sm:text-sm">
            Selezioni Premium
          </span>
          <h2 className="font-elegant text-3xl sm:text-5xl lg:text-6xl font-bold text-cream mt-4 relative inline-block section-divider">
            I Nostri Tagli
          </h2>
          <p className="font-accent text-base sm:text-lg text-gold-light italic mt-8 sm:mt-10 max-w-2xl mx-auto px-4">
            Ogni taglio è selezionato con cura maniacale e cotto alla perfezione sulla brace
          </p>
        </AnimatedSection>

        {/* Grid - responsive columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {tagli.map((taglio, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -15, scale: 1.02 }}
                className="bg-charcoal/50 border border-gold/20 overflow-hidden hover:border-fire hover:shadow-[0_25px_60px_rgba(139,21,56,0.4)] transition-all duration-500 group"
              >
                {/* Image placeholder */}
                <div className="h-48 sm:h-64 bg-gradient-to-br from-fire/30 to-copper/30 flex items-center justify-center text-5xl sm:text-6xl relative overflow-hidden">
                  🥩
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-fire/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="font-elegant text-xl sm:text-2xl font-semibold text-gold group-hover:text-fire transition-colors mb-3 sm:mb-4">
                    {taglio.name}
                  </h3>
                  <p className="text-gold-light leading-relaxed text-sm sm:text-base">{taglio.desc}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tagli;
