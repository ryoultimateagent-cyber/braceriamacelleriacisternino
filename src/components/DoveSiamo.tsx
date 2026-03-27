import { MapPin, Clock, Phone, Mail, Navigation, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";

const DoveSiamo = () => {
  return (
    <section className="py-24 lg:py-40 bg-charcoal relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-20 lg:mb-32">
          <span className="text-fire text-xs md:text-sm font-bold uppercase tracking-[0.4em] mb-4 block">
            Posizione Privilegiata
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-cream mb-8 leading-tight">
            Dove Trovarci
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fire to-gold mx-auto rounded-full" />
        </AnimatedSection>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 max-w-7xl mx-auto items-stretch">
          {/* Info Side */}
          <AnimatedSection delay={0.2} className="lg:col-span-5 flex flex-col justify-center">
            <h3 className="text-2xl lg:text-4xl font-display font-bold text-fire mb-10 tracking-wide uppercase">
              La Nostra Sede
            </h3>
            
            <div className="space-y-10 lg:space-y-12">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold/10 group-hover:border-gold/30 transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-cream font-display font-bold text-sm lg:text-base tracking-widest uppercase mb-2">Indirizzo</p>
                  <p className="text-gold-light/60 text-base lg:text-xl leading-relaxed tracking-wide font-accent italic">
                    Via Belvedere, 12<br />
                    70042 Mola di Bari (BA)<br />
                    Puglia, Italia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold/10 group-hover:border-gold/30 transition-all">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-cream font-display font-bold text-sm lg:text-base tracking-widest uppercase mb-2">Orari d'Apertura</p>
                  <div className="text-gold-light/60 text-base lg:text-xl leading-relaxed tracking-wide font-accent italic">
                    <p className="flex items-center justify-between gap-8">
                      <span>Martedì - Domenica</span>
                      <span className="text-gold">12:00 - 15:00 / 19:00 - 23:00</span>
                    </p>
                    <p className="flex items-center justify-between gap-8 mt-2 opacity-100 text-fire font-bold">
                      <span>Lunedì</span>
                      <span>Chiuso per Riposo</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold/10 group-hover:border-gold/30 transition-all">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-cream font-display font-bold text-sm lg:text-base tracking-widest uppercase mb-2">Prenotazioni</p>
                    <a href="tel:+393403824158" className="text-gold-light/60 hover:text-gold transition-colors text-base lg:text-xl font-accent italic">
                      +39 340 38 24 158
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-white/5">
              <Button 
                asChild 
                variant="gold" 
                size="lg" 
                className="h-16 px-12 text-sm uppercase tracking-widest font-bold shadow-2xl w-full sm:w-auto"
              >
                <a href="https://maps.google.com/?q=Via+Belvedere+12+Mola+di+Bari+Italy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                  <Navigation className="w-5 h-5" />
                  Calcola Percorso
                </a>
              </Button>
            </div>
          </AnimatedSection>

          {/* Map Side */}
          <AnimatedSection delay={0.4} className="lg:col-span-7 relative">
            <div className="h-full min-h-[400px] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl relative group">
              {/* Decorative Frame */}
              <div className="absolute inset-4 border border-white/5 rounded-[2.5rem] pointer-events-none z-10 opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.8742!2d17.0855!3d41.0564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1347e8d9f7c3c3c3%3A0x1234567890abcdef!2sVia%20Paolo%20VI%2C%2047%2C%2070042%20Mola%20di%20Bari%20BA!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(1.2) brightness(0.9)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Macelleria Braceria Belvedere - Posizione Mappa"
                className="absolute inset-0 w-full h-full grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100"
              />
              
              {/* Overlay for interaction */}
              <div className="absolute top-6 right-6 z-20">
                <div className="bg-noir/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                  <ExternalLink className="text-gold w-6 h-6" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default DoveSiamo;