import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";
import { Badge } from "@/components/ui/badge";

const tagli = [
  {
    name: "Fiorentina Premium",
    category: "Cottura alla Brace",
    desc: "T-Bone selezionata (~1kg), frollata minimun 30 giorni. La massima espressione della carne bovina, cotta rigorosamente al sangue su brace di quercia.",
  },
  {
    name: "Costata di Scottona",
    category: "Selezione Puglia",
    desc: "400/500g di pura eccellenza locale. Marezzatura intramuscolare perfetta che garantisce una tenerezza e un sapore ineguagliabili.",
  },
  {
    name: "Tartare Signature",
    category: "Specialità Cruda",
    desc: "Punta d'anca battuta al coltello al momento. Condita con olio EVO pugliese, sale di Maldon e il nostro tocco segreto dello chef.",
  },
  {
    name: "Tagliata di Angus",
    category: "Internazionale",
    desc: "Scottona ~300g servita su letto di rucola selvatica e scaglie di Grana Padano DOP 24 mesi. Un classico intramontabile.",
  },
  {
    name: "Ribs BBQ Slow Cook",
    category: "Affumicatura",
    desc: "Costine di maiale cotte a bassa temperatura per 12 ore e rifinite sulla brace con la nostra salsa BBQ artigianale.",
  },
  {
    name: "Bombette Tradizionali",
    category: "Street Food Gourmet",
    desc: "Le autentiche bombette molesi: involtini di capocollo ripieni di formaggio canestrato e spezie, cotti fino a doratura perfetta.",
  },
];

const Tagli = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const bgY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section 
      id="brace" 
      ref={ref} 
      className="py-24 lg:py-40 bg-charcoal relative overflow-hidden"
      aria-label="I nostri tagli di carne"
    >
      {/* Background Parallax Layer */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.08)_0%,transparent_60%)] pointer-events-none" 
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <SectionHeader 
          subtitle="Materia Prima d'Eccellenza"
          title="I Nostri Tagli Scelti"
          className="mb-20 lg:mb-32"
        />

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {tagli.map((taglio, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -15 }}
                className="group relative bg-noir/40 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden hover:border-fire/20 transition-all duration-500 shadow-2xl h-full flex flex-col"
              >
                {/* Visual Placeholder / Icon */}
                <div className="h-48 md:h-64 bg-gradient-to-br from-noir to-charcoal flex items-center justify-center text-7xl relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity bg-[url('https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center" />
                  <span className="relative z-10 filter drop-shadow-2xl group-hover:scale-110 transition-transform duration-500">🥩</span>
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 z-20">
                    <Badge variant="outline" className="bg-noir/80 border-gold/40 text-gold text-[10px] uppercase tracking-widest px-3 py-1">
                      {taglio.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-8 lg:p-10 flex-1 flex flex-col">
                  <h3 className="text-2xl lg:text-3xl font-display font-bold text-cream mb-4 group-hover:text-gold transition-colors">
                    {taglio.name}
                  </h3>
                  <p className="text-gold-light/70 leading-relaxed text-sm lg:text-base tracking-wide flex-1">
                    {taglio.desc}
                  </p>
                  
                  <div className="mt-8 pt-8 border-t border-white/5">
                    <button className="text-gold text-xs font-bold uppercase tracking-widest flex items-center gap-2 group/btn" aria-label={`Scopri di più su ${taglio.name}`}>
                      Scopri di più
                      <span className="w-8 h-px bg-gold/40 group-hover/btn:w-12 transition-all" />
                    </button>
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
