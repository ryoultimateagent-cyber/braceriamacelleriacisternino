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
    <section id="brace" className="section-container py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center mb-24">
        <AnimatedSection>
          <span className="text-primary text-xs font-bold uppercase tracking-[0.4em] mb-4 block">SELEZIONE DI QUALITÀ</span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-foreground tracking-tight leading-none uppercase">
            LE NOSTRE <br /> <span className="text-primary italic">SPECIALITÀ</span>
          </h2>
          <div className="h-1.5 w-24 bg-primary mx-auto mt-8 rounded-full" />
        </AnimatedSection>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-[1400px] mx-auto">
        {tagli.map((taglio, i) => (
          <AnimatedSection key={i} delay={i * 0.1} animation="fade-up" className="h-full">
            <div className="group relative aspect-[4/5] md:h-[450px] w-full overflow-hidden rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 bg-white">
              {/* Image Background */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src={i === 0 ? "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200" : i === 1 ? "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=1200" : "https://images.unsplash.com/photo-1529692236671-f1f6e9481bfa?auto=format&fit=crop&q=80&w=1200"} 
                  alt={taglio.name} 
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end">
                <div className="mb-6">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-[10px] font-black tracking-widest uppercase">
                    {taglio.category}
                  </span>
                </div>
                
                <h3 className="text-3xl font-black text-white uppercase mb-4 leading-tight tracking-tight">
                  {taglio.name}
                </h3>
                
                <p className="text-white/70 leading-relaxed text-base mb-8 max-h-0 group-hover:max-h-32 overflow-hidden transition-all duration-500 ease-in-out">
                  {taglio.desc}
                </p>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-white/50 text-[10px] font-bold uppercase tracking-[0.3em]">QUALITÀ SUPERIORE</span>
                  <ArrowRight className="w-6 h-6 text-primary -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default Tagli;