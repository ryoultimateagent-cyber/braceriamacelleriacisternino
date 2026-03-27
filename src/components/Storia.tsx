import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";

const timelineData = [
  {
    year: "1980",
    title: "L'Inizio di un Sogno",
    text: "La famiglia Belvedere apre la prima bottega a Mola di Bari. Una missione chiara: portare l'eccellenza della carne sulla tavola di ogni intenditore.",
    align: "right"
  },
  {
    year: "2005",
    title: "L'Arte della Brace",
    text: "L'evoluzione naturale: la macelleria si fonde con la braceria. Il fuoco diventa il nostro linguaggio, la brace il nostro pennello.",
    align: "left"
  },
  {
    year: "Oggi",
    title: "Eccellenza Senza Tempo",
    text: "Continuamo a onorare il passato guardando al futuro. Una selezione maniacale dei tagli e un servizio che celebra il rito del convivio.",
    align: "right"
  },
];

const Storia = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="storia" ref={containerRef} className="py-32 lg:py-48 bg-noir relative overflow-hidden">
      {/* Cinematic Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02] select-none">
        <h2 className="text-[20vw] font-display font-black uppercase whitespace-nowrap">ESTABLISHED 1980</h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 lg:mb-40">
          <AnimatedSection>
            <span className="text-gold text-xs uppercase tracking-[0.5em] font-bold mb-6 block">Il Nostro Cammino</span>
            <h2 className="text-4xl md:text-7xl font-display font-black text-cream uppercase mb-8">
              UNA STORIA DI <br /> <span className="text-ember italic">FUOCO E PASSIONE</span>
            </h2>
          </AnimatedSection>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden lg:block" />

          {timelineData.map((item, i) => (
            <div key={i} className={`flex flex-col lg:flex-row items-center mb-24 lg:mb-40 ${item.align === "left" ? "lg:flex-row-reverse" : ""}`}>
              {/* Content */}
              <div className="w-full lg:w-1/2 px-6 lg:px-20 text-center lg:text-left">
                <AnimatedSection animation={item.align === "right" ? "fade-up" : "fade-up"}>
                   <div className={`flex flex-col ${item.align === "left" ? "lg:items-end lg:text-right" : "lg:items-start"}`}>
                    <span className="text-5xl lg:text-8xl font-display font-black text-white/5 mb-4 block leading-none">{item.year}</span>
                    <h3 className="text-2xl lg:text-4xl font-display font-bold text-gold mb-6 uppercase">{item.title}</h3>
                    <p className="text-gold-light/60 text-lg leading-relaxed max-w-md">{item.text}</p>
                   </div>
                </AnimatedSection>
              </div>

              {/* Central Point */}
              <div className="relative z-10 my-8 lg:my-0">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="w-4 h-4 rounded-full bg-gold shadow-[0_0_20px_rgba(212,175,55,0.8)] border-4 border-noir" 
                />
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden lg:block lg:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Storia;