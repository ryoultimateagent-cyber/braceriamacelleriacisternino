import { Phone, FileText } from "lucide-react";

const panini = [
  { name: "Cisternino", desc: "Il classico: carne scottata alla brace, rucola fresca, grana stagionato e pomodoro. Semplicità che conquista sempre.", price: "€5" },
  { name: "Crunchy Burger", desc: "Hamburger di scottona premium, bacon croccante, cheddar fuso, cipolla caramellata. Esplosione di gusto.", price: "€7" },
  { name: "Zamp Fire", desc: "Zampina scottata alla perfezione, salsa piccante homemade, insalata e pomodoro fresco. Per chi ama il gusto deciso.", price: "€5" },
  { name: "Smoky Cheddar", desc: "Carne affumicata, doppio cheddar fuso cremoso, cipolla rossa e salsa BBQ homemade. Pura goduria al palato.", price: "€6" },
  { name: "Chicken Smoke", desc: "Pollo affumicato lentamente sulla brace, maionese artigianale, insalata croccante e bacon. Assolutamente irresistibile.", price: "€5" },
  { name: "Completissimo", desc: "Tutto dentro: carne, wurstel, bacon, formaggio premium, verdure fresche e salse speciali. Il re assoluto dei panini.", price: "€7" },
];

const Takeaway = () => {
  return (
    <section id="takeaway" className="py-24 bg-noir relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="font-accent text-fire italic tracking-[4px] uppercase text-sm">
            Porta a Casa
          </span>
          <h2 className="font-elegant text-4xl sm:text-6xl font-bold text-cream mt-4 relative inline-block section-divider">
            Take-away Panini
          </h2>
          <p className="font-accent text-lg text-gold-light italic mt-10 max-w-2xl mx-auto">
            I nostri panini gourmet preparati con carne selezionata e ingredienti premium
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-6xl mx-auto">
          {panini.map((p, i) => (
            <div
              key={i}
              className="break-inside-avoid mb-6 bg-charcoal/50 border border-gold/20 p-8 text-center hover:border-fire hover:-translate-y-4 hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(139,21,56,0.4)] transition-all duration-500"
            >
              <h3 className="font-elegant text-2xl font-semibold text-cream mb-4">
                {p.name}
              </h3>
              <p className="text-gold-light leading-relaxed mb-6">{p.desc}</p>
              <div className="font-elegant text-3xl font-bold text-fire px-8 py-3 border-2 border-fire inline-block">
                {p.price}
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-16">
          <a
            href="tel:+393403824158"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-fire to-fire-dark text-cream font-bold uppercase tracking-wider text-sm shadow-[0_10px_30px_rgba(139,21,56,0.3)] hover:translate-y-[-3px] hover:shadow-[0_15px_40px_rgba(139,21,56,0.5)] transition-all duration-400"
          >
            <Phone className="w-5 h-5" />
            Chiama per Ordinare
          </a>
          <a
            href="https://drive.google.com/file/d/1eW1XDU5rVSLqf0kG8kNp3VyXA8pZoANN/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-cream text-cream font-bold uppercase tracking-wider text-sm hover:bg-cream hover:text-noir transition-all duration-400"
          >
            <FileText className="w-5 h-5" />
            Menu Completo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Takeaway;
