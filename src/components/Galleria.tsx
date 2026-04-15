import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { X, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import SectionHeader from "./SectionHeader";
import { useParallax } from "@/hooks/useParallax";

const images = [
  { src: gallery1, title: "Costata alla Brace", desc: "Perfetta marezzatura e cottura impeccabile su brace viva." },
  { src: gallery2, title: "Fiorentina Premium", desc: "Il taglio più amato dai nostri clienti, frollato con cura." },
  { src: gallery3, title: "Tartare Signature", desc: "Carne cruda di primissima scelta battuta al coltello." },
  { src: gallery4, title: "Ribs BBQ Slow Cook", desc: "Cottura lenta per 12 ore e glassa artigianale segreta." },
  { src: gallery5, title: "Atmosfera Calda", desc: "Un ambiente accogliente nel cuore di Putignano." },
  { src: gallery6, title: "Bombette Pugliesi", desc: "La tradizione autentica servita fumante al tavolo." },
];

const GalleryItem = ({ img, i, onClick }: { img: typeof images[0], i: number, onClick: () => void }) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  const parallaxDistance = i % 2 === 0 ? 30 : -30;
  const { ref, transform: y } = useParallax(parallaxDistance);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      initial={{ clipPath: "inset(100% 0% 0% 0%)", opacity: 0 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 1.2, 
        delay: i * 0.1,
        ease: [0.16, 1, 0.3, 1] 
      }}
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Visualizza ${img.title}`}
      className={`
        relative group cursor-pointer overflow-hidden rounded-[2.5rem] 
        border border-white/10 fire-glow-card focus-visible:ring-2 focus-visible:ring-primary outline-none
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
         <h3 className="text-[20px] font-normal text-white italic uppercase tracking-tighter drop-shadow-lg leading-[1.25]">{img.title}</h3>
      </div>
      
      <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
         <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-xl border border-primary/30 flex items-center justify-center text-white">
            <Maximize2 className="w-5 h-5" />
         </div>
      </div>
    </motion.div>
  );
};

const Galleria = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const closeLightbox = useCallback(() => setSelectedIndex(null), []);

  const nextImage = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  }, [selectedIndex]);

  const prevImage = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, closeLightbox, nextImage, prevImage]);


  return (
    <section id="galleria" className="py-24 md:py-32 bg-transparent overflow-hidden relative">
      <div className="section-container mb-12">
        <SectionHeader 
          subtitle="VISIONI DEL GUSTO"
          title="GALLERIA VISIVA"
          align="left"
          className="mb-0"
        />
      </div>

      <div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-6 md:px-12 max-w-6xl mx-auto"
      >
        {images.map((img, i) => (
          <GalleryItem key={i} img={img} i={i} onClick={() => setSelectedIndex(i)} />
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-6 md:p-12"
            role="dialog"
            aria-modal="true"
            aria-label="Galleria foto"
          >
            <button 
              onClick={closeLightbox} 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110] focus-visible:ring-2 focus-visible:ring-primary rounded-full p-2"
              aria-label="Chiudi galleria"
            >
              <X className="w-8 h-8" />
            </button>

            <button 
              onClick={prevImage}
              className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-[110] focus-visible:ring-2 focus-visible:ring-primary rounded-full p-2"
              aria-label="Immagine precedente"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button 
              onClick={nextImage}
              className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-[110] focus-visible:ring-2 focus-visible:ring-primary rounded-full p-2"
              aria-label="Immagine successiva"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <motion.div 
              layoutId={`gallery-${selectedIndex}`}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-5xl w-full aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl relative"
            >
               <img src={images[selectedIndex].src} alt={images[selectedIndex].title} className="w-full h-full object-cover" />
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
