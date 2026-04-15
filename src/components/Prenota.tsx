import { Phone, Sparkles, MapPin, Clock, Flame, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";

const Prenota = () => {
  return (
    <section id="prenota" className="py-24 md:py-32 bg-transparent relative flex items-center justify-center overflow-hidden">
      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-10">
            <SectionHeader 
              subtitle="ASSICURA IL TUO POSTO"
              title="IL GUSTO AUTENTICO"
              align="left"
              className="mb-0"
            />
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white/70 text-base md:text-lg font-medium leading-relaxed max-w-xl italic"
            >
              Nel cuore di Putignano, un tempio dedicato alla brace vi aspetta. Lasciatevi avvolgere dal calore del fuoco e dall'accoglienza di chi ama quello che fa dal 1986.
            </motion.p>
            
            <ScrollReveal variant="fade-up" staggerChildren={0.2} className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10 border-t border-white/5">
              <div className="flex items-start gap-4 group">
                 <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                   <MapPin className="w-6 h-6" />
                 </div>
                 <div>
                    <h4 className="text-white text-[11px] font-medium uppercase tracking-[0.15em] opacity-65 mb-1 italic">POSIZIONE</h4>
                    <p className="text-white text-lg font-black italic uppercase tracking-tighter leading-tight">Via G. Verdi 5C, Putignano</p>
                 </div>
              </div>
              <div className="flex items-start gap-4 group">
                 <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                   <Clock className="w-6 h-6" />
                 </div>
                 <div>
                    <h4 className="text-white text-[11px] font-medium uppercase tracking-[0.15em] opacity-65 mb-1 italic">ORARI</h4>
                    <p className="text-white text-lg font-black italic uppercase tracking-tighter leading-tight">Lun - Sab: 08–13 | 17–00</p>
                 </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            <div className="absolute -inset-20 bg-primary/10 rounded-[3rem] blur-[100px] opacity-20 pointer-events-none animate-pulse" />
            
            {/* WhatsApp Box */}
            <motion.div 
              initial={{ opacity: 0, y: 40, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-black/40 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 shadow-xl flex flex-col items-center text-center group hover:border-primary/30 transition-all duration-500 overflow-hidden fire-glow-card"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-primary/10 transition-colors" />
              
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 relative group-hover:bg-primary/10 transition-colors"
              >
                <MessageCircle className="w-8 h-8 text-primary" />
                <div className="absolute inset-0 rounded-2xl border border-primary/20 group-hover:border-primary/50 transition-colors" />
              </motion.div>
              
              <h3 className="text-[10px] font-bold text-white/65 uppercase tracking-[0.3em] mb-4 italic">WHATSAPP</h3>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/393495319286"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl md:text-3xl font-black text-white tracking-tighter italic mb-4 hover:text-primary transition-colors uppercase leading-none"
              >
                SCRIVICI ORA
              </motion.a>
              <p className="text-[10px] text-white/60 uppercase tracking-[0.2em] italic font-medium">RISPOSTA IMMEDIATA</p>
            </motion.div>

            {/* Call Box */}
            <motion.div 
              initial={{ opacity: 0, y: 40, rotate: 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-black/40 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 shadow-xl flex flex-col items-center text-center group hover:border-primary/30 transition-all duration-500 overflow-hidden fire-glow-card lg:mt-12"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-primary/10 transition-colors" />
              
              <motion.div 
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 relative group-hover:bg-primary/10 transition-colors"
              >
                <Phone className="w-8 h-8 text-primary" />
                <div className="absolute inset-0 rounded-2xl border border-primary/20 group-hover:border-primary/50 transition-colors" />
              </motion.div>
              
              <h3 className="text-[10px] font-bold text-white/65 uppercase tracking-[0.3em] mb-4 italic">CHIAMATA</h3>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+390804058608"
                className="text-2xl md:text-3xl font-black text-white tracking-tighter italic mb-4 hover:text-primary transition-colors leading-none"
              >
                +39 080 405 8608
              </motion.a>
              <p className="text-[10px] text-white/60 uppercase tracking-[0.2em] italic font-medium">PRENOTA UN TAVOLO</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prenota;
