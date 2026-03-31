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
    <section id="galleria" className="section-container py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <AnimatedSection>
            <span className="text-primary text-xs font-bold uppercase tracking-[0.4em] mb-4 block">VISIONI DEL GUSTO</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-foreground tracking-tight leading-none uppercase">
              GALLERIA <br /> <span className="text-primary italic">VISIVA</span>
            </h2>
            <div className="h-1.5 w-24 bg-primary mx-auto mt-8 rounded-full" />
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto">
          {images.map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="group cursor-pointer" animation="scale-up">
              <div 
                role="button"
                tabIndex={0}
                aria-label={`Visualizza immagine: ${img.title}`}
                className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 bg-white focus-visible:ring-4 focus-visible:ring-primary outline-none"
                onClick={() => openLightbox(i)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(i);
                  }
                }}
              >
                <img 
                  src={img.src} 
                  srcSet={`${img.src.replace('w=1200', 'w=600')} 600w, ${img.src} 1200w`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                  alt={img.title} 
                  loading="lazy"
                  width="400"
                  height="500"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Visual Label */}
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-black/40 backdrop-blur-xl border-t border-white/10">
                   <h3 className="text-xl font-black text-white uppercase tracking-tight">{img.title}</h3>
                </div>
                
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <div className="bg-white/20 backdrop-blur-md p-3 rounded-2xl border border-white/30">
                    <Maximize2 className="w-6 h-6 text-white" />
                  </div>
                </div>
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
            className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-3xl flex items-center justify-center p-6 lg:p-24"
          >
            <button 
              onClick={closeLightbox} 
              className="absolute top-12 right-12 text-white/50 hover:text-white transition-colors z-[110]"
              aria-label="Chiudi galleria"
            >
              <X className="w-10 h-10" />
            </button>
            <button 
              onClick={goPrev} 
              className="absolute left-12 text-white/30 hover:text-white transition-colors z-[110] hidden lg:block"
              aria-label="Immagine precedente"
            >
              <ChevronLeft className="w-16 h-16" />
            </button>
            <button 
              onClick={goNext} 
              className="absolute right-12 text-white/30 hover:text-white transition-colors z-[110] hidden lg:block"
              aria-label="Immagine successiva"
            >
              <ChevronRight className="w-16 h-16" />
            </button>

            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative max-w-7xl w-full h-full flex flex-col lg:flex-row items-center gap-16"
            >
              <div className="w-full lg:w-2/3 h-full overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl">
                <img 
                  src={images[selectedIndex].src} 
                  alt={images[selectedIndex].title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="w-full lg:w-1/3 text-center lg:text-left space-y-8">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-[10px] font-black tracking-widest uppercase">
                  IMMINE {selectedIndex + 1} DI {images.length}
                </span>
                <h3 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none">{images[selectedIndex].title}</h3>
                <p className="text-white/60 text-lg lg:text-2xl font-medium leading-relaxed italic">"{images[selectedIndex].desc}"</p>
                <div className="flex items-center justify-center lg:justify-start gap-6 pt-8 border-t border-white/10">
                   <div className="flex gap-2">
                     {images.map((_, i) => (
                       <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === selectedIndex ? "w-8 bg-primary" : "w-1.5 bg-white/20"}`} />
                     ))}
                   </div>
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