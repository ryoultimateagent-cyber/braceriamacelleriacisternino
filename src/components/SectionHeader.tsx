import { cn } from "@/lib/utils";
import AnimatedSection from "./AnimatedSection";

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
        <AnimatedSection 
          animation="fade-up" 
          className="mb-4 block text-ember text-xs font-black uppercase tracking-[0.6em]"
        >
          {subtitle}
        </AnimatedSection>
      )}
      <AnimatedSection 
        animation="fade-up" 
        delay={0.1}
      >
        <h2 className={cn("text-4xl md:text-5xl lg:text-6xl font-display font-black text-foreground uppercase leading-[0.9] tracking-tighter", titleClassName)}>{title}</h2>
      </AnimatedSection>
    </div>
  );
};

export default SectionHeader;
