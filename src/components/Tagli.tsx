import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import React from "react";

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

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

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
      className={`group relative h-full w-full overflow-hidden rounded-[2rem] bg-black border border-white/10 transition-all duration-300 fire-glow-card ${item.large ? 'col-span-1 lg:col-span-2 lg:row-span-2' : ''}`}
    >
      <div 
        style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <img 
           src={item.image} 
           alt={item.name} 
           className="h-full w-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      <div 
        style={{ transform: "translateZ(100px)" }}
        className="absolute inset-0 z-10 flex flex-col justify-end p-8 lg:p-12"
      >
        <span className="mb-4 inline-block w-fit rounded-full bg-primary/20 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-primary border border-primary/30">
          {item.category}
        </span>
        <h3 className={`font-black text-white uppercase italic tracking-tighter mb-4 ${item.large ? 'text-3xl lg:text-5xl' : 'text-xl lg:text-2xl'}`}>
          {item.name}
        </h3>
        {item.large && item.desc && (
           <p className="max-w-md text-white/60 text-lg font-medium leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
             {item.desc}
           </p>
        )}
        <div className="flex items-center justify-between pt-6 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="text-[10px] font-black uppercase tracking-widest text-white/40">SAPER FARE</span>
          <ArrowRight className="text-primary h-6 w-6" />
        </div>
      </div>
      
      {/* Animated Gradient Border */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-[-1px] rounded-[3rem] border border-primary/50" />
      </div>
    </motion.div>
  );
};

const Tagli = () => {
  return (
    <section id="brace" className="section-container section-spacing bg-transparent relative">
      <div className="mb-24 space-y-4">
        <span className="text-primary text-xs font-black uppercase tracking-[0.4em] block text-reveal italic">SELEZIONE DI QUALITÀ</span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[0.9] text-reveal uppercase italic">
          LE NOSTRE <br /> <span className="text-primary">SPECIALITÀ</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 min-h-[600px]">
        {tagli.map((taglio, i) => (
          <TiltCard key={i} item={taglio} />
        ))}
      </div>
    </section>
  );
};

export default Tagli;
