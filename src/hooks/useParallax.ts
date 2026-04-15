import { useScroll, useTransform, useSpring, UseScrollOptions } from "framer-motion";
import { useRef } from "react";

type ScrollOffset = UseScrollOptions["offset"];

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
  offset: ScrollOffset = ["start end", "end start"]
) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  return { ref, scrollYProgress };
};
