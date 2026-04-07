import { MapPin, Clock, Navigation, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "./SectionHeader";
import logoBelvedere from "@/assets/logo-belvedere.png";

const DoveSiamo = () => {
  return (
    <section id="dovesiamo" className="py-4 md:py-8 bg-transparent relative overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="space-y-12">
            <div className="flex items-center gap-5">
              <img src={logoBelvedere} alt="Logo Macelleria Belvedere" className="h-16 w-auto object-contain brightness-0 invert" />
              <SectionHeader 
                subtitle="VIENI A TROVARCI"
                title="DOVE SIAMO"
                align="left"
                className="mb-0"
              />
            </div>

            <div className="space-y-8">
              <article className="flex items-start gap-6 group">
                <div className="shrink-0">
                   <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 border border-white/5">
                     <MapPin className="w-7 h-7" />
                   </div>
                </div>
                <div className="space-y-1">
                   <h4 className="text-white text-[11px] font-medium uppercase tracking-[0.15em] opacity-50 italic">INDIRIZZO</h4>
                   <p className="text-white text-[15px] font-normal italic uppercase tracking-tighter leading-tight">Via G. Verdi 5C, Putignano (BA)</p>
                </div>
              </article>

              <article className="flex items-start gap-6 group">
                <div className="shrink-0">
                   <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 border border-white/5">
                     <Clock className="w-7 h-7" />
                   </div>
                </div>
                <div className="space-y-1">
                   <h4 className="text-white text-[11px] font-medium uppercase tracking-[0.15em] opacity-50 italic">ORARI</h4>
                   <div className="text-white text-[15px] font-normal italic uppercase tracking-tighter leading-tight">
                     Lun - Sab: 08–13 | 17–00<br />
                     <span className="text-primary/50 text-[15px]">Mar e Dom: CHIUSO</span>
                   </div>
                </div>
              </article>
            </div>

            <div className="pt-8 border-t border-white/5">
               <Button asChild size="lg" className="h-14 px-10 bg-primary hover:bg-primary/90 text-white font-black italic uppercase tracking-tighter rounded-full shadow-lg text-sm">
                 <a href="https://maps.google.com/?q=Via+Giuseppe+Verdi+5C+Putignano+Italy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                   <Navigation className="w-5 h-5" />
                   CALCOLA PERCORSO
                 </a>
               </Button>
            </div>
          </div>

          <div className="relative group">
            <div className="aspect-square lg:aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl relative">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1505.518608246875!2d17.1243765!3d40.849123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1347d105dfd5c80b%3A0x7d2870196238b14e!2sMacelleria%20Belvedere!5e0!3m2!1sit!2sit!4v1714578000000!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Mappa Belvedere"
                className="absolute inset-0 w-full h-full grayscale brightness-[0.3] contrast-[1.2] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
              
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                  <ExternalLink className="text-primary w-6 h-6" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DoveSiamo;