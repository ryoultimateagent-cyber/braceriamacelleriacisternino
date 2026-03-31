import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const images = [
  { src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200", title: "Costata alla Brace", desc: "Perfetta marezzatura e cottura impeccabile su brace viva." },
  { src: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=1200", title: "Fiorentina Premium", desc: "Il taglio più amato dai nostri clienti, frollato con cura." },
  { src: "https://images.unsplash.com/photo-1529692236671-f1f6e9481bfa?auto=format&fit=crop&q=80&w=1200", title: "Tartare Signature", desc: "Carne cruda di primissima scelta battuta al coltello." },
  { src: "https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=1200", title: "Ribs BBQ Slow Cook", desc: "Cottura lenta per 12 ore e glassa artigianale segreta." },
  { src: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?auto=format&fit=crop&q=80&w=1200", title: "Atmosfera Calda", desc: "Un ambiente accogliente nel cuore di Putignano." },
  { src: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=1200", title: "Bombette Pugliesi", desc: "La tradizione autentica servita fumante al tavolo." },
];

const Galleria = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = useCallback(() => setSelectedIndex(null), []);

  const goNext = useCallback(() => {
    if (selectedIndex !== null) setSelectedIndex((selectedIndex + 1) % images.length);
  }, [selectedIndex]);

  const goPrev = useCallback(() => {
    if (selectedIndex !== null) setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, closeLightbox, goNext, goPrev]);

  return (
    <section id="galleria" className="section-spacing bg-white relative overflow-hidden">
      {/* Background Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ember/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ember/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-32">
          <AnimatedSection>
            <span className="text-ember text-xs uppercase tracking-[0.6em] font-bold mb-6 block">Visioni del Gusto</span>
            <h2 className="text-3xl md:text-6xl lg:text-7xl font-display font-black text-foreground uppercase leading-none tracking-tighter">
              GALLERIA <br /> <span className="text-ember italic font-light">VISIVA</span>
            </h2>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {images.map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="group cursor-pointer" animation="scale-up">
              <div 
                className="relative aspect-[4/5] overflow-hidden border border-ember/10 group-hover:border-ember/40 transition-all duration-300 rounded-xl shadow-md"
                onClick={() => openLightbox(i)}
              >
                <img 
                  src={img.src} 
                  alt={img.title} 
                  loading="lazy"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Visual Label */}
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-black/80 backdrop-blur-md">
                   <h3 className="text-lg font-display font-bold text-white uppercase tracking-widest">{img.title}</h3>
                </div>
                
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                  <Maximize2 className="w-5 h-5 text-white" />
                </div>
                
                {/* Decorative corners */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/20" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/20" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div 
            role="dialog"
            aria-modal="true"
            aria-label={`Galleria immagine: ${images[selectedIndex].title}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-6 lg:p-12"
          >
            <button 
              onClick={closeLightbox} 
              className="absolute top-8 right-8 text-white/80 hover:text-white transition-colors z-[110]"
              aria-label="Chiudi galleria"
            >
              <X className="w-8 h-8 md:w-10 md:h-10" />
            </button>
            <button 
              onClick={goPrev} 
              className="absolute left-8 text-white/80 hover:text-white transition-colors z-[110] hidden lg:block"
              aria-label="Immagine precedente"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>
            <button 
              onClick={goNext} 
              className="absolute right-8 text-white/80 hover:text-white transition-colors z-[110] hidden lg:block"
              aria-label="Immagine successiva"
            >
              <ChevronRight className="w-12 h-12" />
            </button>

            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="relative max-w-6xl w-full h-full flex flex-col lg:flex-row items-center gap-12"
            >
              <div className="w-full lg:w-2/3 h-full overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
                <img 
                  src={images[selectedIndex].src} 
                  alt={images[selectedIndex].title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="w-full lg:w-1/3 text-center lg:text-left">
                <h3 className="text-3xl lg:text-5xl font-display font-black text-white uppercase mb-6">{images[selectedIndex].title}</h3>
                <p className="text-white/80 text-lg lg:text-xl font-accent italic leading-relaxed">{images[selectedIndex].desc}</p>
                <div className="mt-8 md:mt-12 flex items-center justify-center lg:justify-start gap-4">
                  <span className="text-white font-black font-display text-xl">{selectedIndex + 1}</span>
                  <div className="w-12 h-px bg-white/30" />
                  <span className="text-white/60 font-display text-xl">{images.length}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Galleria;