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
    <section id="intro" className="section-container py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
        
        {/* Left: Content */}
        <AnimatedSection animation="fade-right" className="space-y-10">
          <div className="space-y-6">
            <span className="text-primary text-xs font-bold uppercase tracking-[0.4em]">ECCELLENZA DAL 1986</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-foreground tracking-tight leading-[1.1]">
              LA FILOSOFIA <br /> 
              <span className="text-primary italic">DEL GUSTO</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl font-medium leading-relaxed max-w-xl">
              Selezioniamo solo l'eccellenza. Per noi, la carne non è un semplice prodotto, è una vocazione che onoriamo ogni giorno con passione e dedizione.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-foreground/5">
            {features.map((f, i) => (
              <article key={i} className="group p-6 rounded-2xl bg-secondary/50 border border-transparent hover:border-primary/10 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="mb-4 p-3 inline-block rounded-xl bg-white shadow-sm text-primary group-hover:scale-110 transition-transform duration-300">
                  {f.icon}
                </div>
                <h3 className="text-foreground font-bold uppercase tracking-wider text-sm mb-2">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {f.desc}
                </p>
              </article>
            ))}
          </div>
        </AnimatedSection>

        {/* Right: Interactive Image */}
        <AnimatedSection animation="fade-left" className="relative group">
          <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=1200" 
              alt="Selezione Carni Premium" 
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            
            {/* Floating Info Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-[2rem] shadow-2xl flex flex-col items-center">
              <span className="text-4xl font-black leading-none mb-1">35+</span>
              <span className="text-[10px] uppercase tracking-widest font-bold">ANNI DI STORIA</span>
            </div>
          </div>
          
          {/* Decorative Rings */}
          <div className="absolute -z-10 -top-12 -left-12 w-48 h-48 border-[20px] border-primary/5 rounded-full" />
        </AnimatedSection>

      </div>
    </section>
  );
};

export default Intro;