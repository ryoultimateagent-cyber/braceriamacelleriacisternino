import { Phone, Zap, Users, Star, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";

const Prenota = () => {
  return (
    <section id="prenota" className="py-24 lg:py-40 bg-noir relative overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,21,56,0.15)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-fire/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-fire/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Column: Visual & Header */}
            <AnimatedSection>
              <span className="text-fire text-xs md:text-sm font-bold uppercase tracking-[0.4em] mb-4 block">
                Esperienza Esclusiva
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-cream mb-8 leading-tight">
                Assicurati un Tavolo
              </h2>
              <p className="text-xl lg:text-2xl text-gold-light/90 font-accent italic leading-relaxed mb-12">
                "Ti aspettiamo nel cuore di Mola di Bari per un'esperienza che coinvolge tutti i sensi. 
                Il calore del fuoco, l'aroma della carne selezionata e l'accoglienza di una famiglia che 
                da un secolo celebra il gusto autentico."
              </p>
              
              <div className="flex items-center gap-6 mb-12">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-noir bg-charcoal flex items-center justify-center text-xl overflow-hidden shadow-lg">
                      <img 
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} 
                        alt="Customer Avatar" 
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-cream font-bold text-sm lg:text-base">Unisciti ai nostri ospiti</div>
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right Column: Reservation Card */}
            <AnimatedSection delay={0.3}>
              <div className="relative group">
                {/* Decorative glowing background */}
                <div className="absolute -inset-2 bg-gradient-to-r from-fire/20 to-gold/20 rounded-[3rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative p-10 lg:p-16 bg-charcoal/40 backdrop-blur-2xl border border-white/5 rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.5)] text-center group-hover:border-gold/20 transition-all duration-700 overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <CalendarDays className="w-32 h-32 text-gold rotate-12" />
                  </div>
                  
                  <div className="flex justify-center mb-10">
                    <div className="w-20 h-20 bg-fire/10 rounded-full flex items-center justify-center text-fire animate-pulse-glow">
                      <Phone className="w-10 h-10" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-4xl font-display font-bold text-cream mb-6 tracking-wide">
                    Prenota telefonicamente
                  </h3>
                  
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="tel:+393403824158"
                    className="block text-4xl lg:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light mb-12 tracking-tight transition-all"
                  >
                    340 382 4158
                  </motion.a>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-white/5">
                    {[
                      { icon: Zap, label: "Velocità", text: "Conferma Immediata" },
                      { icon: Users, label: "Gruppi", text: "Menu Dedicati" },
                      { icon: Star, label: "Eventi", text: "Date Speciali" },
                    ].map((item, i) => (
                      <div key={i} className="text-center group/item">
                        <div className="flex justify-center mb-3">
                          <item.icon className="w-6 h-6 text-gold/40 group-hover/item:text-gold transition-colors" />
                        </div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-gold-light/40 group-hover/item:text-gold-light/80 transition-colors">
                          {item.text}
                        </div>
                      </div>
                    ))}
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