import { Phone, Sparkles, MapPin, Clock, Flame, MessageCircle } from "lucide-react";
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            <div className="absolute -inset-10 bg-primary/10 rounded-[3rem] blur-3xl opacity-20 pointer-events-none" />
            
            {/* WhatsApp Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-black/40 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl flex flex-col items-center text-center group hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 relative group-hover:bg-primary/10 transition-colors">
                <MessageCircle className="w-6 h-6 text-primary" />
                <div className="absolute inset-0 rounded-2xl border border-primary/20 group-hover:border-primary/50 transition-colors" />
              </div>
              
              <h3 className="text-xs font-bold text-white/50 uppercase tracking-[0.2em] mb-4 italic">WHATSAPP</h3>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/390804058608"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-black text-white tracking-tighter italic mb-2 hover:text-primary transition-colors"
              >
                SCRIVICI ORA
              </motion.a>
              <p className="text-[10px] text-white/30 uppercase tracking-widest italic">Risposta rapida</p>
            </motion.div>

            {/* Call Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative bg-black/40 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl flex flex-col items-center text-center group hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 relative group-hover:bg-primary/10 transition-colors">
                <Phone className="w-6 h-6 text-primary" />
                <div className="absolute inset-0 rounded-2xl border border-primary/20 group-hover:border-primary/50 transition-colors" />
              </div>
              
              <h3 className="text-xs font-bold text-white/50 uppercase tracking-[0.2em] mb-4 italic">CHIAMATA</h3>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+390804058608"
                className="text-xl font-black text-white tracking-tighter italic mb-2 hover:text-primary transition-colors"
              >
                080 405 8608
              </motion.a>
              <p className="text-[10px] text-white/30 uppercase tracking-widest italic">Prenota un tavolo</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prenota;