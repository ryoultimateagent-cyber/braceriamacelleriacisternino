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
      "mb-16 md:mb-24",
      align === "center" && "text-center",
      align === "left" && "text-left",
      align === "right" && "text-right",
      className
    )}>
      {subtitle && (
        <AnimatedSection 
          animation="fade-up" 
          className="mb-4 block text-primary text-xs font-bold uppercase tracking-[0.4em]"
        >
          {subtitle}
        </AnimatedSection>
      )}
      <AnimatedSection 
        animation="fade-up" 
        delay={0.1}
      >
        <h2 className={cn("text-4xl md:text-5xl lg:text-7xl font-black text-foreground tracking-tight leading-[1.1]", titleClassName)}>
          {title}
        </h2>
      </AnimatedSection>
      <div className={cn(
        "h-1.5 w-20 bg-primary mt-8 rounded-full",
        align === "center" && "mx-auto",
        align === "right" && "ml-auto"
      )} />
    </div>
  );
};

export default SectionHeader;
