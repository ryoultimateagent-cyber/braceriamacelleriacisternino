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
    <section id="intro" className="py-32 lg:py-48 bg-gradient-premium relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <AnimatedSection animation="fade-up">
              <span className="text-gold text-xs uppercase tracking-[0.5em] font-bold mb-6 block">ECCELLENZA PUGLIESE</span>
              <h2 className="text-4xl md:text-6xl font-display font-black text-cream leading-tight mb-8">
                L'ARTE DELLA <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ember to-gold italic">BRACE AUTENTICA</span>
              </h2>
              <p className="text-gold-light/70 text-lg md:text-xl font-body leading-relaxed mb-10 max-w-xl">
                La Macelleria Braceria Belvedere è un punto di riferimento per gli amanti della carne di qualità. Da oltre 40 anni, selezioniamo i migliori tagli e li prepariamo con la sapienza di chi ama il proprio mestiere.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                {features.slice(0, 2).map((f, i) => (
                  <div key={i} className="space-y-4">
                    <div className="p-3 w-fit bg-white/5 border border-white/10 rounded-xl">{f.icon}</div>
                    <h4 className="text-gold font-bold uppercase tracking-widest text-sm">{f.title}</h4>
                    <p className="text-gold-light/50 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <div className="lg:w-1/2 relative">
            <AnimatedSection animation="scale-up" delay={0.2}>
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto group">
                {/* Decorative Frames */}
                <div className="absolute -inset-4 border border-gold/20 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 duration-700" />
                <div className="absolute inset-0 bg-gold/10 mix-blend-overlay z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=1200" 
                  alt="Premium Steak" 
                  className="w-full h-full object-cover shadow-2xl transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Stats Badge */}
                <div className="absolute -bottom-10 -right-10 bg-noir border border-gold/30 p-8 z-20 shadow-fire">
                  <div className="text-5xl font-display font-black text-gold">44</div>
                  <div className="text-[10px] uppercase tracking-[0.4em] text-gold-light">Anni di Eccellenza</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-40">
           {features.map((f, i) => (
            <AnimatedSection key={i} delay={0.1 * i} className="group p-8 luxury-card">
              <div className="mb-6 transition-transform group-hover:scale-110 duration-500">{f.icon}</div>
              <h3 className="text-cream font-display font-bold text-xl mb-4 group-hover:text-gold transition-colors">{f.title}</h3>
              <p className="text-gold-light/60 text-sm leading-relaxed">{f.desc}</p>
            </AnimatedSection>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Intro;