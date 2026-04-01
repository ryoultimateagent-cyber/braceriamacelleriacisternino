import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const timelineData = [
  {
    year: "1986",
    title: "Le Radici",
    text: "La Macelleria Belvedere nasce nel cuore di Putignano. Una passione di famiglia dedicata alla selezione delle migliori carni.",
  },
  {
    year: "Tradizione",
    title: "Qualità e Passione",
    text: "Offriamo una ricca selezione di carni fresche durante il giorno e un servizio braceria serale per gustare le nostre specialità cotte alla brace.",
  },
  {
    year: "Oggi",
    title: "Macelleria & Braceria",
    text: "Qualità, tradizione e passione in ogni taglio. Continuiamo a servire la nostra comunità con la stessa dedizione di trent'anni fa.",
  },
];

const Storia = () => {
  const containerRef = useRef(null);

  return (
    <section id="storia" ref={containerRef} className="py-24 md:py-32 lg:py-48 bg-black relative overflow-hidden">
      <div className="section-container mb-24">
        <span className="text-primary text-xs font-black uppercase tracking-[0.4em] block italic mb-4">CHI SIAMO</span>
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.85] uppercase italic">
          TRADIZIONE <br /> <span className="text-primary">E QUALITÀ</span>
        </h2>
      </div>

      <div className="section-container space-y-32 md:space-y-64">
        {timelineData.map((item, i) => (
          <div key={i} className={`flex flex-col lg:flex-row gap-16 md:gap-32 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
            <div className="w-full lg:w-1/2 group relative">
                <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl transition-all duration-700 group-hover:scale-[1.02]">
                  <img 
                    src={i === 0 ? "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200" : i === 1 ? "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=1200" : "https://images.unsplash.com/photo-1529692236671-f1f6e9481bfa?auto=format&fit=crop&q=80&w=1200"} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                </div>
                {/* Floating Number Background */}
                <span className="absolute -top-20 -left-10 text-[12rem] font-black text-white/5 select-none pointer-events-none italic">0{i+1}</span>
            </div>
            
            <div className={`w-full lg:w-1/2 ${i % 2 !== 0 ? "lg:text-right" : "lg:text-left"}`}>
                <span className="text-primary font-black text-2xl mb-4 block italic uppercase">{item.year}</span>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 uppercase italic tracking-tighter">{item.title}</h3>
                <p className="text-white/60 text-xl lg:text-2xl font-medium leading-relaxed max-w-2xl">
                  {item.text}
                </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Storia;
