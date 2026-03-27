import { MapPin, Clock, Phone, Mail, Navigation, ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";

const DoveSiamo = () => {
  return (
    <section id="dovesiamo" className="py-32 lg:py-48 bg-[#0A0A0A] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 lg:mb-40">
          <AnimatedSection>
            <span className="text-gold text-xs uppercase tracking-[0.5em] font-bold mb-6 block">Posizione Privilegiata</span>
            <h2 className="text-4xl md:text-7xl font-display font-black text-cream uppercase leading-tight">
              DOVE <br /> <span className="text-ember italic">TROVARCI</span>
            </h2>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center max-w-7xl mx-auto">
          <AnimatedSection className="lg:col-span-5 relative order-2 lg:order-1">
             <div className="space-y-12">
                <div className="flex items-start gap-8 group">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-white/5 border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-500">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-gold font-display font-black text-sm uppercase tracking-widest mb-2">Indirizzo</h4>
                    <p className="text-gold-light/70 text-lg lg:text-2xl font-accent italic leading-relaxed">
                      Via Belvedere, 12<br />
                      70042 Mola di Bari (BA)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-8 group">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-white/5 border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-500">
                    <Clock className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-gold font-display font-black text-sm uppercase tracking-widest mb-2">Orari</h4>
                    <div className="text-gold-light/70 text-lg lg:text-2xl font-accent italic leading-relaxed">
                      Mar - Dom: 19:30 - 00:00<br />
                      <span className="text-ember font-bold">Lunedì: Chiuso</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-8 group">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-white/5 border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-500">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-gold font-display font-black text-sm uppercase tracking-widest mb-2">Contatti</h4>
                    <a href="tel:+393403824158" className="text-gold-light/70 hover:text-gold transition-colors text-lg lg:text-2xl font-accent italic">
                      +39 340 38 24 158
                    </a>
                  </div>
                </div>
             </div>

             <div className="mt-16 pt-12 border-t border-white/5">
                <Button 
                  asChild 
                  className="h-16 px-12 bg-gold hover:bg-gold-satin text-noir uppercase tracking-[0.3em] font-black rounded-none shadow-fire transition-all duration-500"
                >
                  <a href="https://maps.google.com/?q=Via+Belvedere+12+Mola+di+Bari+Italy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                    <Navigation className="w-5 h-5" />
                    Calcola Percorso
                  </a>
                </Button>
             </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="lg:col-span-7 relative order-1 lg:order-2">
            <div className="h-full min-h-[500px] rounded-[3rem] overflow-hidden border border-gold/10 shadow-2xl relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.8742!2d17.0855!3d41.0564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1347e8d9f7c3c3c3%3A0x1234567890abcdef!2sVia%20Paolo%20VI%2C%2047%2C%2070042%20Mola%20di%20Bari%20BA!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(1.2) brightness(0.9)" }}
                allowFullScreen
                loading="lazy"
                title="Mappa Belvedere"
                className="absolute inset-0 w-full h-full grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100"
              />
              <div className="absolute top-8 right-8 z-20">
                <div className="bg-noir/80 backdrop-blur-md p-6 rounded-2xl border border-gold/20 shadow-xl opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-500">
                  <ExternalLink className="text-gold w-8 h-8" />
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