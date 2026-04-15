import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FireBackground = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-black">
      {/* Base Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2000&auto=format&fit=crop")',
          opacity: isLoaded ? 0.15 : 0
        }}
      />
      
      {/* Dark Vignetts and Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
      
      {/* Animated Heat Glows */}
      <div className="absolute bottom-0 left-0 w-full h-[60vh] bg-gradient-to-t from-orange-950/40 via-red-950/10 to-transparent mix-blend-screen" />
      
      {/* Pulsing Ember Light */}
      <motion.div 
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] bg-orange-900/20 blur-[150px] rounded-full"
      />
      
      <motion.div 
        animate={{ 
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-red-900/20 blur-[150px] rounded-full"
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
    </div>
  );
};

export default FireBackground;