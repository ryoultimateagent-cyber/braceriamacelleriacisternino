import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });

  const closeLightbox = useCallback(() => setSelectedIndex(null), []);

  return (
    <section id="galleria" className="py-16 md:py-24 bg-transparent overflow-hidden relative">
      <div className="section-container mb-12">
        <SectionHeader 
          subtitle="VISIONI DEL GUSTO"
          title="GALLERIA VISIVA"
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
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedIndex(i)}
            className={`
              relative group cursor-pointer overflow-hidden rounded-[2.5rem] 
              border border-white/10 fire-glow-card
              ${i % 3 === 0 ? "md:col-span-2 lg:col-span-2 aspect-[16/9]" : "aspect-[4/5] md:aspect-square lg:aspect-[4/5]"}
              ${i === 1 ? "lg:mt-12" : ""}
              ${i === 2 ? "lg:-mt-12" : ""}
              ${i === 4 ? "md:col-span-2 aspect-video" : ""}
            `}
          >
            <img 
              src={img.src} 
              alt={img.title} 
              className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 scale-105 group-hover:scale-110"
            />
            
            {/* Fire Overlay Effect */}
            <div className="fire-effect opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
            
            <div className="absolute bottom-8 left-8 right-8 transform group-hover:translate-y-[-8px] transition-transform duration-500">
               <h3 className="text-xl md:text-2xl font-black text-white italic uppercase tracking-tighter drop-shadow-lg">{img.title}</h3>
            </div>
            
            <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
               <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-xl border border-primary/30 flex items-center justify-center text-white">
                  <Maximize2 className="w-5 h-5" />
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
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-6 md:p-12"
          >
            <button onClick={closeLightbox} className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]">
              <X className="w-8 h-8" />
            </button>
            <motion.div 
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              className="max-w-5xl w-full aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl relative"
            >
               <img src={images[selectedIndex].src} alt="" className="w-full h-full object-cover" />
               <div className="absolute bottom-10 left-10 right-10">
                  <h3 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-white mb-2">{images[selectedIndex].title}</h3>
                  <p className="text-base md:text-lg text-white/70 font-medium italic max-w-xl leading-relaxed">"{images[selectedIndex].desc}"</p>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Galleria;