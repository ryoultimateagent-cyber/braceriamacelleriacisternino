import { useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { useRef } from "react";

interface UseParallaxOptions {
  distance?: number;
  direction?: "y" | "x";
  springConfig?: {
    stiffness: number;
    damping: number;
    restDelta: number;
  };
}

export const useParallax = (
  distance: number = 50,
  direction: "y" | "x" = "y",
  springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const transform = useTransform(scrollYProgress, [0, 1], [-distance, distance]);
  const spring = useSpring(transform, springConfig);

  return { ref, transform: spring };
};

export const useScrollProgress = (
  offset: [string, string] = ["start end", "end start"]
) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  return { ref, scrollYProgress };
};
