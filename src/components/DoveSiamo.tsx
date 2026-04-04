import { MapPin, Clock, Navigation, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "./SectionHeader";

const DoveSiamo = () => {
  return (
    <section id="dovesiamo" className="py-20 md:py-28 bg-[#f7f4ed] relative overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="space-y-12">
            <SectionHeader 
              subtitle="VIENI A TROVARCI"
              title="Dove Siamo"
              align="left"
              className="mb-0"
            />

            <div className="space-y-8">
              <article className="flex items-start gap-6 group">
                <div className="shrink-0">
                   <div className="w-14 h-14 rounded-[12px] border border-[#eceae4] flex items-center justify-center text-[#1c1c1c] group-hover:bg-[#1c1c1c] group-hover:text-white transition-all duration-300">
                     <MapPin className="w-6 h-6" />
                   </div>
                </div>
                <div className="space-y-1">
                   <h4 className="text-[#5f5f5d] font-medium text-[10px] uppercase tracking-widest">Indirizzo</h4>
                   <p className="text-[#1c1c1c] text-lg font-semibold tracking-tight">Via G. Verdi 5C, Putignano (BA)</p>
                </div>
              </article>

              <article className="flex items-start gap-6 group">
                <div className="shrink-0">
                   <div className="w-14 h-14 rounded-[12px] border border-[#eceae4] flex items-center justify-center text-[#1c1c1c] group-hover:bg-[#1c1c1c] group-hover:text-white transition-all duration-300">
                     <Clock className="w-6 h-6" />
                   </div>
                </div>
                <div className="space-y-1">
                   <h4 className="text-[#5f5f5d] font-medium text-[10px] uppercase tracking-widest">Orari</h4>
                   <div className="text-[#1c1c1c] text-lg font-semibold tracking-tight">
                     Lun - Sab: 08–13 | 17–00<br />
                     <span className="text-[#1c1c1c]/40 text-base">Mar e Dom: CHIUSO</span>
                   </div>
                </div>
              </article>
            </div>

            <div className="pt-8 border-t border-[#eceae4]">
               <Button asChild size="lg" className="group">
                 <a href="https://maps.google.com/?q=Via+Giuseppe+Verdi+5C+Putignano+Italy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                   <Navigation className="w-4 h-4" />
                   <span>Calcola percorso</span>
                 </a>
               </Button>
            </div>
          </div>

          <div className="relative group">
            <div className="aspect-square lg:aspect-video rounded-[16px] overflow-hidden border border-[#eceae4] shadow-sm relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.0!2d17.1234!3d40.8491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1347d9c0e2a3c3c3%3A0x1234567890abcdef!2sVia%20Giuseppe%20Verdi%205C%2C%2070017%20Putignano%20BA!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Mappa Belvedere"
                className="absolute inset-0 w-full h-full grayscale-[0.2] contrast-[1.1] transition-all duration-1000 group-hover:grayscale-0"
              />
              
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-[8px] border border-white/20">
                  <ExternalLink className="text-white w-5 h-5" />
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