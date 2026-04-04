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
    <section id="storia" ref={containerRef} className="py-20 md:py-28 bg-[#f7f4ed] relative overflow-hidden">
      <div className="section-container mb-16">
        <SectionHeader 
          subtitle="CHI SIAMO"
          title="Tradizione e Qualità"
          align="left"
          className="mb-0"
        />
      </div>

      <div className="section-container space-y-24 md:space-y-32">
        {timelineData.map((item, i) => (
          <div key={i} className={`flex flex-col lg:flex-row gap-12 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
            <div className="w-full lg:w-1/2 group relative">
                <div className="relative aspect-video rounded-[16px] overflow-hidden border border-[#eceae4] shadow-sm transition-all duration-700">
                  <img 
                    src={i === 0 ? "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200" : i === 1 ? "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=1200" : "https://images.unsplash.com/photo-1529692236671-f1f6e9481bfa?auto=format&fit=crop&q=80&w=1200"} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                  />
                </div>
                {/* Subtle identifier */}
                <span className="absolute -top-10 -left-4 text-7xl font-semibold text-[#1c1c1c]/[0.05] select-none pointer-events-none tracking-tighter">0{i+1}</span>
            </div>
            
            <div className={`w-full lg:w-1/2 ${i % 2 !== 0 ? "lg:text-right" : "lg:text-left"}`}>
                <span className="text-[#1c1c1c] font-semibold text-lg mb-3 block tracking-tight">{item.year}</span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1c1c1c] mb-6 tracking-[-0.03em] leading-tight">{item.title}</h3>
                <p className="text-[#5f5f5d] text-base md:text-lg font-normal leading-relaxed max-w-xl">
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