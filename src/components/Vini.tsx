import { Wine } from "lucide-react";

const Vini = () => {
  return (
    <section id="vini" className="py-24 bg-charcoal relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="font-accent text-fire italic tracking-[4px] uppercase text-sm">
            Selezione Curata
          </span>
          <h2 className="font-elegant text-4xl sm:text-6xl font-bold text-cream mt-4 relative inline-block section-divider">
            Carta Vini
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h3 className="font-elegant text-3xl font-semibold text-fire mb-6">
              Vini d'Eccellenza
            </h3>
            <p className="text-gold-light leading-relaxed text-lg mb-6">
              Una selezione curata di vini pugliesi e nazionali, scelti per esaltare 
              i sapori intensi della brace. Primitivo, Negroamaro, Nero di Troia e 
              grandi etichette italiane che raccontano il territorio e la tradizione.
            </p>
            <p className="text-gold-light leading-relaxed text-lg mb-8">
              Ogni bottiglia racconta una storia, ogni sorso è un'emozione unica. 
              Il nostro personale esperto saprà consigliarti l'abbinamento perfetto 
              per rendere indimenticabile la tua esperienza gastronomica.
            </p>
            <a
              href="https://drive.google.com/file/d/1CYEh6u9jwJT04kDssM7RbBK_p04M-QZj/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-fire to-fire-dark text-cream font-bold uppercase tracking-wider text-sm shadow-[0_10px_30px_rgba(139,21,56,0.3)] hover:translate-y-[-3px] hover:shadow-[0_15px_40px_rgba(139,21,56,0.5)] transition-all duration-400"
            >
              <Wine className="w-5 h-5" />
              Scarica Carta Vini
            </a>
          </div>

          {/* Wine Visual */}
          <div className="h-[400px] lg:h-[500px] bg-charcoal/50 border border-fire/30 flex items-center justify-center text-9xl hover:border-fire hover:shadow-[0_20px_50px_rgba(139,21,56,0.4)] transition-all duration-400">
            🍷
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vini;
