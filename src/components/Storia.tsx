import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";

const timelineData = [
  {
    year: "1986",
    title: "Le Radici",
    text: "La Macelleria Belvedere nasce nel cuore di Putignano. Una passione di famiglia dedicata alla selezione delle migliori carni.",
    align: "right"
  },
  {
    year: "Tradizione",
    title: "Qualità e Passione",
    text: "Offriamo una ricca selezione di carni fresche durante il giorno e un servizio braceria serale per gustare le nostre specialità cotte alla brace.",
    align: "left"
  },
  {
    year: "Oggi",
    title: "Macelleria & Braceria",
    text: "Qualità, tradizione e passione in ogni taglio. Continuiamo a servire la nostra comunità con la stessa dedizione di trent'anni fa.",
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
    <section id="storia" ref={containerRef} className="section-spacing bg-noir relative overflow-hidden">
      {/* Cinematic Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.01] select-none">
        <h2 className="text-[30vw] font-display font-black uppercase whitespace-nowrap">HISTORY</h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-40">
          <AnimatedSection>
            <span className="text-gold text-xs uppercase tracking-[0.5em] font-bold mb-6 block">Il Nostro Cammino</span>
            <h2 className="text-3xl md:text-6xl lg:text-7xl font-display font-black text-cream uppercase leading-none">
              UNA STORIA <br /> <span className="text-gold italic font-light">DI FUOCO</span>
            </h2>
          </AnimatedSection>
        </div>

        <div className="space-y-24 md:space-y-40">
          {timelineData.map((item, i) => (
            <div key={i} className={`flex flex-col lg:flex-row gap-10 md:gap-16 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              <div className="w-full lg:w-1/2">
                <AnimatedSection animation={i % 2 === 0 ? "fade-right" : "fade-left"}>
                  <div className="relative aspect-video overflow-hidden border border-gold/10 p-2 rounded-xl">
                    <img 
                      src={i === 0 ? "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200" : i === 1 ? "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=1200" : "https://images.unsplash.com/photo-1529692236671-f1f6e9481bfa?auto=format&fit=crop&q=80&w=1200"} 
                      alt={item.title} 
                      loading="lazy"
                      className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 rounded-lg"
                    />
                  </div>
                </AnimatedSection>
              </div>
              
              <div className={`w-full lg:w-1/2 ${i % 2 !== 0 ? "lg:text-right" : "lg:text-left"}`}>
                <AnimatedSection animation="fade-up" delay={0.2}>
                  <span className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-gold/10 mb-4 block leading-none">{item.year}</span>
                  <h3 className="text-2xl md:text-3xl lg:text-5xl font-display font-bold text-cream mb-6 md:mb-8 uppercase tracking-tighter">{item.title}</h3>
                  <p className="text-cream/60 text-base md:text-lg leading-relaxed max-w-xl italic font-accent">
                    "{item.text}"
                  </p>
                </AnimatedSection>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Storia;