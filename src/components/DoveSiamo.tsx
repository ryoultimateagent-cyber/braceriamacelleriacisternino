import { MapPin, Clock, Phone, Navigation, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const DoveSiamo = () => {
  return (
    <section id="dovesiamo" className="py-16 md:py-24 lg:py-28 bg-black relative overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-24 items-center">
          
          <div className="space-y-16">
            <div className="space-y-6">
              <span className="text-primary text-xs font-black uppercase tracking-[0.4em] block italic">VIENI A TROVARCI</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.9] uppercase italic">
                DOVE <br /> <span className="text-primary">SIAMO</span>
              </h2>
            </div>

            <div className="space-y-12">
              <article className="flex items-start gap-10 group">
                <div className="relative">
                   <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl border border-white/10">
                     <MapPin className="w-10 h-10" />
                   </div>
                   <div className="absolute -inset-2 border-2 border-primary/20 rounded-3xl animate-pulse" />
                </div>
                <div className="space-y-2">
                   <h4 className="text-primary font-black text-xs uppercase tracking-widest italic">INDIRIZZO</h4>
                   <p className="text-white text-3xl font-black italic uppercase tracking-tighter leading-none">Via G. Verdi 5C, Putignano (BA)</p>
                </div>
              </article>

              <article className="flex items-start gap-10 group">
                <div className="relative">
                   <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl border border-white/10">
                     <Clock className="w-10 h-10" />
                   </div>
                </div>
                <div className="space-y-2">
                   <h4 className="text-primary font-black text-xs uppercase tracking-widest italic">ORARI</h4>
                   <div className="text-white text-3xl font-black italic uppercase tracking-tighter leading-tight">
                     Lun - Sab: 08–13 | 17–00<br />
                     <span className="text-primary/50 text-2xl">Mar e Dom: CHIUSO</span>
                   </div>
                </div>
              </article>
            </div>

            <div className="pt-12 border-t border-white/10">
               <Button asChild size="lg" className="h-20 px-12 bg-primary hover:bg-primary/90 text-white font-black italic uppercase tracking-tighter rounded-[2rem] shadow-[0_20px_50px_rgba(204,0,0,0.3)] text-xl">
                 <a href="https://maps.google.com/?q=Via+Giuseppe+Verdi+5C+Putignano+Italy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                   <Navigation className="w-6 h-6" />
                   CALCOLA PERCORSO
                 </a>
               </Button>
            </div>
          </div>

          <div className="relative group">
            <div className="aspect-square lg:aspect-[4/3] rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.0!2d17.1234!3d40.8491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1347d9c0e2a3c3c3%3A0x1234567890abcdef!2sVia%20Giuseppe%20Verdi%205C%2C%2070017%20Putignano%20BA!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Mappa Belvedere"
                className="absolute inset-0 w-full h-full grayscale brightness-50 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              
              <div className="absolute top-12 right-12 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                <div className="bg-white/10 backdrop-blur-xl p-8 rounded-[2rem] border border-white/20">
                  <ExternalLink className="text-primary w-10 h-10" />
                </div>
              </div>
            </div>
            
            {/* Background Decorative Element */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default DoveSiamo;
