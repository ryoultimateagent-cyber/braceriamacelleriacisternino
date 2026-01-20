import { MapPin, Clock, Phone, Mail } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const DoveSiamo = () => {
  return (
    <section className="py-16 sm:py-24 bg-charcoal relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-12 sm:mb-20">
          <span className="font-accent text-fire italic tracking-[4px] uppercase text-xs sm:text-sm">
            Vieni a Trovarci
          </span>
          <h2 className="font-elegant text-3xl sm:text-5xl lg:text-6xl font-bold text-cream mt-4 relative inline-block section-divider">
            Dove Siamo
          </h2>
        </AnimatedSection>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start max-w-6xl mx-auto">
          <AnimatedSection delay={0.2}>
            <h3 className="font-elegant text-2xl sm:text-3xl font-semibold text-fire mb-6">
              Il Nostro Indirizzo
            </h3>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-gold mt-1 flex-shrink-0" />
              <div>
                  <p className="text-cream font-semibold mb-1">Indirizzo</p>
                  <p className="text-gold-light text-sm sm:text-base">
                    Via Paolo VI, 47/49<br />
                    70042 Mola di Bari (BA)<br />
                    Puglia, Italia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-cream font-semibold mb-1">Orari</p>
                  <p className="text-gold-light text-sm sm:text-base">
                    Martedì - Domenica<br />
                    12:00 - 15:00 / 19:00 - 23:00<br />
                    <span className="text-fire font-semibold">Lunedì: Chiuso</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-cream font-semibold mb-1">Telefono</p>
                  <a 
                    href="tel:+393403824158"
                    className="text-gold-light hover:text-fire transition-colors text-sm sm:text-base"
                  >
                    +39 340 38 24 158
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-cream font-semibold mb-1">Email</p>
                  <a 
                    href="mailto:info@braceriacisternino.it"
                    className="text-gold-light hover:text-fire transition-colors text-sm sm:text-base break-all"
                  >
                    info@braceriacisternino.it
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Via+Paolo+VI+47+Mola+di+Bari+Italy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 sm:px-10 py-4 sm:py-5 mt-6 sm:mt-8 bg-gradient-to-r from-fire to-fire-dark text-cream font-bold uppercase tracking-wider text-xs sm:text-sm shadow-[0_10px_30px_rgba(139,21,56,0.3)] hover:translate-y-[-3px] hover:shadow-[0_15px_40px_rgba(139,21,56,0.5)] transition-all duration-400"
            >
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              Apri in Google Maps
            </a>
          </AnimatedSection>

          {/* Google Maps Embed */}
          <AnimatedSection delay={0.4}>
            <div className="h-[350px] sm:h-[450px] lg:h-[500px] rounded-none overflow-hidden border border-fire/30 hover:border-fire transition-colors duration-400">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.8742!2d17.0855!3d41.0564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1347e8d9f7c3c3c3%3A0x1234567890abcdef!2sVia%20Paolo%20VI%2C%2047%2C%2070042%20Mola%20di%20Bari%20BA!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(80%) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Braceria Macelleria Cisternino - Posizione"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default DoveSiamo;
