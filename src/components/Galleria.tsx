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
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-[8%] pb-16 no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing"
      >
        {images.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.01 }}
            onClick={() => setSelectedIndex(i)}
            className="flex-shrink-0 w-[85vw] md:w-[50vw] lg:w-[40vw] aspect-[16/9] rounded-[2rem] overflow-hidden border border-white/5 snap-center relative group cursor-pointer fire-glow-card"
          >
            <img 
              src={img.src} 
              alt={img.title} 
              className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-8 left-8">
               <h3 className="text-lg md:text-xl font-black text-white italic uppercase tracking-tighter">{img.title}</h3>
            </div>
            
            <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
               <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white">
                  <Maximize2 className="w-5 h-5" />
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Custom Scroll Progress */}
      <div className="section-container flex justify-center">
         <div className="w-48 h-0.5 bg-white/5 rounded-full relative overflow-hidden">
            <motion.div 
              style={{ scaleX: scrollXProgress }}
              className="absolute inset-0 bg-primary origin-left"
            />
         </div>
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