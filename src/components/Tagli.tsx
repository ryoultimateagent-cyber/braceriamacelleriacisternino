import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import React from "react";
import SectionHeader from "./SectionHeader";

const tagli = [
  {
    name: "Fiorentina alla brace",
    category: "Specialità",
    desc: "Taglio di carne bovina pregiata, cotta sulla brace per esaltarne il sapore autentico.",
    image: gallery1,
    large: true
  },
  {
    name: "Spiedini artigianali",
    category: "Fatti a mano",
    image: gallery2
  },
  {
    name: "Polpette fatte in casa",
    category: "Tradizione",
    image: gallery3
  },
  {
    name: "Salsicce artigianali",
    category: "Produzione propria",
    image: gallery1
  },
  {
    name: "Hamburger su misura",
    category: "Personalizzati",
    image: gallery2
  }
];

const TaglioCard = ({ item }: { item: typeof tagli[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`group relative h-full w-full overflow-hidden rounded-[12px] bg-white border border-[#eceae4] transition-all duration-300 hover:border-[#1c1c1c]/40 ${item.large ? 'col-span-1 md:col-span-2' : ''}`}
    >
      <div className="aspect-[4/3] md:aspect-auto md:h-full w-full overflow-hidden">
        <img 
           src={item.image} 
           alt={item.name} 
           className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c]/80 via-[#1c1c1c]/20 to-transparent" />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-8">
        <span className="mb-3 inline-block w-fit rounded-[4px] bg-[#f7f4ed]/10 backdrop-blur-md px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#fcfbf8] border border-white/20">
          {item.category}
        </span>
        <h3 className={`font-semibold text-[#fcfbf8] tracking-[-0.02em] mb-2 ${item.large ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
          {item.name}
        </h3>
        {item.large && item.desc && (
           <p className="max-w-md text-[#fcfbf8]/70 text-sm font-normal leading-relaxed mb-4 hidden md:block">
             {item.desc}
           </p>
        )}
        <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-2">
          <span className="text-[10px] font-medium uppercase tracking-widest text-[#fcfbf8]/60">Scopri di più</span>
          <ArrowRight className="text-[#fcfbf8] h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </motion.div>
  );
};

const Tagli = () => {
  return (
    <section id="brace" className="bg-[#f7f4ed] py-20 md:py-28">
      <div className="section-container">
        <SectionHeader 
          subtitle="SELEZIONE DI QUALITÀ"
          title="Le Nostre Specialità"
          align="left"
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {tagli.map((taglio, i) => (
            <TaglioCard key={i} item={taglio} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tagli;