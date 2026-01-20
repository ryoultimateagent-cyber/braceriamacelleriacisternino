import { FileText } from "lucide-react";

const menuItems = [
  {
    name: "Antipasti Artigianali",
    desc: "Salumi selezionati, formaggi DOP pugliesi, bruschette croccanti e il miglior capocollo di Martina Franca. Un viaggio nei sapori autentici del territorio.",
  },
  {
    name: "Primi Fatti in Casa",
    desc: "Orecchiette tirate a mano ogni giorno, ragù di carne cotto lentamente, risotti cremosi con ingredienti stagionali selezionati del territorio pugliese.",
  },
  {
    name: "Carni alla Brace",
    desc: "La nostra anima: fiorentina, costata, tagliata, tartare, costine BBQ. Ogni taglio è una promessa di qualità assoluta mantenuta con dedizione.",
  },
  {
    name: "Specialità Pugliesi",
    desc: "Bombette tradizionali, salsiccia artigianale, spiedini misti cotti sulla brace. Il sapore autentico della Puglia in ogni singolo morso indimenticabile.",
  },
  {
    name: "Contorni Premium",
    desc: "Verdure grigliate, patate croccanti al forno, insalate fresche di stagione, cicorie e fave preparate secondo la tradizione della nostra famiglia.",
  },
  {
    name: "Dolci della Casa",
    desc: "Dolci tipici pugliesi fatti in casa, tiramisù cremoso artigianale, sorbetti. Il finale perfetto per un pasto che rimarrà nel cuore e nel palato.",
  },
];

const Menu = () => {
  return (
    <section id="menu" className="py-24 bg-noir relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="font-accent text-fire italic tracking-[4px] uppercase text-sm">
            Le Nostre Proposte
          </span>
          <h2 className="font-elegant text-4xl sm:text-6xl font-bold text-cream mt-4 relative inline-block section-divider">
            Il Nostro Menù
          </h2>
          <p className="font-accent text-lg text-gold-light italic mt-10 max-w-2xl mx-auto">
            Un viaggio nei sapori autentici della Puglia, dalla tradizione all'innovazione
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {menuItems.map((item, i) => (
            <div
              key={i}
              className="p-8 bg-charcoal/30 border-l-4 border-gold hover:bg-charcoal/60 hover:border-l-[6px] hover:border-fire hover:translate-x-2 transition-all duration-400"
            >
              <h3 className="font-elegant text-2xl font-semibold text-cream mb-4">
                {item.name}
              </h3>
              <p className="text-gold-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Download Button */}
        <div className="text-center mt-16">
          <a
            href="https://drive.google.com/file/d/1_LBXD8l_BNEpK1vPxeo7qVWKxIr9ePlB/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-fire to-fire-dark text-cream font-bold uppercase tracking-wider text-sm shadow-[0_10px_30px_rgba(139,21,56,0.3)] hover:translate-y-[-3px] hover:shadow-[0_15px_40px_rgba(139,21,56,0.5)] transition-all duration-400"
          >
            <FileText className="w-5 h-5" />
            Scarica Menù Completo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
