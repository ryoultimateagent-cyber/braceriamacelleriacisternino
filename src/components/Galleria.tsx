import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, title: "Costata alla Brace", desc: "Perfetta marezzatura e cottura impeccabile" },
  { src: gallery2, title: "Fiorentina Premium", desc: "Il taglio più amato dai nostri clienti" },
  { src: gallery3, title: "Tartare Signature", desc: "Carne cruda di primissima scelta" },
  { src: gallery4, title: "Costine BBQ", desc: "Cottura lenta e glassa artigianale" },
  { src: gallery5, title: "Il Nostro Locale", desc: "Atmosfera calda e accogliente" },
  { src: gallery6, title: "Bombette Pugliesi", desc: "Tradizione pugliese autentica" },
];

const Galleria = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="galleria" className="py-16 sm:py-24 bg-noir relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-12 sm:mb-20">
          <span className="font-accent text-fire italic tracking-[4px] uppercase text-xs sm:text-sm">
            Le Nostre Creazioni
          </span>
          <h2 className="font-elegant text-3xl sm:text-5xl lg:text-6xl font-bold text-cream mt-4 relative inline-block section-divider">
            Galleria
          </h2>
          <p className="font-accent text-base sm:text-lg text-gold-light italic mt-8 sm:mt-10 max-w-2xl mx-auto px-4">
            Ogni piatto racconta una storia di passione, tradizione e maestria culinaria
          </p>
        </AnimatedSection>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {images.map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="relative aspect-square overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-elegant text-lg sm:text-xl font-semibold text-cream mb-1">
                    {img.title}
                  </h3>
                  <p className="text-gold-light text-xs sm:text-sm">{img.desc}</p>
                </div>
                {/* Hover border */}
                <div className="absolute inset-0 border-2 border-fire opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-noir/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-cream hover:text-fire transition-colors z-10 p-2"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Navigation */}
            <button
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-cream hover:text-fire transition-colors z-10 p-2"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
            >
              <ChevronLeft className="w-8 h-8 sm:w-12 sm:h-12" />
            </button>

            <button
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-cream hover:text-fire transition-colors z-10 p-2"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
            >
              <ChevronRight className="w-8 h-8 sm:w-12 sm:h-12" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl max-h-[85vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].title}
                className="max-w-full max-h-[75vh] object-contain mx-auto"
              />
              <div className="text-center mt-4 sm:mt-6">
                <h3 className="font-elegant text-xl sm:text-2xl font-semibold text-cream mb-1 sm:mb-2">
                  {images[selectedIndex].title}
                </h3>
                <p className="text-gold-light text-sm sm:text-base">{images[selectedIndex].desc}</p>
              </div>
            </motion.div>

            {/* Image counter */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-gold-light text-sm">
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Galleria;
