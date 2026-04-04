import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SectionHeader from "./SectionHeader";

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
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      id="menu" 
      className="py-4 md:py-8 bg-transparent relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        <SectionHeader 
          subtitle="QUALITÀ E ACCOGLIENZA"
          title="I NOSTRI SERVIZI"
          align="left"
          className="mb-12"
        />

        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {menuItems.map((item, index) => (
            <article
              key={index}
              className="group cursor-pointer p-6 transition-all duration-500 rounded-[1.5rem] border border-white/5 bg-white/5 hover:border-primary/20"
              role="button"
              tabIndex={0}
            >
              <div className="flex flex-col gap-y-1.5">
                <span className="text-[11px] font-normal tracking-[0.10em] text-white/35 italic">
                  {item.num}
                </span>
                
                <div className="space-y-2.5">
                  <h3 className="text-[17px] font-semibold text-white uppercase italic tracking-[0.04em] group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-[14px] leading-[1.60] text-white/70 font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="rounded-full px-12 h-14 bg-primary hover:bg-primary/90 text-white font-black italic transition-all shadow-lg hover:shadow-primary/40 uppercase tracking-widest text-sm">
            <Link to="/menu">Vedi il Menu Completo</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;