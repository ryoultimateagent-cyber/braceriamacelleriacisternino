import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Reduced failsafe

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 300); // Reduced delay
          return 100;
        }
        return prev + 2; // Faster increment
      });
    }, 20);
    
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1 }} // Simpler exit for better perf
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center"
        >
          <div className="relative mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
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
               transition={{ ease: "linear" }}
             />
          </div>
          
          <span className="mt-4 text-[10px] font-black text-white/40 tracking-[0.5em] uppercase">Loading {progress}%</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default React.memo(LoadingScreen);
