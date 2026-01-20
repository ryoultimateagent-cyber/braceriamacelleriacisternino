import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import logo from "@/assets/logo-cisternino.jpg";
import AnimatedSection from "./AnimatedSection";

const Intro = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="intro" ref={ref} className="py-16 sm:py-24 bg-charcoal relative overflow-hidden">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" 
      />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <AnimatedSection>
            <div className="flex justify-center mb-8 sm:mb-10">
              <img
                src={logo}
                alt="Braceria Macelleria Cisternino"
                className="w-32 h-32 sm:w-40 sm:h-40 object-contain rounded-lg shadow-2xl"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h2 className="font-elegant text-2xl sm:text-4xl lg:text-5xl font-bold text-cream mb-6 relative inline-block section-divider">
              Braceria Macelleria Cisternino
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <p className="font-accent text-base sm:text-lg lg:text-xl text-gold-light italic mt-8 sm:mt-10 leading-relaxed px-4">
              Nel cuore di Mola di Bari, la nostra famiglia porta avanti una tradizione centenaria. 
              Dalla macelleria alla braceria, dalla selezione accurata delle carni alla cottura perfetta 
              sulla brace viva: ogni dettaglio racconta una storia di passione e dedizione autentica.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10 sm:mt-12">
              {[
                { icon: "🔥", label: "Brace Autentica" },
                { icon: "🥩", label: "Carni Selezionate" },
                { icon: "👨‍🍳", label: "Tradizione dal 1920" },
                { icon: "⭐", label: "Qualità Premium" },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center gap-2"
                >
                  <span className="text-3xl sm:text-4xl">{item.icon}</span>
                  <span className="text-xs sm:text-sm text-gold-light uppercase tracking-wider">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Intro;
