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
      whileHover="hover"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-black border border-white/5 transition-all duration-300 fire-glow-card shadow-2xl cursor-pointer"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img 
           src={item.image} 
           alt={item.name} 
           variants={{
             hover: { y: -25, scale: 1.15, filter: "grayscale(0) brightness(1.1)", opacity: 1 }
           }}
           initial={{ y: 25, scale: 1.1, filter: "grayscale(1) brightness(0.4)", opacity: 0.6 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col justify-end p-8">
        <span className="mb-4 inline-block w-fit rounded-full bg-primary/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-primary border border-primary/20">
          {item.category}
        </span>
        <h3 className="text-[24px] lg:text-[28px] font-bold text-white uppercase italic tracking-tighter mb-4 leading-none">
          {item.name}
        </h3>
        <p className="max-w-md text-white/70 text-[15px] font-normal leading-[1.65] mb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          {item.desc}
        </p>
        <div className="flex items-center justify-between pt-6 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">SAPER FARE</span>
          <ArrowRight className="text-primary h-6 w-6" />
        </div>
      </div>
    </motion.div>
  );
};

const Tagli = () => {
  const featured = tagli[0];
  const others = tagli.slice(1);

  return (
    <section id="brace" className="section-container section-spacing bg-transparent relative">
      <SectionHeader 
        subtitle="SELEZIONE DI QUALITÀ"
        title="LE NOSTRE SPECIALITÀ"
        align="left"
        className="mb-12"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Featured Card */}
        <div className="lg:col-span-5 h-full">
          <TiltCard item={featured} />
        </div>

        {/* Vertical List */}
        <div className="lg:col-span-7 flex flex-col">
          {others.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover="hover"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col md:flex-row md:items-center py-6 md:py-8 group cursor-pointer relative"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}
            >
              <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden mr-6 relative border border-white/10 group-hover:border-primary/30 transition-colors">
                <motion.img 
                  src={item.image} 
                  alt={item.name}
                  variants={{
                    hover: { y: -15, scale: 1.2, filter: "grayscale(0) brightness(1.2)" }
                  }}
                  initial={{ y: 0, scale: 1, filter: "grayscale(1) brightness(0.7)" }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-1 flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-[20px] font-semibold text-white tracking-[-0.3px] uppercase italic group-hover:text-primary transition-colors duration-300">
                    {item.name}
                  </h3>
                  <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/40 group-hover:text-primary/70 transition-colors">
                    {item.category}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-[14px] leading-[1.6] text-white/55 font-normal max-w-md group-hover:text-white/80 transition-colors">
                    Esperienza artigianale e passione nel cuore di Putignano.
                  </p>
                  <div className="flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300">
                    <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/35">
                      SAPER FARE
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tagli;