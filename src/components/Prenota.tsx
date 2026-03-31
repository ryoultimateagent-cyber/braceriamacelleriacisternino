import { Phone, Sparkles, MapPin, Clock, Flame } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";

    <section id="prenota" className="section-container py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <AnimatedSection className="space-y-10">
            <div className="space-y-6">
              <span className="text-primary text-xs font-bold uppercase tracking-[0.4em]">ASSICURA IL TUO POSTO</span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-foreground tracking-tight leading-none uppercase">
                IL GUSTO DELLA <br /> <span className="text-primary italic">TRADIZIONE</span>
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                Nel cuore di Putignano, un tempio dedicato alla brace vi aspetta. Lasciatevi avvolgere dal calore del fuoco e dall'accoglienza di chi ama quello che fa dal 1986.
              </p>
            </div>
            
            <div className="space-y-8 pt-8 border-t border-foreground/5">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-primary font-bold text-[10px] uppercase tracking-widest mb-1">POSIZIONE</h4>
                  <p className="text-foreground text-lg font-bold">Via Giuseppe Verdi 5C, Putignano (BA)</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary">
                  <Clock className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-primary font-bold text-[10px] uppercase tracking-widest mb-1">ORARI</h4>
                  <p className="text-foreground text-lg font-bold">Lun - Sab: 08:00–13:00 | 17:00–00:00</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="relative group">
            <div className="relative bg-secondary p-12 md:p-16 lg:p-20 rounded-[3rem] border border-foreground/5 shadow-2xl text-center overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <Flame className="w-48 h-48 text-primary" />
              </div>
              
              <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-xl shadow-black/5 group-hover:scale-110 transition-transform duration-500">
                <Phone className="text-primary w-10 h-10 animate-pulse" />
              </div>
              
              <h3 className="text-3xl font-black text-foreground uppercase mb-6 tracking-tight">PRENOTA UN TAVOLO</h3>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="tel:+390804058608"
                className="block text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-12 tracking-tighter"
              >
                080 405 8608
              </motion.a>
              
              <div className="pt-10 border-t border-foreground/5 flex justify-center gap-12">
                <div className="text-center">
                  <Sparkles className="w-6 h-6 text-accent mx-auto mb-3" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">SERVIZIO PREMIUM</span>
                </div>
                <div className="text-center">
                  <Flame className="w-6 h-6 text-primary mx-auto mb-3" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">BRACE VIVA</span>
                </div>
              </div>
            </div>

            {/* Abstract Shape */}
            <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 border-8 border-primary/5 rounded-full" />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Prenota;