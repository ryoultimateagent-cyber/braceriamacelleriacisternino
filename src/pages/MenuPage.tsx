import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChefHat, Flame, Wine } from "lucide-react";
import { Link } from "react-router-dom";

const menuData = [
  {
    category: "Antipasti della Tradizione",
    icon: <ChefHat className="w-5 h-5 text-primary" />,
    items: [
      { name: "Tagliere Belvedere", price: "18€", desc: "Selezione di salumi locali, formaggi murgiani e sott'oli artigianali." },
      { name: "Burratina di Putignano", price: "10€", desc: "Servita con pomodorini confit e pesto di basilico fresco." },
      { name: "Carpaccio di Fassona", price: "14€", desc: "Con scaglie di grana, rucola e riduzione di aceto balsamico." },
    ]
  },
  {
    category: "Specialità dalla Brace",
    icon: <Flame className="w-5 h-5 text-primary" />,
    items: [
      { name: "Bistecca Fiorentina", price: "6.50€/hg", desc: "Sottofesa di scottona, frollata 45 giorni, cotta su brace di quercia." },
      { name: "Bombette Pugliesi (6 pezzi)", price: "12€", desc: "Involtini di capocollo ripieni di formaggio canestrato." },
      { name: "Zampina di Sammichele", price: "10€", desc: "Salsiccia tipica aromatizzata con pomodoro, basilico e pecorino." },
      { name: "Costata di Angus", price: "5.50€/hg", desc: "Carne tenera e marezzata, provenienza certificata." },
    ]
  },
  {
    category: "Contorni",
    icon: <ChefHat className="w-5 h-5 text-primary" />,
    items: [
      { name: "Patate al Forno", price: "5€", desc: "Con rosmarino e aglio in camicia." },
      { name: "Cicorielle Campestri", price: "6€", desc: "Saltate in padella con peperoncino e olio EVO." },
      { name: "Insalata Mista", price: "4€", desc: "Verdure di stagione a km zero." },
    ]
  },
  {
    category: "Dalla Cantina",
    icon: <Wine className="w-5 h-5 text-primary" />,
    items: [
      { name: "Primitivo di Manduria DOC", price: "24€", desc: "Rosso strutturato, perfetto per le carni rosse." },
      { name: "Negroamaro Salento IGT", price: "18€", desc: "Note di frutti rossi e spezie mediterranee." },
      { name: "Vino della Casa (1L)", price: "10€", desc: "Selezione locale del mese." },
    ]
  }
];

const MenuPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col selection:bg-primary/30">
      <Header />
      
      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-start mb-8">
            <Button asChild variant="ghost" className="text-white/60 hover:text-white hover:bg-white/5 gap-2 -ml-4">
              <Link to="/">
                <ArrowLeft className="w-4 h-4" />
                Torna alla Home
              </Link>
            </Button>
          </div>

          <SectionHeader 
            subtitle="ESPERIENZA GASTRONOMICA"
            title="IL NOSTRO MENU"
            align="left"
            className="mb-16"
          />

          <div className="space-y-20">
            {menuData.map((section, idx) => (
              <motion.section 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                  {section.icon}
                  <h2 className="text-2xl font-black italic uppercase tracking-tighter">{section.category}</h2>
                </div>

                <div className="grid gap-10">
                  {section.items.map((item, i) => (
                    <div key={i} className="group flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-l-2 border-transparent hover:border-primary pl-4 transition-all duration-300">
                      <div className="flex-grow">
                        <div className="flex flex-wrap md:flex-nowrap items-baseline gap-x-4 mb-1">
                          <h3 className="text-xl font-bold italic uppercase tracking-tight group-hover:text-primary transition-colors shrink-0">{item.name}</h3>
                          <div className="hidden md:block flex-grow border-b border-white/5 border-dashed mx-2" />
                          <span className="text-primary font-black italic ml-auto md:ml-0">{item.price}</span>
                        </div>
                        <p className="text-white/65 text-sm italic leading-relaxed max-w-2xl">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>

          <div className="mt-24 p-10 rounded-[2.5rem] bg-white/5 border border-white/10 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-primary/10 transition-colors" />
            <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-4">Sei Pronto a Gustare?</h3>
            <p className="text-white/65 italic mb-8 max-w-md mx-auto">Prenota il tuo tavolo per assicurarti la migliore esperienza nella nostra braceria.</p>
            <Button asChild aria-label="Prenota Ora" className="rounded-full px-10 h-14 bg-primary text-white font-black italic uppercase tracking-tighter shadow-lg hover:shadow-primary/40 transition-all focus-visible:ring-2 focus-visible:ring-primary">
              <a href="tel:+390804058608">Prenota Ora</a>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MenuPage;