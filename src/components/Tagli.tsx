import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const tagli = [
  {
    name: "Fiorentina alla brace",
    category: "Specialità",
    desc: "Taglio di carne bovina pregiata, cotta sulla brace per esaltarne il sapore autentico.",
    emoji: "🥩"
  },
  {
    name: "Spiedini artigianali",
    category: "Fatti a mano",
    desc: "Creati quotidianamente con selezioni di carni miste e aromi della nostra terra.",
    emoji: "🔥"
  },
  {
    name: "Polpette fatte in casa",
    category: "Tradizione",
    desc: "La ricetta di famiglia, preparata con carni scelte e ingredienti freschi.",
    emoji: "👵"
  },
  {
    name: "Salsicce artigianali",
    category: "Produzione propria",
    desc: "Insaccate da noi con ricetta tradizionale, ideali per la brace o la padella.",
    emoji: "🌭"
  },
  {
    name: "Hamburger su misura",
    category: "Personalizzati",
    desc: "Il tuo hamburger ideale, creato al momento con i tagli che preferisci.",
    emoji: "🍔"
  }
];

const Tagli = () => {
  return (
    <section id="brace" className="section-spacing bg-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ember/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-32">
          <AnimatedSection>
            <span className="text-ember text-xs uppercase tracking-[0.6em] font-bold mb-6 block">Selezione di Qualità</span>
            <h2 className="text-3xl md:text-6xl lg:text-7xl font-display font-black text-foreground uppercase leading-[0.9]">
              LE NOSTRE <br /> <span className="text-ember italic font-light">SPECIALITÀ</span>
            </h2>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1600px] mx-auto">
          {tagli.map((taglio, i) => (
            <AnimatedSection key={i} delay={i * 0.1} animation="fade-up" className="h-full">
              <div className="group relative h-[380px] md:h-[450px] w-full overflow-hidden border border-ember/10 rounded-xl shadow-md">
                <div className="absolute inset-0 bg-ember/5 z-0" />
                
                {/* Image Background */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={i === 0 ? "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200" : i === 1 ? "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=1200" : "https://images.unsplash.com/photo-1529692236671-f1f6e9481bfa?auto=format&fit=crop&q=80&w=1200"} 
                    alt={taglio.name} 
                    loading="lazy"
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/60 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 z-10 p-6 md:p-10 lg:p-12 flex flex-col justify-end">
                  <div className="mb-4 md:mb-6 flex items-center gap-4">
                    <span className="text-gold text-[9px] md:text-[10px] uppercase font-black tracking-[0.3em] px-3 md:px-4 py-1.5 md:py-2 border border-gold/30 rounded-full">
                      {taglio.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-black text-cream uppercase mb-4 leading-none tracking-tighter">
                    {taglio.name}
                  </h3>
                  
                  <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                    <p className="text-cream/70 leading-relaxed text-sm mb-6 md:mb-8 font-accent italic">
                      {taglio.desc}
                    </p>
                  </div>

                  <div className="pt-4 md:pt-8 border-t border-white/10 flex items-center justify-between">
                    <span className="text-gold text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em]">Qualità Superiore</span>
                    <ArrowRight className="w-5 h-5 text-gold -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                </div>
                
                {/* Decorative Frame */}
                <div className="absolute top-4 left-4 right-4 bottom-4 md:top-6 md:left-6 md:right-6 md:bottom-6 border border-white/5 pointer-events-none group-hover:border-gold/20 transition-colors duration-300 rounded-lg" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tagli;