import { Star } from "lucide-react";

const reviews = [
  {
    text: "Carne eccezionale e brace autentica. Un'esperienza che vale davvero la pena. Il personale è cordiale e la qualità dei prodotti è fuori dal comune. Torneremo sicuramente!",
    author: "Marco R.",
  },
  {
    text: "La migliore fiorentina mai mangiata! Cottura perfetta, ambiente accogliente e personale gentilissimo. Una vera scoperta nel panorama gastronomico pugliese. Consigliatissimo!",
    author: "Giulia M.",
  },
  {
    text: "Tradizione e qualità. Ogni volta è un piacere tornare. I panini take-away sono fenomenali, rapporto qualità prezzo imbattibile. Un punto di riferimento assoluto.",
    author: "Antonio D.",
  },
];

const Recensioni = () => {
  return (
    <section className="py-24 bg-noir relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="font-accent text-fire italic tracking-[4px] uppercase text-sm">
            Testimonianze
          </span>
          <h2 className="font-elegant text-4xl sm:text-6xl font-bold text-cream mt-4 relative inline-block section-divider">
            Dicono di Noi
          </h2>
          <p className="font-accent text-lg text-gold-light italic mt-10 max-w-2xl mx-auto">
            Le parole dei nostri clienti sono il nostro più grande orgoglio
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-charcoal/50 border border-gold/20 p-8 hover:border-fire hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(139,21,56,0.3)] transition-all duration-400"
            >
              {/* Stars */}
              <div className="flex gap-1 text-fire mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="font-accent text-lg text-gold-light italic leading-relaxed mb-6">
                "{review.text}"
              </p>
              <div className="font-semibold text-cream uppercase tracking-wide text-sm">
                — {review.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recensioni;
