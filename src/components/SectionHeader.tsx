import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
  return (
    <div className={cn(
      "mb-12 md:mb-16",
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
          className="mb-4 block text-[#5f5f5d] text-sm font-normal tracking-[0.1em] uppercase"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn("text-3xl md:text-4xl lg:text-[48px] font-semibold text-[#1c1c1c] tracking-[-1.2px] leading-[1.1]", titleClassName)}
      >
        {title}
      </motion.h2>
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className={cn(
          "h-[2px] w-12 bg-[#1c1c1c] mt-6 origin-left",
          align === "center" && "mx-auto origin-center",
          align === "right" && "ml-auto origin-right"
        )} 
      />
    </div>
  );
};

export default SectionHeader;