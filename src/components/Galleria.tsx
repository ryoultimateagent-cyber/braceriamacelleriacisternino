import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const images = [
  { src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200", title: "Costata alla Brace", desc: "Perfetta marezzatura e cottura impeccabile su brace viva." },
  { src: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=1200", title: "Fiorentina Premium", desc: "Il taglio più amato dai nostri clienti, frollato con cura." },
  { src: "https://images.unsplash.com/photo-1529692236671-f1f6e9481bfa?auto=format&fit=crop&q=80&w=1200", title: "Tartare Signature", desc: "Carne cruda di primissima scelta battuta al coltello." },
  { src: "https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=1200", title: "Ribs BBQ Slow Cook", desc: "Cottura lenta per 12 ore e glassa artigianale segreta." },
  { src: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?auto=format&fit=crop&q=80&w=1200", title: "Atmosfera Calda", desc: "Un ambiente accogliente nel cuore di Mola di Bari." },
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
    <section id="galleria" className="py-32 lg:py-48 bg-noir relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 lg:mb-40">
          <AnimatedSection>
            <span className="text-gold text-xs uppercase tracking-[0.5em] font-bold mb-6 block">Visioni del Gusto</span>
            <h2 className="text-4xl md:text-7xl font-display font-black text-cream uppercase">
              GALLERIA <br /> <span className="text-ember italic">ESPERIENZIALE</span>
            </h2>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {images.map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="group cursor-pointer" animation="scale-up">
              <div 
                className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-[#111111] border border-gold/10 hover:border-gold/40 transition-all duration-700"
                onClick={() => openLightbox(i)}
              >
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  <h3 className="text-xl font-display font-bold text-gold uppercase mb-2">{img.title}</h3>
                  <p className="text-gold-light/60 text-sm leading-relaxed">{img.desc}</p>
                </div>
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-6 h-6 text-gold" />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-noir/95 backdrop-blur-2xl flex items-center justify-center p-6 lg:p-12"
          >
            <button onClick={closeLightbox} className="absolute top-8 right-8 text-gold-light hover:text-gold transition-colors z-[110]">
              <X className="w-10 h-10" />
            </button>
            <button onClick={goPrev} className="absolute left-8 text-gold-light hover:text-gold transition-colors z-[110] hidden lg:block">
              <ChevronLeft className="w-12 h-12" />
            </button>
            <button onClick={goNext} className="absolute right-8 text-gold-light hover:text-gold transition-colors z-[110] hidden lg:block">
              <ChevronRight className="w-12 h-12" />
            </button>

            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="relative max-w-6xl w-full h-full flex flex-col lg:flex-row items-center gap-12"
            >
              <div className="w-full lg:w-2/3 h-full overflow-hidden rounded-[3rem] border border-gold/20 shadow-fire">
                <img 
                  src={images[selectedIndex].src} 
                  alt={images[selectedIndex].title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="w-full lg:w-1/3 text-center lg:text-left">
                <h3 className="text-4xl lg:text-5xl font-display font-black text-gold uppercase mb-6">{images[selectedIndex].title}</h3>
                <p className="text-gold-light/70 text-lg lg:text-xl font-accent italic leading-relaxed">{images[selectedIndex].desc}</p>
                <div className="mt-12 flex items-center justify-center lg:justify-start gap-4">
                  <span className="text-gold font-black font-display text-xl">{selectedIndex + 1}</span>
                  <div className="w-12 h-px bg-gold/30" />
                  <span className="text-gold/40 font-display text-xl">{images.length}</span>
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