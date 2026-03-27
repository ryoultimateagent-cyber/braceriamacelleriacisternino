import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-in" | "scale-up" | "none";
}

const AnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0, 
  animation = "fade-up" 
}: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  const getInitial = () => {
    if (shouldReduceMotion || animation === "none") return { opacity: 1, y: 0, scale: 1 };
    
    switch (animation) {
      case "fade-up": return { opacity: 0, y: 60 };
      case "fade-in": return { opacity: 0 };
      case "scale-up": return { opacity: 0, scale: 0.95 };
      default: return { opacity: 0, y: 60 };
    }
  };

  const getAnimate = () => {
    if (shouldReduceMotion || animation === "none") return { opacity: 1, y: 0, scale: 1 };
    
    if (!isInView) return getInitial();
    
    return { opacity: 1, y: 0, scale: 1 };
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={getAnimate()}
      transition={{ 
        duration: shouldReduceMotion ? 0 : 0.8, 
        delay: shouldReduceMotion ? 0 : delay, 
        ease: "easeOut" 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
