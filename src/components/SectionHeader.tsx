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
      "mb-12", // Reduced from mb-12/16 to mb-12 as per plan
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
          className="mb-4 block text-primary text-xs font-black uppercase tracking-[0.4em] italic"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        // Uniform titles: text-3xl md:text-4xl lg:text-5xl
        className={cn("text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[0.9] uppercase italic", titleClassName)}
      >
        {title}
      </motion.h2>
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className={cn(
          "h-1 w-16 bg-primary mt-6 rounded-full origin-left", // Reduced size and margin
          align === "center" && "mx-auto origin-center",
          align === "right" && "ml-auto origin-right"
        )} 
      />
    </div>
  );
};

export default SectionHeader;