import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
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
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
          className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center"
        >
          <div className="relative mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black italic uppercase text-white tracking-tighter"
            >
              BELVEDERE<span className="text-primary">.</span>
            </motion.h1>
          </div>
          
          <div className="w-64 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
             <motion.div 
               initial={{ scaleX: 0 }}
               animate={{ scaleX: progress / 100 }}
               className="absolute inset-0 bg-primary origin-left"
             />
          </div>
          
          <span className="mt-4 text-xs font-black text-white/40 tracking-[0.5em] uppercase">Loading {progress}%</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
