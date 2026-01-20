import { FileText } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

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
    <section id="menu" className="py-16 sm:py-24 bg-noir relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-12 sm:mb-20">
          <span className="font-accent text-fire italic tracking-[4px] uppercase text-xs sm:text-sm">
            Le Nostre Proposte
          </span>
          <h2 className="font-elegant text-3xl sm:text-5xl lg:text-6xl font-bold text-cream mt-4 relative inline-block section-divider">
            Il Nostro Menù
          </h2>
          <p className="font-accent text-base sm:text-lg text-gold-light italic mt-8 sm:mt-10 max-w-2xl mx-auto px-4">
            Un viaggio nei sapori autentici della Puglia, dalla tradizione all'innovazione
          </p>
        </AnimatedSection>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {menuItems.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ x: 10, borderLeftWidth: "6px" }}
                className="p-6 sm:p-8 bg-charcoal/30 border-l-4 border-gold hover:bg-charcoal/60 hover:border-fire transition-all duration-400"
              >
                <h3 className="font-elegant text-xl sm:text-2xl font-semibold text-cream mb-3 sm:mb-4">
                  {item.name}
                </h3>
                <p className="text-gold-light leading-relaxed text-sm sm:text-base">{item.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Download Button */}
        <AnimatedSection delay={0.6} className="text-center mt-12 sm:mt-16">
          <a
            href="https://drive.google.com/file/d/1_LBXD8l_BNEpK1vPxeo7qVWKxIr9ePlB/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-fire to-fire-dark text-cream font-bold uppercase tracking-wider text-xs sm:text-sm shadow-[0_10px_30px_rgba(139,21,56,0.3)] hover:translate-y-[-3px] hover:shadow-[0_15px_40px_rgba(139,21,56,0.5)] transition-all duration-400"
          >
            <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
            Scarica Menù Completo
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Menu;
