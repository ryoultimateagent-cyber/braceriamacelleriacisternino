import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface CinematicSectionProps {
  children: ReactNode;
  className?: string;
  variant?: "fadeUp" | "fadeScale" | "slideLeft" | "slideRight" | "clipReveal" | "blurIn";
  parallaxAmount?: number;
  id?: string;
}

const CinematicSection = ({
  children,
  className,
  variant = "fadeUp",
  parallaxAmount = 0,
  id,
}: CinematicSectionProps) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });


  // Parallax calculations
  const y = useTransform(scrollYProgress, [0, 1], [0, parallaxAmount * 2.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.4, 1, 1, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.95, 1, 1, 0.95]);
  const blur = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], ["5px", "0px", "0px", "5px"]);
  
  // Animation variants
  const getVariants = () => {
    switch (variant) {
      case "fadeUp":
        return {
          hidden: { opacity: 0, y: 120, filter: "blur(10px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        };
      case "fadeScale":
        return {
          hidden: { opacity: 0, scale: 0.7, filter: "blur(15px)" },
          visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
        };
      case "slideLeft":
        return {
          hidden: { opacity: 0, x: -200, rotateY: 15 },
          visible: { opacity: 1, x: 0, rotateY: 0 },
        };
      case "slideRight":
        return {
          hidden: { opacity: 0, x: 200, rotateY: -15 },
          visible: { opacity: 1, x: 0, rotateY: 0 },
        };
      case "clipReveal":
        return {
          hidden: { clipPath: "inset(100% 0% 0% 0%)", opacity: 0, scale: 1.1 },
          visible: { clipPath: "inset(0% 0% 0% 0%)", opacity: 1, scale: 1 },
        };
      case "blurIn":
        return {
          hidden: { opacity: 0, filter: "blur(40px)", scale: 0.8 },
          visible: { opacity: 1, filter: "blur(0px)", scale: 1 },
        };
      default:
        return {
          hidden: { opacity: 0, y: 80 },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  const variants = getVariants();

  return (
    <motion.section
      id={id}
      ref={ref}
      style={{
        y: parallaxAmount !== 0 ? y : 0,
        opacity: (variant === "fadeUp" || variant === "blurIn" || variant === "fadeScale") ? opacity : undefined,
        scale: variant === "fadeScale" ? scale : undefined,
        filter: variant === "blurIn" ? blur : undefined,
        perspective: 1000,
        willChange: "transform, opacity, filter, clip-path",
      }}
      className={cn("relative overflow-hidden py-20 md:py-32", className)}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        variants={variants}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </motion.section>
  );
};

export default CinematicSection;
