import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";

const timelineData = [
  {
    year: "1920",
    title: "Le Origini",
    text: "Nasce a Mola di Bari la piccola macelleria di famiglia. L'arte della selezione della carne diventa il nostro DNA, tramandato di generazione in generazione con dedizione assoluta.",
  },
  {
    year: "1980",
    title: "La Rivoluzione",
    text: "Dalla macelleria alla braceria. Il fuoco vivo diventa il nostro maestro, la brace il nostro strumento per creare capolavori di sapore unici e indimenticabili.",
  },
  {
    year: "Oggi",
    title: "L'Eccellenza Continua",
    text: "La stessa passione brucia più forte che mai. Carne premium selezionata, taglio perfetto, brace autentica. La tradizione vive nell'innovazione.",
  },
];

const stats = [
  { number: "100+", label: "Anni di Storia" },
  { number: "4", label: "Generazioni" },
  { number: "10.000+", label: "Clienti Soddisfatti" },
  { number: "∞", label: "Passione" },
];

const Storia = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="storia" ref={ref} className="py-16 sm:py-24 bg-noir relative overflow-hidden">
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,21,56,0.1)_0%,transparent_60%)]" 
      />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-12 sm:mb-20">
          <span className="font-accent text-fire italic tracking-[4px] uppercase text-xs sm:text-sm">
            La Nostra Eredità
          </span>
          <h2 className="font-elegant text-3xl sm:text-5xl lg:text-6xl font-bold text-cream mt-4 relative inline-block section-divider">
            Dal 1920
          </h2>
          <p className="font-accent text-base sm:text-lg text-gold-light italic mt-8 sm:mt-10 max-w-2xl mx-auto px-4">
            Oltre un secolo di dedizione, passione e maestria nella selezione della carne e nell'arte della brace
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-fire to-gold hidden sm:block" style={{ transform: "translateX(-50%)" }} />

          {timelineData.map((item, i) => (
            <AnimatedSection 
              key={i} 
              delay={i * 0.2}
              className={`flex flex-col sm:flex-row mb-12 sm:mb-16 relative ${i % 2 === 1 ? "sm:flex-row-reverse" : ""}`}
            >
              <motion.div 
                whileHover={{ y: -5, boxShadow: "0 10px 40px rgba(139,21,56,0.3)" }}
                className="sm:w-[45%] p-6 sm:p-8 bg-charcoal/50 backdrop-blur-sm border border-gold/20 hover:border-fire transition-all duration-400 ml-8 sm:ml-0"
              >
                <div className="font-elegant text-4xl sm:text-5xl font-bold text-fire opacity-60 leading-none mb-4">
                  {item.year}
                </div>
                <h3 className="font-elegant text-xl sm:text-2xl font-semibold text-cream mb-4">
                  {item.title}
                </h3>
                <p className="text-gold-light leading-relaxed text-sm sm:text-base">{item.text}</p>
              </motion.div>

              {/* Dot */}
              <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-fire border-[3px] border-noir shadow-[0_0_0_3px] shadow-fire rounded-full top-8" />
              
              {/* Mobile dot */}
              <div className="sm:hidden absolute left-4 w-3 h-3 bg-fire rounded-full top-8" />
            </AnimatedSection>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16 sm:mt-20">
          {stats.map((stat, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(139,21,56,0.3)" }}
                className="text-center p-6 sm:p-8 bg-charcoal/30 border border-gold/20 hover:border-fire transition-all duration-400 hover:bg-charcoal/50 group"
              >
                <div className="font-elegant text-3xl sm:text-5xl font-bold text-gold group-hover:text-fire transition-colors leading-none mb-3 sm:mb-4">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm uppercase tracking-wider text-gold-light">
                  {stat.label}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Storia;
