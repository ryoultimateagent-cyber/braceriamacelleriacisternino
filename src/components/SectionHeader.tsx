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
      "mb-8 md:mb-12",
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
          className="mb-2 block text-primary text-[14px] font-semibold uppercase tracking-[0.06em] italic"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn("text-[24px] md:text-[28px] lg:text-[32px] font-bold text-white tracking-[-1px] leading-none uppercase italic", titleClassName)}
      >
        {title}
      </motion.h2>
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className={cn(
          "h-[2px] w-16 bg-primary mt-6 rounded-full origin-left",
          align === "center" && "mx-auto origin-center",
          align === "right" && "ml-auto origin-right"
        )} 
      />
    </div>
  );
};

export default SectionHeader;