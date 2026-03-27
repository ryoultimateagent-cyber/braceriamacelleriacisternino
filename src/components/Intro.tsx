import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChefHat } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";

const Intro = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const features = [
    { icon: "🔥", label: "Brace Autentica", text: "Legna selezionata per un sapore unico" },
    { icon: "🥩", label: "Carni Selezionate", text: "Solo il meglio dai pascoli pugliesi" },
    { icon: "👨‍🍳", label: "Tradizione dal 1980", text: "Oltre quarant'anni di maestria familiare" },
    { icon: "⭐", label: "Qualità Premium", text: "Ogni dettaglio curato con passione" },
  ];

  return (
    <section 
      id="intro" 
      ref={ref} 
      className="py-24 lg:py-40 bg-charcoal relative overflow-hidden"
      aria-label="Introduzione alla nostra filosofia"
    >
      {/* Decorative Parallax Background Layer */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)] pointer-events-none" 
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Logo with Entrance Animation */}
          <AnimatedSection className="flex justify-center mb-12 lg:mb-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gold/10 blur-xl rounded-full scale-125 transition-transform group-hover:scale-150" />
              <div className="w-32 h-32 lg:w-48 lg:h-48 bg-noir flex items-center justify-center rounded-2xl shadow-2xl relative z-10 border border-gold/20 group-hover:border-gold/40 transition-colors">
                <ChefHat className="w-16 h-16 lg:w-24 lg:h-24 text-gold" />
              </div>
            </div>
          </AnimatedSection>

          {/* Heading with Modern Typography */}
          <SectionHeader 
            subtitle="Benvenuti nel Nostro Mondo"
            title="Un'Arte Tramandata con Passione Autentica"
            className="mb-12"
          />

          {/* Description with Refined Spacing */}
          <AnimatedSection delay={0.4} className="text-center max-w-3xl mx-auto">
            <p className="text-xl lg:text-2xl text-gold-light/90 font-accent italic leading-relaxed mb-16 px-4">
              "Nel cuore di Mola di Bari, la nostra famiglia porta avanti una tradizione di eccellenza. 
              Dalla macelleria alla braceria, dalla selezione accurata delle carni alla cottura perfetta 
              sulla brace viva: ogni dettaglio racconta una storia di sapore e dedizione autentica."
            </p>
          </AnimatedSection>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-16">
            {features.map((item, i) => (
              <AnimatedSection key={i} delay={0.6 + i * 0.1}>
                <motion.div 
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-noir/30 backdrop-blur-sm border border-white/5 p-8 rounded-2xl text-center group transition-all hover:bg-white/5 hover:border-gold/20 shadow-lg"
                >
                  <div className="text-4xl lg:text-5xl mb-6 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-gold text-sm lg:text-base font-bold uppercase tracking-widest mb-3">
                    {item.label}
                  </h3>
                  <p className="text-gold-light/70 text-xs lg:text-sm tracking-wide leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
