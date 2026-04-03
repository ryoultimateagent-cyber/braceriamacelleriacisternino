import { Phone, Sparkles, MapPin, Clock, Flame } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Prenota = () => {
  return (
    <section id="prenota" className="min-h-screen py-16 md:py-24 lg:py-28 bg-black relative flex items-center justify-center overflow-hidden">
      {/* Dynamic Particle Background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "100%", x: Math.random() * 100 + "%" }}
            animate={{ y: "-100%" }}
            transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: "linear" }}
            className="absolute w-[2px] h-[100px] bg-gradient-to-t from-primary to-transparent"
          />
        ))}
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-primary text-xs font-black uppercase tracking-[0.4em] block italic">ASSICURA IL TUO POSTO</span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.85] uppercase italic">
                IL GUSTO <br /> <span className="text-primary">AUTENTICO</span>
              </h2>
              <p className="text-white/60 text-xl lg:text-2xl font-medium leading-relaxed max-w-2xl">
                Nel cuore di Putignano, un tempio dedicato alla brace vi aspetta. Lasciatevi avvolgere dal calore del fuoco e dall'accoglienza di chi ama quello che fa dal 1986.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-12 border-t border-white/10">
              <div className="flex flex-col gap-4">
                 <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-primary">
                   <MapPin className="w-8 h-8" />
                 </div>
                 <div>
                    <h4 className="text-primary font-black text-[10px] uppercase tracking-widest mb-2 italic">POSIZIONE</h4>
                    <p className="text-white text-xl font-black italic uppercase tracking-tighter leading-tight">Via G. Verdi 5C, Putignano</p>
                 </div>
              </div>
              <div className="flex flex-col gap-4">
                 <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-primary">
                   <Clock className="w-8 h-8" />
                 </div>
                 <div>
                    <h4 className="text-primary font-black text-[10px] uppercase tracking-widest mb-2 italic">ORARI</h4>
                    <p className="text-white text-xl font-black italic uppercase tracking-tighter leading-tight">Lun - Sab: 08:00–13 | 17–00</p>
                 </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-[4rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
            
            <div className="relative bg-[#050505] p-12 md:p-20 rounded-[4rem] border border-white/10 shadow-2xl flex flex-col items-center text-center">
               <div className="w-24 h-24 rounded-3xl bg-white/5 flex items-center justify-center mb-12 relative">
                  <Phone className="w-10 h-10 text-primary" />
                  <div className="absolute inset-0 rounded-3xl border-2 border-primary animate-ping opacity-20" />
               </div>
               
               <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-8">PRENOTA UN TAVOLO</h3>
               
               <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="tel:+390804058608"
                className="text-4xl md:text-5xl lg:text-6xl font-black text-primary tracking-tighter italic mb-12 hover:drop-shadow-[0_0_20px_rgba(204,0,0,0.4)] transition-all"
               >
                 080 405 8608
               </motion.a>
               
               <div className="flex gap-8 pt-12 border-t border-white/5">
                  <div className="flex flex-col items-center">
                    <Sparkles className="w-6 h-6 text-accent mb-2" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40 italic">SERVIZIO PREMIUM</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Flame className="w-6 h-6 text-primary mb-2" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40 italic">BRACE VIVA</span>
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
