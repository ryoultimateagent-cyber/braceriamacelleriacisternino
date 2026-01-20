import { Phone, Zap, Users, Star } from "lucide-react";

const Prenota = () => {
  return (
    <section id="prenota" className="py-24 bg-gradient-to-br from-charcoal to-noir border-t border-b border-fire/30 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-accent text-fire italic tracking-[4px] uppercase text-sm">
            Riservazione
          </span>
          <h2 className="font-elegant text-4xl sm:text-6xl font-bold text-cream mt-4 relative inline-block section-divider">
            Prenota il Tuo Tavolo
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-accent text-xl text-gold-light italic leading-relaxed mb-10">
            Chiamaci o passa a trovarci. Ti aspettiamo con un calice di vino pregiato 
            e il profumo inconfondibile della brace accesa che ti accoglierà.
          </p>

          <a
            href="tel:+393403824158"
            className="inline-flex items-center gap-4 font-elegant text-4xl sm:text-5xl font-bold text-fire hover:scale-105 hover:text-shadow-[0_0_20px_rgba(139,21,56,0.5)] transition-all duration-300 mb-16"
          >
            <Phone className="w-10 h-10" />
            +39 340 38 24 158
          </a>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Zap className="w-12 h-12 text-gold" />
              </div>
              <div className="text-lg text-gold-light uppercase tracking-wider">
                Servizio Rapido
              </div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-gold" />
              </div>
              <div className="text-lg text-gold-light uppercase tracking-wider">
                Accoglienza Calorosa
              </div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Star className="w-12 h-12 text-gold" />
              </div>
              <div className="text-lg text-gold-light uppercase tracking-wider">
                Qualità Premium
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prenota;
