import { Phone, FileText, ShoppingBag, Award } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";

const panini = [
  { 
    name: "Belvedere Classic", 
    desc: "Carne scelta scottata alla brace, rucola selvatica, scaglie di Grana Padano DOP e pomodoro cuore di bue. Semplicità senza tempo.", 
    price: "€5",
    tag: "Il Bestseller"
  },
  { 
    name: "Black Burger", 
    desc: "Hamburger di scottona premium (200g), bacon affumicato, cheddar fuso, cipolla rossa caramellata e salsa segreta.", 
    price: "€7",
    tag: "Gourmet"
  },
  { 
    name: "Zampina Fire", 
    desc: "Zampina molese DOC alla brace, salsa piccante artigianale, misticanza croccante e pomodorini secchi.", 
    price: "€5",
    tag: "Locale"
  },
  { 
    name: "Smoky Cheddar", 
    desc: "Manzo affumicato lentamente, doppio cheddar irlandese fuso, cipolla fritta croccante e salsa BBQ homemade.", 
    price: "€6",
    tag: "Affumicato"
  },
  { 
    name: "Chicken Grill", 
    desc: "Petto di pollo ruspante grigliato, maionese al lime, lattuga romana, bacon e avocado fresco.", 
    price: "€5",
    tag: "Leggero"
  },
  { 
    name: "The King", 
    desc: "Tutto quello che desideri: carne, wurstel artigianale, bacon, uovo all'occhio di bue, cheddar e salse miste.", 
    price: "€8",
    tag: "Extralarge"
  },
];

const Takeaway = () => {
  return (
    <section id="takeaway" className="py-24 lg:py-40 bg-noir relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-fire/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-20 lg:mb-32">
          <span className="text-fire text-xs md:text-sm font-bold uppercase tracking-[0.4em] mb-4 block">
            Qualità Gourmet da Asporto
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-cream mb-8 leading-tight">
            I Nostri Panini
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fire to-gold mx-auto rounded-full" />
        </AnimatedSection>

        {/* Panini Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {panini.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -15 }}
                className="group relative bg-charcoal/40 backdrop-blur-md border border-white/5 p-10 lg:p-12 text-center hover:border-fire/20 transition-all duration-500 rounded-3xl h-full flex flex-col shadow-2xl overflow-hidden"
              >
                {/* Tag Badge */}
                <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
                    {p.tag}
                  </span>
                </div>

                <div className="text-5xl lg:text-6xl mb-8 group-hover:scale-110 transition-transform">
                  🍔
                </div>

                <h3 className="text-2xl lg:text-3xl font-display font-bold text-cream mb-4 group-hover:text-gold transition-colors">
                  {p.name}
                </h3>
                
                <p className="text-gold-light/60 leading-relaxed mb-10 text-sm lg:text-lg tracking-wide flex-1 font-accent italic">
                  "{p.desc}"
                </p>
                
                <div className="pt-8 border-t border-white/5">
                  <div className="text-3xl lg:text-4xl font-display font-bold text-fire mb-2">
                    {p.price}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 group-hover:text-fire/40 transition-colors">
                    Sapore Unico
                  </span>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Global Action Section */}
        <AnimatedSection delay={0.6} className="mt-24 lg:mt-32 text-center p-12 lg:p-20 bg-charcoal/20 backdrop-blur-md border border-white/5 rounded-[3rem] max-w-5xl mx-auto shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-fire/5 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="relative z-10">
            <h3 className="text-3xl lg:text-5xl font-display font-bold text-cream mb-6">
              Voglia di Brace?
            </h3>
            <p className="text-lg lg:text-xl text-gold-light/70 max-w-2xl mx-auto mb-12 italic font-accent">
              Chiamaci e prenota il tuo ordine. La qualità della nostra braceria direttamente a casa tua.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                asChild 
                variant="gold" 
                size="lg" 
                className="h-16 px-12 text-sm uppercase tracking-widest font-bold shadow-2xl"
              >
                <a href="tel:+393403824158" className="flex items-center gap-4">
                  <Phone className="w-5 h-5" />
                  Ordina Ora
                </a>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="h-16 px-12 text-sm uppercase tracking-widest font-bold border-white/10 hover:border-gold/40"
              >
                <a
                  href="https://drive.google.com/file/d/1eW1XDU5rVSLqf0kG8kNp3VyXA8pZoANN/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4"
                >
                  <FileText className="w-5 h-5" />
                  Consulta Menù Asporto
                </a>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Takeaway;