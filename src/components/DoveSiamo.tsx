import { MapPin } from "lucide-react";

const DoveSiamo = () => {
  return (
    <section className="py-24 bg-charcoal relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="font-accent text-fire italic tracking-[4px] uppercase text-sm">
            Vieni a Trovarci
          </span>
          <h2 className="font-elegant text-4xl sm:text-6xl font-bold text-cream mt-4 relative inline-block section-divider">
            Dove Siamo
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h3 className="font-elegant text-3xl font-semibold text-fire mb-6">
              Il Nostro Indirizzo
            </h3>
            <p className="text-gold-light leading-relaxed text-lg mb-4">
              Via Mentana, 50<br />
              70042 Mola di Bari (BA)<br />
              Puglia, Italia
            </p>
            <p className="text-gold-light leading-relaxed text-lg mb-4">
              <strong className="text-cream">Orari:</strong><br />
              Martedì - Domenica: 12:00 - 15:00 / 19:00 - 23:00<br />
              Lunedì: Chiuso
            </p>
            <p className="text-gold-light leading-relaxed text-lg mb-8">
              <strong className="text-cream">Contatti:</strong><br />
              Tel: +39 340 38 24 158<br />
              Email: info@braceriacisternino.it
            </p>
            <a
              href="https://maps.google.com/?q=Via+Mentana+50+Mola+di+Bari"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-fire to-fire-dark text-cream font-bold uppercase tracking-wider text-sm shadow-[0_10px_30px_rgba(139,21,56,0.3)] hover:translate-y-[-3px] hover:shadow-[0_15px_40px_rgba(139,21,56,0.5)] transition-all duration-400"
            >
              <MapPin className="w-5 h-5" />
              Apri in Google Maps
            </a>
          </div>

          {/* Map Visual */}
          <div className="h-[400px] lg:h-[500px] bg-charcoal/50 border border-fire/30 flex items-center justify-center relative overflow-hidden hover:border-fire hover:shadow-[0_20px_50px_rgba(139,21,56,0.4)] transition-all duration-400">
            <div className="absolute w-48 h-48 bg-[radial-gradient(circle,rgba(139,21,56,0.2),transparent)] animate-pulse-glow" />
            <MapPin className="w-24 h-24 text-fire relative z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoveSiamo;
