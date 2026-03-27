import { motion } from "framer-motion";
import { ChefHat, ShieldCheck, Flame, Award } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const features = [
  { 
    icon: <Flame className="w-8 h-8 text-ember" />, 
    title: "Brace Autentica", 
    desc: "Cottura tradizionale su legna selezionata per un sapore inconfondibile." 
  },
  { 
    icon: <ShieldCheck className="w-8 h-8 text-gold" />, 
    title: "Qualità Certificata", 
    desc: "Solo carni di filiera controllata e frollature artigianali." 
  },
  { 
    icon: <Award className="w-8 h-8 text-gold-light" />, 
    title: "Eredità Familiare", 
    desc: "Passione e segreti del mestiere tramandati dal 1980." 
  },
  { 
    icon: <ChefHat className="w-8 h-8 text-cream" />, 
    title: "Maestria al Taglio", 
    desc: "Macellai esperti che conoscono ogni segreto della materia prima." 
  },
];

const Intro = () => {
  return (
    <section id="intro" className="py-32 lg:py-56 bg-noir relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute -top-20 -left-20 text-cream/[0.02] text-[25vw] font-display font-black pointer-events-none select-none uppercase leading-none">
        Elite
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-32">
          <AnimatedSection animation="fade-up">
            <span className="text-gold text-xs uppercase tracking-[0.6em] font-bold mb-8 block">Eccellenza Pugliese dal 1980</span>
            <h2 className="text-5xl md:text-8xl font-display font-black text-cream leading-[0.9] mb-10 uppercase">
              LA FILOSOFIA <br /> 
              <span className="text-gold italic font-light">DEL GUSTO</span>
            </h2>
            <div className="h-1 w-24 bg-gold mx-auto mb-12" />
            <p className="text-cream/60 text-xl md:text-2xl font-light leading-relaxed font-accent italic">
              "Selezioniamo solo l'eccellenza. Per noi, la carne non è un prodotto, è una vocazione che onoriamo ogni giorno davanti alla brace viva."
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-40">
          <AnimatedSection animation="fade-right" className="relative group">
            <div className="relative aspect-square overflow-hidden border border-gold/10 p-4">
              <div className="absolute inset-0 bg-gold/5 z-0" />
              <img 
                src="https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=1200" 
                alt="Premium Steak Selection" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/60 to-transparent" />
            </div>
            {/* Floating Info */}
            <div className="absolute -bottom-10 -right-6 lg:-right-12 bg-gold text-noir p-10 shadow-2xl">
              <span className="block text-4xl font-display font-black leading-none mb-1">40+</span>
              <span className="block text-[10px] uppercase tracking-widest font-bold">Anni di Storia</span>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-3xl font-display font-bold text-cream uppercase tracking-tighter">L'ARTE DELLA SELEZIONE</h3>
              <p className="text-cream/70 text-lg leading-relaxed">
                Ogni taglio che entra nella nostra braceria è frutto di una ricerca maniacale. Dalle colline pugliesi ai pascoli più rinomati d'Europa, portiamo in tavola solo il meglio della produzione mondiale.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {features.slice(0, 4).map((f, i) => (
                <div key={i} className="group">
                  <div className="mb-4 text-gold group-hover:scale-110 transition-transform duration-500">{f.icon}</div>
                  <h4 className="text-cream font-bold uppercase tracking-widest text-xs mb-3 group-hover:text-gold transition-colors">{f.title}</h4>
                  <p className="text-cream/40 text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Intro;