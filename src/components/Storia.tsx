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
    <section id="storia" ref={containerRef} className="py-32 lg:py-56 bg-noir relative overflow-hidden">
      {/* Cinematic Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.01] select-none">
        <h2 className="text-[30vw] font-display font-black uppercase whitespace-nowrap">HISTORY</h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-40">
          <AnimatedSection>
            <span className="text-gold text-xs uppercase tracking-[0.5em] font-bold mb-6 block">Il Nostro Cammino</span>
            <h2 className="text-5xl md:text-8xl font-display font-black text-cream uppercase leading-none">
              UNA STORIA <br /> <span className="text-gold italic font-light">DI FUOCO</span>
            </h2>
          </AnimatedSection>
        </div>

        <div className="space-y-40">
          {timelineData.map((item, i) => (
            <div key={i} className={`flex flex-col lg:flex-row gap-16 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              <div className="lg:w-1/2">
                <AnimatedSection animation={i % 2 === 0 ? "fade-right" : "fade-left"}>
                  <div className="relative aspect-video overflow-hidden border border-gold/10 p-2">
                    <img 
                      src={i === 0 ? "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200" : i === 1 ? "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=1200" : "https://images.unsplash.com/photo-1529692236671-f1f6e9481bfa?auto=format&fit=crop&q=80&w=1200"} 
                      alt={item.title} 
                      className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
                    />
                  </div>
                </AnimatedSection>
              </div>
              
              <div className={`lg:w-1/2 ${i % 2 !== 0 ? "lg:text-right" : "lg:text-left"}`}>
                <AnimatedSection animation="fade-up" delay={0.2}>
                  <span className="text-7xl lg:text-9xl font-display font-black text-gold/10 mb-4 block leading-none">{item.year}</span>
                  <h3 className="text-3xl lg:text-5xl font-display font-bold text-cream mb-8 uppercase tracking-tighter">{item.title}</h3>
                  <p className="text-cream/50 text-lg leading-relaxed max-w-xl italic font-accent">
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