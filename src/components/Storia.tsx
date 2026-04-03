import { motion } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "./SectionHeader";

const timelineData = [
  {
    year: "1986",
    title: "Le Radici",
    text: "La Macelleria Belvedere nasce nel cuore di Putignano. Una passione di famiglia dedicata alla selezione delle migliori carni.",
  },
  {
    year: "Tradizione",
    title: "Qualità e Passione",
    text: "Offriamo una ricca selezione di carni fresche durante il giorno e un servizio braceria serale per gustare le nostre specialità.",
  },
  {
    year: "Oggi",
    title: "Macelleria & Braceria",
    text: "Qualità, tradizione e passione in ogni taglio. Continuiamo a servire la nostra comunità con la stessa dedizione di sempre.",
  },
];

const Storia = () => {
  const containerRef = useRef(null);

  return (
    <section id="storia" ref={containerRef} className="py-16 md:py-24 bg-transparent relative overflow-hidden">
      <div className="section-container mb-12">
        <SectionHeader 
          subtitle="CHI SIAMO"
          title="TRADIZIONE E QUALITÀ"
          align="left"
          className="mb-0"
        />
      </div>

      <div className="section-container space-y-24 md:space-y-32">
        {timelineData.map((item, i) => (
          <div key={i} className={`flex flex-col lg:flex-row gap-12 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
            <div className="w-full lg:w-1/2 group relative">
                <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/5 shadow-xl transition-all duration-700 group-hover:scale-[1.01] fire-glow-card">
                  <img 
                    src={i === 0 ? "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200" : i === 1 ? "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=1200" : "https://images.unsplash.com/photo-1529692236671-f1f6e9481bfa?auto=format&fit=crop&q=80&w=1200"} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                </div>
                {/* Floating Number Background */}
                <span className="absolute -top-12 -left-6 text-[8rem] font-black text-white/[0.03] select-none pointer-events-none italic">0{i+1}</span>
            </div>
            
            <div className={`w-full lg:w-1/2 ${i % 2 !== 0 ? "lg:text-right" : "lg:text-left"}`}>
                <span className="text-primary font-black text-lg mb-3 block italic uppercase tracking-widest">{item.year}</span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-6 uppercase italic tracking-tighter leading-tight">{item.title}</h3>
                <p className="text-white/50 text-base md:text-lg font-medium leading-relaxed max-w-xl italic">
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