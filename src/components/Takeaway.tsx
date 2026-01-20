import { Phone, FileText } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

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
    <section id="takeaway" className="py-16 sm:py-24 bg-noir relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-12 sm:mb-20">
          <span className="font-accent text-fire italic tracking-[4px] uppercase text-xs sm:text-sm">
            Porta a Casa
          </span>
          <h2 className="font-elegant text-3xl sm:text-5xl lg:text-6xl font-bold text-cream mt-4 relative inline-block section-divider">
            Take-away Panini
          </h2>
          <p className="font-accent text-base sm:text-lg text-gold-light italic mt-8 sm:mt-10 max-w-2xl mx-auto px-4">
            I nostri panini gourmet preparati con carne selezionata e ingredienti premium
          </p>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {panini.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -15, scale: 1.03 }}
                className="bg-charcoal/50 border border-gold/20 p-6 sm:p-8 text-center hover:border-fire hover:shadow-[0_20px_50px_rgba(139,21,56,0.4)] transition-all duration-500"
              >
                <h3 className="font-elegant text-xl sm:text-2xl font-semibold text-cream mb-3 sm:mb-4">
                  {p.name}
                </h3>
                <p className="text-gold-light leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">{p.desc}</p>
                <div className="font-elegant text-2xl sm:text-3xl font-bold text-fire px-6 sm:px-8 py-2 sm:py-3 border-2 border-fire inline-block">
                  {p.price}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTAs */}
        <AnimatedSection delay={0.6} className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-12 sm:mt-16 px-4">
          <a
            href="tel:+393403824158"
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-fire to-fire-dark text-cream font-bold uppercase tracking-wider text-xs sm:text-sm shadow-[0_10px_30px_rgba(139,21,56,0.3)] hover:translate-y-[-3px] hover:shadow-[0_15px_40px_rgba(139,21,56,0.5)] transition-all duration-400"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            Chiama per Ordinare
          </a>
          <a
            href="https://drive.google.com/file/d/1eW1XDU5rVSLqf0kG8kNp3VyXA8pZoANN/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 border-2 border-cream text-cream font-bold uppercase tracking-wider text-xs sm:text-sm hover:bg-cream hover:text-noir transition-all duration-400"
          >
            <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
            Menu Completo
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Takeaway;
