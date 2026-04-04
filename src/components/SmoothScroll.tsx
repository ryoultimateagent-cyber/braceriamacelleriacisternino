import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { useLocation } from 'react-router-dom';

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<Lenis | null>(null);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element && lenisRef.current) {
        lenisRef.current.scrollTo(element as HTMLElement, {
          offset: -80, // Account for fixed header
          duration: 1.2
        });
      }
    } else {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { duration: 0.5 });
      }
    }
  }, [pathname, hash]);

  return <>{children}</>;
};

export default SmoothScroll;

  return <>{children}</>;
};

export default SmoothScroll;
