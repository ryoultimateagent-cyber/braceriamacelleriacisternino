const tagli = [
  {
    name: "Fiorentina Premium",
    desc: "T-Bone da ~1kg, perfetta per 2 persone. Cottura al sangue per esaltare la morbidezza estrema e il sapore profondo della migliore carne selezionata.",
  },
  {
    name: "Costata di Scottona",
    desc: "400/500g di pura eccellenza. Marezzatura perfetta che si scioglie in bocca. Il nostro bestseller assoluto, amato da tutti gli intenditori di carne.",
  },
  {
    name: "Tartare Esplosiva",
    desc: "Carne cruda di primissima scelta, tagliata al momento. Classica o con il nostro twist piccante che fa la differenza.",
  },
  {
    name: "Tagliata Signature",
    desc: "Scottona ~300g su letto di rucola fresca. Il classico pugliese reinterpretato con maestria dalla nostra tradizione centenaria.",
  },
  {
    name: "Costine BBQ Slow",
    desc: "Cottura lenta sulla brace per ore. Morbidezza estrema, affumicatura naturale, glassa homemade. Un'esperienza unica.",
  },
  {
    name: "Bombette Tradizionali",
    desc: "Le autentiche bombette pugliesi servite al tavolo sulla brace. Tradizione pura che scalda il cuore e delizia il palato.",
  },
];

const Tagli = () => {
  return (
    <section id="brace" className="py-24 bg-charcoal relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="font-accent text-fire italic tracking-[4px] uppercase text-sm">
            Selezioni Premium
          </span>
          <h2 className="font-elegant text-4xl sm:text-6xl font-bold text-cream mt-4 relative inline-block section-divider">
            I Nostri Tagli
          </h2>
          <p className="font-accent text-lg text-gold-light italic mt-10 max-w-2xl mx-auto">
            Ogni taglio è selezionato con cura maniacale e cotto alla perfezione sulla brace
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {tagli.map((taglio, i) => (
            <div
              key={i}
              className="break-inside-avoid mb-6 bg-charcoal/50 border border-gold/20 overflow-hidden hover:border-fire hover:-translate-y-4 hover:scale-[1.02] hover:shadow-[0_25px_60px_rgba(139,21,56,0.4)] transition-all duration-500 group"
            >
              {/* Image placeholder */}
              <div className="h-64 bg-gradient-to-br from-fire/30 to-copper/30 flex items-center justify-center text-6xl relative overflow-hidden">
                🥩
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-fire/20 to-transparent animate-shine opacity-0 group-hover:opacity-100" />
              </div>
              <div className="p-8">
                <h3 className="font-elegant text-2xl font-semibold text-gold group-hover:text-fire transition-colors mb-4">
                  {taglio.name}
                </h3>
                <p className="text-gold-light leading-relaxed">{taglio.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tagli;
