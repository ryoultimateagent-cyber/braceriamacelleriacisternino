import { Phone, Sparkles, MapPin, Clock, Flame } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const Prenota = () => {
  return (
    <section id="prenota" className="py-16 md:py-24 bg-transparent relative flex items-center justify-center overflow-hidden">
      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <SectionHeader 
              subtitle="ASSICURA IL TUO POSTO"
              title="IL GUSTO AUTENTICO"
              align="left"
              className="mb-0"
            />
            
            <p className="text-white/50 text-sm md:text-base font-medium leading-relaxed max-w-xl italic">
              Nel cuore di Putignano, un tempio dedicato alla brace vi aspetta. Lasciatevi avvolgere dal calore del fuoco e dall'accoglienza di chi ama quello che fa dal 1986.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-white/5">
              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary shrink-0">
                   <MapPin className="w-6 h-6" />
                 </div>
                 <div>
                    <h4 className="text-white text-[11px] font-medium uppercase tracking-[0.15em] opacity-50 mb-1 italic">POSIZIONE</h4>
                    <p className="text-white text-base font-normal italic uppercase tracking-tighter leading-tight">Via G. Verdi 5C, Putignano</p>
                 </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary shrink-0">
                   <Clock className="w-6 h-6" />
                 </div>
                 <div>
                    <h4 className="text-white text-[11px] font-medium uppercase tracking-[0.15em] opacity-50 mb-1 italic">ORARI</h4>
                    <p className="text-white text-base font-normal italic uppercase tracking-tighter leading-tight">Lun - Sab: 08–13 | 17–00</p>
                 </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/10 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
            
            <div className="relative bg-black/40 backdrop-blur-md p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col items-center text-center">
               <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 relative">
                  <Phone className="w-7 h-7 text-primary" />
                  <div className="absolute inset-0 rounded-2xl border-2 border-primary animate-pulse opacity-20" />
               </div>
               
               <h3 className="text-[17px] font-semibold text-white italic uppercase tracking-tighter mb-6">CHIAMA ORA</h3>
               
               <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="tel:+390804058608"
                className="text-3xl md:text-4xl lg:text-5xl font-black text-primary tracking-tighter italic mb-8 hover:drop-shadow-[0_0_15px_rgba(204,0,0,0.3)] transition-all"
               >
                 080 405 8608
               </motion.a>
               
               <div className="flex gap-6 pt-8 border-t border-white/5">
                  <div className="flex flex-col items-center">
                    <Sparkles className="w-5 h-5 text-primary/40 mb-1.5" />
                    <span className="text-[11px] font-normal uppercase tracking-widest text-white/50 italic">PREMIUM</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Flame className="w-5 h-5 text-primary/40 mb-1.5" />
                    <span className="text-[11px] font-normal uppercase tracking-widest text-white/50 italic">BRACE</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prenota;