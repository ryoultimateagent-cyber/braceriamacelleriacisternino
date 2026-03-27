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
          className="mb-3 block text-gold-light/80 tracking-[0.2em] text-xs md:text-sm font-medium uppercase"
        >
          {subtitle}
        </AnimatedSection>
      )}
      <AnimatedSection 
        animation="fade-up" 
        delay={0.1}
        className={cn(
          "relative inline-block",
          align === "center" && "section-divider"
        )}
      >
        <h2 className={cn("font-display mb-0", titleClassName)}>{title}</h2>
      </AnimatedSection>
    </div>
  );
};

export default SectionHeader;
