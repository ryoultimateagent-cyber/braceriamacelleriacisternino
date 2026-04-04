import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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

const TiltCard = ({ item }: { item: typeof tagli[0] }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`group relative h-full w-full overflow-hidden rounded-[2rem] bg-black border border-white/5 transition-all duration-300 fire-glow-card ${item.large ? 'col-span-1 lg:col-span-2 lg:row-span-2' : ''}`}
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
           src={item.image} 
           alt={item.name} 
           className="h-full w-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 lg:p-8">
        <span className="mb-3 inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-primary border border-primary/20">
          {item.category}
        </span>
        <h3 className={`font-black text-white uppercase italic tracking-tighter mb-3 ${item.large ? 'text-xl lg:text-3xl' : 'text-lg lg:text-xl'}`}>
          {item.name}
        </h3>
        {item.large && item.desc && (
           <p className="max-w-md text-white/50 text-sm font-medium leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
             {item.desc}
           </p>
        )}
        <div className="flex items-center justify-between pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="text-[9px] font-black uppercase tracking-widest text-white/40">SAPER FARE</span>
          <ArrowRight className="text-primary h-5 w-5" />
        </div>
      </div>
    </motion.div>
  );
};

const Tagli = () => {
  return (
    <section id="brace" className="section-container section-spacing bg-transparent relative">
      <SectionHeader 
        subtitle="SELEZIONE DI QUALITÀ"
        title="LE NOSTRE SPECIALITÀ"
        align="left"
        className="mb-12"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 min-h-[500px]">
        {tagli.map((taglio, i) => (
          <TiltCard key={i} item={taglio} />
        ))}
      </div>
    </section>
  );
};

export default Tagli;