import { useEffect, useState, useRef } from "react";

const timelineData = [
  {
    year: "1920",
    title: "Le Origini",
    text: "Nasce a Mola di Bari la piccola macelleria di famiglia. L'arte della selezione della carne diventa il nostro DNA, tramandato di generazione in generazione con dedizione assoluta.",
  },
  {
    year: "1980",
    title: "La Rivoluzione",
    text: "Dalla macelleria alla braceria. Il fuoco vivo diventa il nostro maestro, la brace il nostro strumento per creare capolavori di sapore unici e indimenticabili.",
  },
  {
    year: "Oggi",
    title: "L'Eccellenza Continua",
    text: "La stessa passione brucia più forte che mai. Carne premium selezionata, taglio perfetto, brace autentica. La tradizione vive nell'innovazione.",
  },
];

const stats = [
  { number: "100+", label: "Anni di Storia" },
  { number: "4", label: "Generazioni" },
  { number: "10.000+", label: "Clienti Soddisfatti" },
  { number: "∞", label: "Passione" },
];

const Storia = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="storia" className="py-24 bg-noir relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="font-accent text-fire italic tracking-[4px] uppercase text-sm">
            La Nostra Eredità
          </span>
          <h2 className="font-elegant text-4xl sm:text-6xl font-bold text-cream mt-4 relative inline-block section-divider">
            Dal 1920
          </h2>
          <p className="font-accent text-lg text-gold-light italic mt-10 max-w-2xl mx-auto">
            Oltre un secolo di dedizione, passione e maestria nella selezione della carne e nell'arte della brace
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px timeline-line hidden md:block" />

          {timelineData.map((item, i) => (
            <div
              key={i}
              ref={(el) => (itemRefs.current[i] = el)}
              data-index={i}
              className={`flex flex-col md:flex-row mb-16 relative transition-all duration-800 ${
                visibleItems.includes(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="md:w-[45%] p-8 bg-charcoal/50 backdrop-blur-sm border border-gold/20 hover:border-fire transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(139,21,56,0.3)]">
                <div className="font-elegant text-5xl font-bold text-fire opacity-60 leading-none mb-4">
                  {item.year}
                </div>
                <h3 className="font-elegant text-2xl font-semibold text-cream mb-4">
                  {item.title}
                </h3>
                <p className="text-gold-light leading-relaxed">{item.text}</p>
              </div>

              {/* Dot */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-fire border-[3px] border-noir shadow-[0_0_0_3px] shadow-fire rounded-full" />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-8 bg-charcoal/30 border border-gold/20 hover:border-fire transition-all duration-400 hover:-translate-y-2 hover:bg-charcoal/50 hover:shadow-[0_10px_30px_rgba(139,21,56,0.3)] group"
            >
              <div className="font-elegant text-5xl font-bold text-gold group-hover:text-fire transition-colors leading-none mb-4">
                {stat.number}
              </div>
              <div className="text-sm uppercase tracking-wider text-gold-light">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Storia;
