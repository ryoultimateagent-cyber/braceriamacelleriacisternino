import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "./SectionHeader";
import { useParallax } from "@/hooks/useParallax";

const timelineData = [
  {
    year: "1986",
    title: "Le Radici",
    text: "La Macelleria Belvedere nasce nel cuore di Putignano. Una passione di famiglia dedicata alla selezione delle migliori carni.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200"
  },
  {
    year: "Tradizione",
    title: "Qualità e Passione",
    text: "Offriamo una ricca selezione di carni fresche durante il giorno e un servizio braceria serale per gustare le nostre specialità.",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=1200"
  },
  {
    year: "Oggi",
    title: "Macelleria & Braceria",
    text: "Qualità, tradizione e passione in ogni taglio. Continuiamo a servire la nostra comunità con la stessa dedizione di sempre.",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6e9481bfa?auto=format&fit=crop&q=80&w=1200"
  },
];

const TimelineItem = ({ item, index }: { item: typeof timelineData[0], index: number }) => {
  const { ref: imageRef, transform: imageY } = useParallax(40);
  const { ref: textRef, transform: textY } = useParallax(-20);
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}>
      {/* Image Column */}
      <div ref={imageRef} className="w-full lg:w-1/2 group relative">
        <motion.div 
          style={{ y: imageY }}
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[16/10] rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl fire-glow-card"
        >
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-110 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="absolute top-6 right-8 text-6xl font-black text-white/10 italic select-none"
          >
            0{index + 1}
          </motion.span>
        </motion.div>
      </div>
      
      {/* Text Column */}
      <div ref={textRef} className={`w-full lg:w-1/2 ${!isEven ? "lg:text-right" : "lg:text-left"}`}>
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-primary font-bold text-base mb-2 block italic uppercase tracking-wider">{item.year}</span>
          <h3 className="text-[32px] md:text-[42px] lg:text-[52px] font-black text-white mb-6 uppercase italic tracking-tighter leading-[0.9]">{item.title}</h3>
          <p className="text-white/60 text-base md:text-lg lg:text-xl font-normal leading-relaxed max-w-xl italic">
            {item.text}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

const Storia = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="storia" ref={containerRef} className="py-24 md:py-32 bg-transparent relative overflow-hidden">
      {/* Background Timeline Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2 hidden lg:block">
        <motion.div 
          className="absolute top-0 left-0 w-full bg-primary origin-top h-full"
          style={{ scaleY }}
        />
      </div>

      <div className="section-container relative z-10 mb-20">
        <SectionHeader 
          subtitle="CHI SIAMO"
          title="LA NOSTRA STORIA"
          align="center"
          className="mb-0"
        />
      </div>

      <div className="section-container relative z-10 space-y-32 md:space-y-48">
        {timelineData.map((item, i) => (
          <TimelineItem key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Storia;
