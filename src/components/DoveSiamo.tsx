import { MapPin, Clock, Phone, Navigation, ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";

const DoveSiamo = () => {
  return (
    <section id="dovesiamo" className="section-container py-24 md:py-32 bg-transparent relative overflow-hidden">
      <div className="relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <AnimatedSection>
            <span className="text-primary text-xs font-bold uppercase tracking-[0.4em] mb-4 block">VIENI A TROVARCI</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-none uppercase">
              DOVE <br /> <span className="text-primary italic">SIAMO</span>
            </h2>
            <div className="h-1.5 w-24 bg-primary mx-auto mt-8 rounded-full shadow-[0_0_15px_rgba(255,61,0,0.5)]" />
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
          <AnimatedSection className="lg:col-span-5 relative order-2 lg:order-1">
             <div className="space-y-10">
                <article className="flex items-start gap-8 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-white/10 group-hover:border-primary/30 transition-all duration-300">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-primary font-bold text-xs uppercase tracking-widest mb-2">INDIRIZZO</h4>
                    <p className="text-white text-xl md:text-2xl font-bold tracking-tight leading-relaxed">
                      Via Giuseppe Verdi 5C<br />
                      70017 Putignano (BA)
                    </p>
                  </div>
                </article>

                <article className="flex items-start gap-8 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-white/10 group-hover:border-primary/30 transition-all duration-300">
                    <Clock className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-primary font-bold text-xs uppercase tracking-widest mb-2">ORARI</h4>
                    <div className="text-white text-xl md:text-2xl font-bold tracking-tight leading-relaxed">
                      Lun - Sab: 08:00–13:00<br />
                      Sera: 17:00–00:00<br />
                      <span className="text-primary">Mar e Dom: CHIUSO</span>
                    </div>
                  </div>
                </article>

                <article className="flex items-start gap-8 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-white/10 group-hover:border-primary/30 transition-all duration-300">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-primary font-bold text-xs uppercase tracking-widest mb-2">CONTATTI</h4>
                    <a href="tel:+390804058608" className="text-white hover:text-primary transition-colors text-xl md:text-2xl font-bold tracking-tight focus-visible:underline outline-none" aria-label="Chiama al numero +39 080 405 8608">
                      +39 080 405 8608
                    </a>
                  </div>
                </article>
             </div>

             <div className="mt-16 pt-12 border-t border-white/10">
                <Button 
                  asChild 
                  size="lg"
                  className="h-16 px-10 bg-primary hover:bg-primary/90 text-white font-black rounded-2xl shadow-xl shadow-primary/20 transition-all active:scale-95"
                >
                  <a href="https://maps.google.com/?q=Via+Giuseppe+Verdi+5C+Putignano+Italy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                    <Navigation className="w-5 h-5" />
                    <span>CALCOLA PERCORSO</span>
                  </a>
                </Button>
             </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="lg:col-span-7 relative order-1 lg:order-2">
            <div className="aspect-square lg:aspect-video rounded-[2.5rem] overflow-hidden border-4 border-white/10 shadow-2xl relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.0!2d17.1234!3d40.8491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1347d9c0e2a3c3c3%3A0x1234567890abcdef!2sVia%20Giuseppe%20Verdi%205C%2C%2070017%20Putignano%20BA!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Mappa Belvedere"
                className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-1000 opacity-60 hover:opacity-100"
              />
              <div className="absolute top-8 right-8 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20">
                  <ExternalLink className="text-primary w-8 h-8" />
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