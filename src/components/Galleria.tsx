import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2 } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import SectionHeader from "./SectionHeader";

const images = [
  { src: gallery1, title: "Costata alla Brace", desc: "Perfetta marezzatura e cottura impeccabile su brace viva." },
  { src: gallery2, title: "Fiorentina Premium", desc: "Il taglio più amato dai nostri clienti, frollato con cura." },
  { src: gallery3, title: "Tartare Signature", desc: "Carne cruda di primissima scelta battuta al coltello." },
  { src: gallery4, title: "Ribs BBQ Slow Cook", desc: "Cottura lenta per 12 ore e glassa artigianale segreta." },
  { src: gallery5, title: "Atmosfera Calda", desc: "Un ambiente accogliente nel cuore di Putignano." },
  { src: gallery6, title: "Bombette Pugliesi", desc: "La tradizione autentica servita fumante al tavolo." },
];

const Galleria = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setSelectedIndex(null), []);

  return (
    <section id="galleria" className="py-20 md:py-28 bg-[#f7f4ed] overflow-hidden relative">
      <div className="section-container mb-12">
        <SectionHeader 
          subtitle="VISIONI DEL GUSTO"
          title="Galleria Visiva"
          align="left"
          className="mb-0"
        />
      </div>

      <div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-6 md:px-12 max-w-7xl mx-auto"
      >
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            onClick={() => setSelectedIndex(i)}
            className={`
              relative group cursor-pointer overflow-hidden rounded-[12px] 
              border border-[#eceae4] transition-all duration-300 hover:border-[#1c1c1c]/40
              ${i % 3 === 0 ? "md:col-span-2 lg:col-span-2 aspect-[16/9]" : "aspect-[4/5] md:aspect-square lg:aspect-[4/5]"}
            `}
          >
            <img 
              src={img.src} 
              alt={img.title} 
              className="w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
               <h3 className="text-xl font-semibold text-[#fcfbf8] tracking-[-0.02em]">{img.title}</h3>
            </div>
            
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
               <div className="w-10 h-10 rounded-[8px] bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                  <Maximize2 className="w-4 h-4" />
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#1c1c1c]/95 backdrop-blur-md flex items-center justify-center p-6 md:p-12"
          >
            <button 
              onClick={closeLightbox} 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
              aria-label="Chiudi galleria"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="max-w-5xl w-full aspect-video rounded-[16px] overflow-hidden border border-white/10 shadow-2xl relative bg-[#1c1c1c]"
            >
               <img src={images[selectedIndex].src} alt="" className="w-full h-full object-contain" />
               <div className="absolute bottom-8 left-8 right-8 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-2xl font-semibold tracking-[-0.02em] text-white mb-2">{images[selectedIndex].title}</h3>
                  <p className="text-base text-white/70 font-normal max-w-xl leading-relaxed">{images[selectedIndex].desc}</p>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Galleria;