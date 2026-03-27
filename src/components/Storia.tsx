import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";

const timelineData = [
  {
    year: "1980",
    title: "Le Origini",
    text: "Tutto ebbe inizio a Mola di Bari, in una piccola macelleria di quartiere. L'arte della selezione e della preparazione della carne diventa un pilastro fondamentale della nostra famiglia, tramandato con dedizione assoluta.",
  },
  {
    year: "1980",
    title: "L'Evoluzione",
    text: "La passione per la carne incontra il fuoco. Introduciamo la brace viva come metodo di cottura principe, trasformando la nostra visione e dando vita a un'esperienza gastronomica unica nel suo genere.",
  },
  {
    year: "Oggi",
    title: "Il Futuro della Tradizione",
    text: "Oggi, la quarta generazione continua a onorare l'eredità ricevuta. Carne di qualità eccelsa, tagli precisi e il calore della brace: la nostra storia vive in ogni piatto che serviamo.",
  },
];

const stats = [
  { number: "40+", label: "Anni di Storia" },
  { number: "2", label: "Generazioni" },
  { number: "50k+", label: "Clienti Serviti" },
  { number: "∞", label: "Passione" },
];

const Storia = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section id="storia" ref={ref} className="py-24 lg:py-40 bg-noir relative overflow-hidden">
      {/* Dynamic Background Effect */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,21,56,0.12)_0%,transparent_60%)] pointer-events-none" 
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-20 lg:mb-32">
          <span className="text-fire text-xs md:text-sm font-bold uppercase tracking-[0.4em] mb-4 block">
            La Nostra Eredità
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-cream mb-8 leading-tight">
            Oltre Quarant'anni di Gusto
          </h2>
          <p className="text-xl text-gold-light/70 font-accent italic max-w-2xl mx-auto">
            Oltre quarant'anni di dedizione, maestria e passione nell'arte della carne e della brace viva.
          </p>
        </AnimatedSection>

        {/* Timeline Visualization */}
        <div className="max-w-5xl mx-auto relative px-4 lg:px-0">
          {/* Vertical Progress Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-fire to-transparent lg:-translate-x-1/2" aria-hidden="true" />

          {timelineData.map((item, i) => (
            <div 
              key={i} 
              className={`flex flex-col lg:flex-row mb-20 lg:mb-32 relative ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Content Card */}
              <AnimatedSection 
                delay={i * 0.2}
                className="lg:w-[45%] z-10"
              >
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="p-8 lg:p-12 bg-charcoal/40 backdrop-blur-md border border-white/5 hover:border-fire/30 transition-all duration-500 rounded-2xl shadow-xl group ml-10 lg:ml-0"
                >
                  <div className="text-5xl lg:text-7xl font-display font-bold text-fire/20 group-hover:text-fire/40 transition-colors mb-6">
                    {item.year}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-display font-bold text-cream mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gold-light/60 leading-relaxed text-sm lg:text-lg tracking-wide">
                    {item.text}
                  </p>
                </motion.div>
              </AnimatedSection>

              {/* Decorative Connector Dot */}
              <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 top-12 w-3 h-3 bg-fire rounded-full shadow-[0_0_15px_rgba(139,21,56,0.8)] z-20 border-4 border-noir" />
            </div>
          ))}
        </div>

        {/* Dynamic Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 mt-20 lg:mt-32">
          {stats.map((stat, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="text-center p-8 bg-charcoal/20 border border-white/5 rounded-2xl hover:bg-white/5 transition-all group"
              >
                <div className="text-4xl lg:text-6xl font-display font-bold text-gold mb-3 group-hover:text-fire transition-colors">
                  {stat.number}
                </div>
                <div className="text-[10px] lg:text-xs font-bold uppercase tracking-[0.3em] text-gold-light/40 group-hover:text-gold-light/80 transition-colors">
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