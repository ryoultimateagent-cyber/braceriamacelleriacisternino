import { motion } from "framer-motion";
import { ChefHat, ShieldCheck, Flame, Award, ArrowRight } from "lucide-react";

const features = [
  { 
    icon: <Flame className="w-6 h-6" />, 
    title: "Brace Autentica", 
    desc: "Cottura tradizionale su legna selezionata per un sapore inconfondibile." 
  },
  { 
    icon: <ShieldCheck className="w-6 h-6" />, 
    title: "Qualità Certificata", 
    desc: "Solo carni di filiera controllata e frollature artigianali." 
  },
  { 
    icon: <Award className="w-6 h-6" />, 
    title: "Eredità Familiare", 
    desc: "Passione e segreti del mestiere tramandati dal 1980." 
  },
  { 
    icon: <ChefHat className="w-6 h-6" />, 
    title: "Maestria al Taglio", 
    desc: "Macellai esperti che conoscono ogni segreto della materia prima." 
  },
];

const Intro = () => {
  return (
    <section id="storia" className="relative bg-[#080808] overflow-hidden py-20 md:py-28">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-950/10 to-transparent pointer-events-none" />
      <div className="absolute -left-20 top-40 w-64 h-64 bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Content Section */}
          <div className="lg:col-span-7 space-y-16">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="h-[2px] w-12 bg-primary" />
                <span className="text-primary text-xs font-black uppercase tracking-[0.5em] italic">L'Eccellenza Pugliese</span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[0.9] uppercase italic"
              >
                PURO <br />
                <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>CARATTERE</span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-white/50 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl italic"
              >
                Al Belvedere non serviamo solo carne. Celebriamo un rito che affonda le radici nella nostra terra, Putignano, portando in tavola l'anima della Puglia.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {features.map((f, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex items-start gap-6">
                    <div className="mt-1 p-3 rounded-xl bg-white/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      {f.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-white font-black uppercase tracking-tight text-lg italic group-hover:text-primary transition-colors">
                        {f.title}
                      </h3>
                      <p className="text-white/30 text-sm leading-relaxed font-medium">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual Section */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] w-full group overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Maestria Pugliese" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -left-10 z-20 bg-primary p-12 rounded-full shadow-2xl border-[12px] border-[#080808]">
                <div className="flex flex-col items-center">
                  <span className="text-white text-5xl font-black italic leading-none">38</span>
                  <span className="text-white/80 text-[10px] font-black uppercase tracking-widest mt-1">ANNI</span>
                </div>
              </div>
            </motion.div>
            
            {/* Background Text Decoration */}
            <div className="absolute -right-20 -bottom-20 pointer-events-none opacity-[0.03] select-none">
              <span className="text-[20rem] font-black text-white leading-none uppercase italic">B</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Intro;