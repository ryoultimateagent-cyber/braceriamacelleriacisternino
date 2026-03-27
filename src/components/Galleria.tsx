import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, title: "Costata alla Brace", desc: "Perfetta marezzatura e cottura impeccabile su brace viva." },
  { src: gallery2, title: "Fiorentina Premium", desc: "Il taglio più amato dai nostri clienti, frollato con cura." },
  { src: gallery3, title: "Tartare Signature", desc: "Carne cruda di primissima scelta battuta al coltello." },
  { src: gallery4, title: "Ribs BBQ Slow Cook", desc: "Cottura lenta per 12 ore e glassa artigianale segreta." },
  { src: gallery5, title: "Atmosfera Calda", desc: "Un ambiente accogliente nel cuore di Mola di Bari." },
  { src: gallery6, title: "Bombette Pugliesi", desc: "La tradizione autentica servita fumante al tavolo." },
];

const Galleria = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = useCallback(() => setSelectedIndex(null), []);

  const goNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  }, [selectedIndex]);

  const goPrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  }, [selectedIndex]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      
      switch (e.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowRight":
          goNext();
          break;
        case "ArrowLeft":
          goPrev();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, closeLightbox, goNext, goPrev]);

  return (
    <section 
      id="galleria" 
      className="py-24 lg:py-40 bg-noir relative overflow-hidden"
      aria-label="Galleria immagini"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <SectionHeader 
          subtitle="Visione del Gusto"
          title="I Nostri Scatti"
          className="mb-20 lg:mb-32"
        />

        {/* Dynamic Masonry-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {images.map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="group relative aspect-[4/5] lg:aspect-square overflow-hidden cursor-pointer rounded-2xl shadow-2xl border border-white/5"
                onClick={() => openLightbox(i)}
                role="button"
                aria-label={`Visualizza ${img.title} a tutto schermo`}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(i);
                  }
                }}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Overlay with Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-noir/90 via-noir/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 lg:p-12">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="relative z-10"
                  >
                    <div className="text-gold mb-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl lg:text-3xl font-display font-bold text-cream mb-2 uppercase tracking-wide">
                      {img.title}
                    </h3>
                    <p className="text-gold-light/70 text-sm lg:text-base tracking-wide font-accent italic">
                      {img.desc}
                    </p>
                  </motion.div>
                </div>
                
                {/* Minimalist border accent */}
                <div className="absolute inset-4 border border-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none scale-110 group-hover:scale-100" />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Modern Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-noir/98 backdrop-blur-2xl flex items-center justify-center p-6"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Galleria immagini a tutto schermo"
          >
            {/* Control Buttons */}
            <div className="absolute top-10 right-10 flex gap-6 z-[110]">
              <button
                className="text-white/40 hover:text-gold transition-colors p-3 hover:bg-white/5 rounded-full focus-visible:ring-2 focus-visible:ring-gold outline-none"
                onClick={closeLightbox}
                aria-label="Chiudi galleria"
              >
                <X className="w-10 h-10" />
              </button>
            </div>

            <button
              className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 text-white/20 hover:text-gold transition-all z-[110] p-4 group focus-visible:ring-2 focus-visible:ring-gold outline-none rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              aria-label="Immagine precedente"
            >
              <ChevronLeft className="w-12 h-12 lg:w-20 lg:h-20 group-hover:scale-110 transition-transform" />
            </button>

            <button
              className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 text-white/20 hover:text-gold transition-all z-[110] p-4 group focus-visible:ring-2 focus-visible:ring-gold outline-none rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              aria-label="Immagine successiva"
            >
              <ChevronRight className="w-12 h-12 lg:w-20 lg:h-20 group-hover:scale-110 transition-transform" />
            </button>

            {/* Main Image View */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="max-w-6xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative group/main">
                <img
                  src={images[selectedIndex].src}
                  alt={images[selectedIndex].title}
                  className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-[0_50px_100px_rgba(0,0,0,0.8)] border border-white/5"
                />
                
                {/* Counter */}
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-4">
                  <div className="h-px w-10 bg-white/20" />
                  <span className="text-gold text-xs font-bold tracking-[0.4em] uppercase">
                    {selectedIndex + 1} / {images.length}
                  </span>
                  <div className="h-px w-10 bg-white/20" />
                </div>
              </div>
              
              <div className="text-center mt-12 max-w-2xl px-6">
                <h3 className="text-3xl lg:text-5xl font-display font-bold text-cream mb-4 uppercase tracking-widest leading-none">
                  {images[selectedIndex].title}
                </h3>
                <p className="text-gold-light/70 text-lg lg:text-xl font-accent italic leading-relaxed">
                  {images[selectedIndex].desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Galleria;
