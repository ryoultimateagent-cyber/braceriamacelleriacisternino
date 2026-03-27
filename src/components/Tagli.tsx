import { motion } from "framer-motion";
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
    <section id="brace" className="py-32 lg:py-48 bg-[#0A0A0A] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 lg:mb-40">
          <AnimatedSection>
            <span className="text-gold text-xs uppercase tracking-[0.5em] font-bold mb-6 block">Materia Prima d'Eccellenza</span>
            <h2 className="text-4xl md:text-7xl font-display font-black text-cream uppercase leading-tight">
              I NOSTRI <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-ember to-gold italic">TAGLI SCELTI</span>
            </h2>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {tagli.map((taglio, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="h-full">
              <motion.div
                whileHover={{ y: -15 }}
                className="group relative bg-[#111111] border border-gold/10 rounded-[2.5rem] overflow-hidden hover:border-gold/40 transition-all duration-700 shadow-2xl h-full flex flex-col"
              >
                <div className="h-64 bg-noir flex items-center justify-center text-7xl relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity bg-[url('https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center" />
                  <span className="relative z-10 filter drop-shadow-2xl group-hover:scale-110 transition-transform duration-700">{taglio.emoji}</span>
                  <div className="absolute top-6 left-6 z-20">
                    <span className="bg-noir/80 border border-gold/40 text-gold text-[10px] uppercase font-black tracking-[0.3em] px-4 py-2 rounded-full">
                      {taglio.category}
                    </span>
                  </div>
                </div>

                <div className="p-10 lg:p-12 flex-1 flex flex-col">
                  <h3 className="text-2xl lg:text-3xl font-display font-black text-cream uppercase mb-4 group-hover:text-gold transition-colors">
                    {taglio.name}
                  </h3>
                  <p className="text-gold-light/60 leading-relaxed text-sm lg:text-base mb-8">
                    {taglio.desc}
                  </p>
                  <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                    <span className="text-gold text-[10px] font-black uppercase tracking-[0.4em]">Qualità Premium</span>
                    <div className="w-10 h-px bg-gold/20" />
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tagli;