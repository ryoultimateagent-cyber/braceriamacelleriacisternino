import { motion } from "framer-motion";
import { ChefHat, ShieldCheck, Flame, Award } from "lucide-react";
import BrandObject3D from "./BrandObject3D";

const features = [
  { 
    icon: <Flame className="w-8 h-8" />, 
    title: "Brace Autentica", 
    desc: "Cottura tradizionale su legna selezionata per un sapore inconfondibile." 
  },
  { 
    icon: <ShieldCheck className="w-8 h-8" />, 
    title: "Qualità Certificata", 
    desc: "Solo carni di filiera controllata e frollature artigianali." 
  },
  { 
    icon: <Award className="w-8 h-8" />, 
    title: "Eredità Familiare", 
    desc: "Passione e segreti del mestiere tramandati dal 1980." 
  },
  { 
    icon: <ChefHat className="w-8 h-8" />, 
    title: "Maestria al Taglio", 
    desc: "Macellai esperti che conoscono ogni segreto della materia prima." 
  },
];

const Intro = () => {
  return (
    <section id="storia" className="section-container section-spacing bg-transparent relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 md:gap-24 items-center">
        
        {/* Left: Content */}
        <div className="space-y-12">
          <div className="space-y-6">
            <span className="text-primary text-xs font-black uppercase tracking-[0.4em] block text-reveal">ECCELLENZA DAL 1986</span>
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] text-reveal uppercase italic">
              LA FILOSOFIA <br /> 
              <span className="text-primary">DEL GUSTO</span>
            </h2>
            <p className="text-white/60 text-xl font-medium leading-relaxed max-w-2xl text-reveal" style={{ animationDelay: '0.2s' }}>
              Selezioniamo solo l'eccellenza. Per noi, la carne non è un semplice prodotto, è una vocazione che onoriamo ogni giorno con passione e dedizione.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-12 border-t border-white/10">
            {features.map((f, i) => (
              <motion.article 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                viewport={{ once: true }}
                className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-primary/20 hover:bg-white/10 transition-all duration-500"
              >
                <div className="mb-6 p-4 inline-block rounded-2xl bg-white/5 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl">
                  {f.icon}
                </div>
                <h3 className="text-white font-black uppercase tracking-tight text-lg mb-2 italic">
                  {f.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed font-medium">
                  {f.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Right: Interactive 3D Object */}
        <div className="relative group flex justify-center items-center">
          <div className="relative w-full max-w-[500px] aspect-square flex justify-center items-center">
             {/* <BrandObject3D /> */}
             <div className="w-full h-full bg-primary/10 rounded-full flex items-center justify-center">
               <span className="text-primary font-black italic">BELVEDERE</span>
             </div>
             
             {/* Floating Info Badge */}
             <motion.div 
               initial={{ scale: 0, rotate: -15 }}
               whileInView={{ scale: 1, rotate: 0 }}
               viewport={{ once: true }}
               transition={{ type: "spring", damping: 15 }}
               className="absolute -bottom-10 -right-4 bg-primary text-white p-10 rounded-full shadow-[0_20px_60px_-10px_rgba(204,0,0,0.6)] flex flex-col items-center justify-center border-4 border-black"
             >
               <span className="text-5xl font-black italic leading-none mb-1">35+</span>
               <span className="text-[10px] uppercase tracking-[0.3em] font-black italic">ANNI DI ARTE</span>
             </motion.div>
          </div>
          
          {/* Decorative Circles */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full animate-pulse" />
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-white/5 rounded-full opacity-50" />
        </div>

      </div>
    </section>
  );
};

export default Intro;
