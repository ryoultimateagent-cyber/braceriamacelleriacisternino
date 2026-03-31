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
    <section id="storia" ref={containerRef} className="section-container py-24 md:py-32 bg-transparent relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <AnimatedSection>
          <span className="text-primary text-xs font-bold uppercase tracking-[0.4em] mb-4 block">CHI SIAMO</span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-none uppercase">
            TRADIZIONE <br /> <span className="text-primary italic">E QUALITÀ</span>
          </h2>
          <div className="h-1.5 w-24 bg-primary mx-auto mt-8 rounded-full shadow-[0_0_15px_rgba(255,61,0,0.5)]" />
        </AnimatedSection>
      </div>

      <div className="space-y-32 md:space-y-48">
        {timelineData.map((item, i) => (
          <div key={i} className={`flex flex-col lg:flex-row gap-16 md:gap-24 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
            <div className="w-full lg:w-1/2 group">
              <AnimatedSection animation={i % 2 === 0 ? "fade-right" : "fade-left"}>
                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-white/10 group-hover:scale-[1.02] transition-transform duration-500">
                  <img 
                    src={i === 0 ? "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200" : i === 1 ? "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=1200" : "https://images.unsplash.com/photo-1529692236671-f1f6e9481bfa?auto=format&fit=crop&q=80&w=1200"} 
                    srcSet={`${i === 0 ? "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600" : i === 1 ? "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=600" : "https://images.unsplash.com/photo-1529692236671-f1f6e9481bfa?auto=format&fit=crop&q=80&w=600"} 600w, ${i === 0 ? "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200" : i === 1 ? "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=1200" : "https://images.unsplash.com/photo-1529692236671-f1f6e9481bfa?auto=format&fit=crop&q=80&w=1200"} 1200w`}
                    sizes="(max-width: 1024px) 100vw, 600px"
                    alt={item.title} 
                    loading="lazy"
                    width="800"
                    height="450"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                </div>
              </AnimatedSection>
            </div>
            
            <div className={`w-full lg:w-1/2 ${i % 2 !== 0 ? "lg:text-right" : "lg:text-left"}`}>
              <AnimatedSection animation="fade-up" delay={0.2}>
                <span className="text-5xl md:text-7xl lg:text-9xl font-black text-white/5 mb-6 block leading-none">{item.year}</span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 uppercase tracking-tight">{item.title}</h3>
                <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                  {item.text}
                </p>
              </AnimatedSection>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Storia;