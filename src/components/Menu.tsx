import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";

interface MenuItem {
  num: string;
  name: string;
  desc: string;
}

const menuItems: MenuItem[] = [
  {
    num: "01",
    name: "Braceria Serale",
    desc: "Su ordinazione, serviamo i migliori tagli cotti sulla nostra brace viva.",
  },
  {
    num: "02",
    name: "Asporto Disponibile",
    desc: "Porta la nostra qualità a casa tua con il servizio d'asporto rapido.",
  },
  {
    num: "03",
    name: "Prenotazioni",
    desc: "Accettiamo prenotazioni per garantirti il miglior tavolo e servizio.",
  },
  {
    num: "04",
    name: "Comfort & Accesso",
    desc: "Parcheggio in zona, tavoli all'esterno e seggioloni per bambini.",
  },
  {
    num: "05",
    name: "Pagamenti & Pet",
    desc: "Accettiamo Visa/Mastercard/AmEx. Siamo orgogliosamente Pet Friendly.",
  },
  {
    num: "06",
    name: "Passione Putignanese",
    desc: "Dal 1986, l'arte della carne nel cuore di Putignano.",
  }
];

const Menu = () => {
  return (
    <section 
      id="menu" 
      className="py-24 md:py-32 bg-transparent relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        <SectionHeader 
          subtitle="QUALITÀ E ACCOGLIENZA"
          title="I NOSTRI SERVIZI"
          align="left"
          className="mb-12"
        />

        <ScrollReveal 
          staggerChildren={0.1} 
          variant="fade-up"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {menuItems.map((item, index) => (
            <motion.article
              key={index}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group cursor-pointer p-8 transition-all duration-500 rounded-[2rem] border border-white/5 bg-white/5 hover:border-primary/20 fire-glow-card h-full"
              role="button"
              tabIndex={0}
            >
              <div className="flex flex-col gap-y-4 h-full">
                <span className="text-[14px] font-bold tracking-[0.10em] text-primary italic">
                  {item.num}
                </span>
                
                <div className="space-y-3">
                  <h3 className="text-[22px] md:text-[26px] font-black text-white uppercase italic tracking-tighter group-hover:text-primary transition-colors leading-none">
                    {item.name}
                  </h3>
                  <p className="text-base leading-relaxed text-white/60 font-normal italic">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </ScrollReveal>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button asChild className="rounded-full px-12 h-14 bg-primary hover:bg-primary/90 text-white font-black italic transition-all shadow-lg hover:shadow-primary/40 uppercase tracking-widest text-sm">
            <Link to="/menu">Vedi il Menu Completo</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
