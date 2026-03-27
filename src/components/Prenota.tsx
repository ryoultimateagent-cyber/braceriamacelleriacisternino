import { Phone, Sparkles, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";

const Prenota = () => {
  return (
    <section id="prenota" className="py-32 lg:py-48 bg-noir relative overflow-hidden">
      {/* Decorative Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <AnimatedSection>
              <span className="text-gold text-xs uppercase tracking-[0.5em] font-bold mb-6 block">Assicura il Tuo Posto</span>
              <h2 className="text-4xl md:text-7xl font-display font-black text-cream uppercase leading-tight mb-10">
                L'ESPERIENZA <br /> <span className="text-ember italic">BELVEDERE</span>
              </h2>
              <p className="text-gold-light/70 text-lg md:text-xl font-accent italic leading-relaxed mb-12">
                Nel cuore di Mola di Bari, un tempio dedicato alla brace vi aspetta. Lasciatevi avvolgere dal calore del fuoco e dall'accoglienza di chi ama quello che fa dal 1980.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
                    <MapPin className="text-gold w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-gold font-bold uppercase tracking-widest text-xs">Posizione</h4>
                    <p className="text-cream text-lg">Via Belvedere 1, Mola di Bari</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
                    <Clock className="text-gold w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-gold font-bold uppercase tracking-widest text-xs">Orari</h4>
                    <p className="text-cream text-lg">Mar - Dom: 19:30 - 00:00</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-ember/30 to-gold/30 blur-3xl opacity-30 animate-pulse-glow" />
              <div className="relative glass p-12 lg:p-16 rounded-[3rem] border border-gold/20 shadow-fire text-center">
                <div className="w-24 h-24 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center mx-auto mb-10">
                  <Phone className="text-gold w-10 h-10 animate-pulse" />
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-display font-black text-cream uppercase mb-8">Prenota il Tuo Tavolo</h3>
                
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="tel:+393403824158"
                  className="block text-4xl lg:text-6xl font-display font-black text-gold mb-12 tracking-tighter"
                >
                  340 382 4158
                </motion.a>
                
                <div className="pt-10 border-t border-white/5 flex justify-center gap-12">
                  <div className="text-center">
                    <Sparkles className="w-5 h-5 text-gold mx-auto mb-2" />
                    <span className="text-[10px] uppercase tracking-widest text-gold-light/60">Servizio Premium</span>
                  </div>
                  <div className="text-center">
                    <Flame className="w-5 h-5 text-ember mx-auto mb-2" />
                    <span className="text-[10px] uppercase tracking-widest text-gold-light/60">Brace Viva</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prenota;