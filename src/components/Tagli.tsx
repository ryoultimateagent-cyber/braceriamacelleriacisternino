import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const tagli = [
  {
    name: "Fiorentina Premium",
    category: "Cottura alla Brace",
    desc: "T-Bone selezionata (~1kg), frollata minimun 30 giorni. La massima espressione della carne bovina.",
    emoji: "🥩"
  },
  {
    name: "Costata di Scottona",
    category: "Selezione Puglia",
    desc: "400/500g di pura eccellenza locale. Marezzatura perfetta che garantisce tenerezza.",
    emoji: "🔥"
  },
  {
    name: "Tartare Signature",
    category: "Specialità Cruda",
    desc: "Punta d'anca battuta al coltello al momento. Condita con olio EVO pugliese e sale di Maldon.",
    emoji: "🔪"
  },
];

const Tagli = () => {
  return (
    <section id="brace" className="py-32 lg:py-56 bg-noir relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-32 lg:mb-48">
          <AnimatedSection>
            <span className="text-gold text-xs uppercase tracking-[0.6em] font-bold mb-8 block">Selezione d'Elite</span>
            <h2 className="text-5xl md:text-8xl font-display font-black text-cream uppercase leading-[0.9]">
              I NOSTRI <br /> <span className="text-gold italic font-light">TAGLI SCELTI</span>
            </h2>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1600px] mx-auto">
          {tagli.map((taglio, i) => (
            <AnimatedSection key={i} delay={i * 0.15} animation="fade-up" className="h-full">
              <div className="group relative h-[600px] w-full overflow-hidden border border-gold/10">
                <div className="absolute inset-0 bg-gold/5 z-0" />
                
                {/* Image Background */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={i === 0 ? "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200" : i === 1 ? "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=1200" : "https://images.unsplash.com/photo-1529692236671-f1f6e9481bfa?auto=format&fit=crop&q=80&w=1200"} 
                    alt={taglio.name} 
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/60 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 z-10 p-12 flex flex-col justify-end">
                  <div className="mb-6 flex items-center gap-4">
                    <span className="text-gold text-[10px] uppercase font-black tracking-[0.3em] px-4 py-2 border border-gold/30 rounded-full">
                      {taglio.category}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-display font-black text-cream uppercase mb-4 leading-none tracking-tighter">
                    {taglio.name}
                  </h3>
                  
                  <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                    <p className="text-cream/60 leading-relaxed text-sm mb-8 font-accent italic">
                      {taglio.desc}
                    </p>
                  </div>

                  <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                    <span className="text-gold text-[10px] font-black uppercase tracking-[0.4em]">Qualità Superiore</span>
                    <ArrowRight className="w-5 h-5 text-gold -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" />
                  </div>
                </div>
                
                {/* Decorative Frame */}
                <div className="absolute top-6 left-6 right-6 bottom-6 border border-white/5 pointer-events-none group-hover:border-gold/20 transition-colors duration-500" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tagli;