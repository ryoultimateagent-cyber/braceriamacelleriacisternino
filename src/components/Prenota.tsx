import { Phone, Sparkles, MapPin, Clock, Flame } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const Prenota = () => {
  return (
    <section id="prenota" className="py-20 md:py-28 bg-[#f7f4ed] relative flex items-center justify-center overflow-hidden">
      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-10">
            <SectionHeader 
              subtitle="ASSICURA IL TUO POSTO"
              title="Il Gusto Autentico"
              align="left"
              className="mb-0"
            />
            
            <p className="text-[#5f5f5d] text-lg font-normal leading-relaxed max-w-xl">
              Nel cuore di Putignano, un tempio dedicato alla brace vi aspetta. Lasciatevi avvolgere dal calore del fuoco e dall'accoglienza di chi ama quello che fa dal 1986.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10 border-t border-[#eceae4]">
              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-[12px] border border-[#eceae4] flex items-center justify-center text-[#1c1c1c] shrink-0">
                   <MapPin className="w-5 h-5" />
                 </div>
                 <div>
                    <h4 className="text-[#5f5f5d] font-medium text-[10px] uppercase tracking-widest mb-1">Posizione</h4>
                    <p className="text-[#1c1c1c] text-base font-semibold tracking-tight">Via G. Verdi 5C, Putignano</p>
                 </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-[12px] border border-[#eceae4] flex items-center justify-center text-[#1c1c1c] shrink-0">
                   <Clock className="w-5 h-5" />
                 </div>
                 <div>
                    <h4 className="text-[#5f5f5d] font-medium text-[10px] uppercase tracking-widest mb-1">Orari</h4>
                    <p className="text-[#1c1c1c] text-base font-semibold tracking-tight">Lun - Sab: 08–13 | 17–00</p>
                 </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white p-10 md:p-12 rounded-[16px] border border-[#eceae4] shadow-sm flex flex-col items-center text-center">
               <div className="w-16 h-16 rounded-[12px] border border-[#eceae4] flex items-center justify-center mb-8">
                  <Phone className="w-7 h-7 text-[#1c1c1c]" />
               </div>
               
               <h3 className="text-xl font-semibold text-[#1c1c1c] mb-6 tracking-tight">CHIAMA ORA</h3>
               
               <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="tel:+390804058608"
                className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1c1c1c] tracking-[-0.03em] mb-10 transition-opacity hover:opacity-80"
               >
                 080 405 8608
               </motion.a>
               
               <div className="flex gap-8 pt-10 border-t border-[#eceae4] w-full justify-center">
                  <div className="flex flex-col items-center">
                    <Sparkles className="w-5 h-5 text-[#1c1c1c]/20 mb-2" />
                    <span className="text-[10px] font-medium uppercase tracking-widest text-[#5f5f5d]">PREMIUM</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Flame className="w-5 h-5 text-[#1c1c1c]/20 mb-2" />
                    <span className="text-[10px] font-medium uppercase tracking-widest text-[#5f5f5d]">BRACE</span>
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