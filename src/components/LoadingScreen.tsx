import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 15);
    
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[10000] bg-[#f7f4ed] flex flex-col items-center justify-center"
        >
          <div className="relative mb-8">
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl font-semibold text-[#1c1c1c] tracking-[-0.03em]"
            >
              BELVEDERE
            </motion.h1>
          </div>
          
          <div className="w-48 h-[1px] bg-[#1c1c1c]/10 overflow-hidden relative">
             <motion.div 
               initial={{ scaleX: 0 }}
               animate={{ scaleX: progress / 100 }}
               className="absolute inset-0 bg-[#1c1c1c] origin-left"
             />
          </div>
          
          <span className="mt-4 text-[10px] font-medium text-[#1c1c1c]/40 tracking-[0.2em] uppercase">Loading {progress}%</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;