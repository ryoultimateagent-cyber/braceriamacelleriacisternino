import { motion } from "framer-motion";
import { ChefHat, ShieldCheck, Flame, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  { 
    icon: <Flame className="w-5 h-5" />, 
    title: "Brace Autentica", 
    desc: "Cottura tradizionale su legna selezionata per un sapore inconfondibile." 
  },
  { 
    icon: <ShieldCheck className="w-5 h-5" />, 
    title: "Qualità Certificata", 
    desc: "Solo carni di filiera controllata e frollature artigianali." 
  },
  { 
    icon: <Award className="w-5 h-5" />, 
    title: "Eredità Familiare", 
    desc: "Passione e segreti del mestiere tramandati dal 1980." 
  },
  { 
    icon: <ChefHat className="w-5 h-5" />, 
    title: "Maestria al Taglio", 
    desc: "Macellai esperti che conoscono ogni segreto della materia prima." 
  },
];

const Intro = () => {
  return (
    <section className="relative bg-transparent overflow-hidden py-4 md:py-8">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Content Section */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="h-[1px] w-8 bg-primary" />
                <span className="text-primary text-[11px] font-medium uppercase tracking-[0.15em] italic opacity-50">L'Eccellenza Pugliese</span>
              </motion.div>
 
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-[24px] md:text-[30px] lg:text-[34px] font-bold text-white tracking-[-1px] leading-none uppercase italic"
              >
                PURO <br />
                <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>CARATTERE</span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-white/50 text-[15px] font-normal leading-[1.65] max-w-xl italic"
              >
                Al Belvedere non serviamo solo carne. Celebriamo un rito che affonda le radici nella nostra terra, Putignano, portando in tavola l'anima della Puglia.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.6 }}
                  viewport={{ once: true }}
                  className={cn(
                    "group transition-all duration-500 rounded-2xl border border-white/5 bg-white/5",
                    i === 0 ? "p-8" : "p-5"
                  )}
                >
                  <div className="flex flex-col gap-4">
                    <div className="text-primary group-hover:text-white transition-all duration-500">
                      {f.icon}
                    </div>
                    <div className="space-y-1">
                      <h3 className={cn(
                        "text-white font-bold uppercase tracking-tight italic group-hover:text-primary transition-colors",
                        i === 0 ? "text-[20px]" : "text-[16px]"
                      )}>
                        {f.title}
                      </h3>
                      <p className="text-white/50 text-[15px] leading-[1.65] font-normal max-w-[38ch]">
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
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] w-full group overflow-hidden rounded-[2rem] border border-white/5"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all duration-700 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Maestria Pugliese" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              
              <div className="absolute -bottom-6 -left-6 z-20 bg-primary p-6 rounded-full shadow-2xl border-[8px] border-black">
                <div className="flex flex-col items-center">
                  <span className="text-white text-[50px] md:text-[70px] lg:text-[80px] font-bold italic leading-none tracking-[-3px]">38</span>
                  <span className="text-white/50 text-[10px] font-medium uppercase tracking-[0.15em] mt-0.5">ANNI</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Intro;