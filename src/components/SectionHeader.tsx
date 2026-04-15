import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  className?: string;
  titleClassName?: string;
  align?: "center" | "left" | "right";
}

const SectionHeader = ({ 
  subtitle, 
  title, 
  className, 
  titleClassName,
  align = "center" 
}: SectionHeaderProps) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 20, rotateX: -90 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <div className={cn(
      "mb-8 md:mb-12 overflow-hidden",
      align === "center" && "text-center",
      align === "left" && "text-left",
      align === "right" && "text-right",
      className
    )}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-2 block text-primary text-[14px] font-semibold uppercase tracking-[0.06em] italic whitespace-nowrap"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={cn(
          "text-[32px] md:text-[42px] lg:text-[52px] font-black text-white tracking-tighter leading-[0.9] uppercase italic flex flex-wrap overflow-hidden",
          align === "center" && "justify-center",
          align === "right" && "justify-end",
          titleClassName
        )}
      >
        {title.split(" ").map((word, wordIndex) => (
          <span key={wordIndex} className="inline-flex mr-[0.2em] whitespace-nowrap">
            {word.split("").map((char, charIndex) => (
              <motion.span
                key={charIndex}
                variants={letterVariants}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.h2>
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "h-[2px] w-24 bg-primary mt-6 rounded-full",
          align === "center" && "mx-auto origin-center",
          align === "left" && "origin-left",
          align === "right" && "ml-auto origin-right"
        )} 
      />
    </div>
  );
};

export default SectionHeader;
