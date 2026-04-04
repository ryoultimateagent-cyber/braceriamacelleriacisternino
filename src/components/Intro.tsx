import { motion } from "framer-motion";
import { ChefHat, ShieldCheck, Flame, Award } from "lucide-react";

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
    <section className="relative bg-[#f7f4ed] overflow-hidden py-20 md:py-28">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Content Section */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="h-[1px] w-8 bg-[#1c1c1c]" />
                <span className="text-[#1c1c1c] text-[10px] font-medium uppercase tracking-[0.4em]">L'Eccellenza Pugliese</span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl lg:text-[56px] font-semibold text-[#1c1c1c] tracking-[-1.5px] leading-[1.05]"
              >
                Passione, qualità <br />
                <span className="text-[#5f5f5d]">e tradizione.</span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-[#5f5f5d] text-lg font-normal leading-relaxed max-w-xl"
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
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-3 rounded-[12px] border border-[#eceae4] text-[#1c1c1c] transition-all duration-300 group-hover:bg-[#1c1c1c] group-hover:text-white group-hover:border-[#1c1c1c]">
                      {f.icon}
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-[#1c1c1c] font-semibold tracking-[-0.01em] text-base">
                        {f.title}
                      </h3>
                      <p className="text-[#5f5f5d] text-sm leading-relaxed font-normal">
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
              className="relative aspect-[4/5] w-full group overflow-hidden rounded-[16px] border border-[#eceae4]"
            >
              <img 
                src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Maestria Pugliese" 
                className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              
              <div className="absolute -bottom-4 -left-4 z-20 bg-[#1c1c1c] p-6 rounded-[12px] shadow-xl">
                <div className="flex flex-col items-center">
                  <span className="text-[#fcfbf8] text-3xl font-semibold leading-none">38</span>
                  <span className="text-[#fcfbf8]/60 text-[9px] font-medium uppercase tracking-widest mt-1">ANNI</span>
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