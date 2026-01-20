import { Phone, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo-cisternino.jpg";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-[#050505]/70 to-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(139,21,56,0.2)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(212,175,55,0.15)_0%,transparent_50%)]" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-20 sm:pt-24"
      >
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block px-6 sm:px-8 py-2 sm:py-3 border border-gold text-gold font-accent text-xs sm:text-sm font-semibold tracking-[4px] sm:tracking-[6px] uppercase mb-6 sm:mb-8 relative"
        >
          <span className="absolute -top-1 -left-1 w-2 h-2 bg-fire" />
          <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-fire" />
          Dal 1920
        </motion.div>

        {/* Logo in intro */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center mb-6 sm:mb-8"
        >
          <img
            src={logo}
            alt="Braceria Macelleria Cisternino Logo"
            className="w-24 h-24 sm:w-32 sm:h-32 object-contain rounded-lg shadow-2xl"
          />
        </motion.div>

        {/* Title - Stylized italic font */}
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hero-title text-4xl sm:text-6xl lg:text-8xl xl:text-9xl text-cream mb-2 sm:mb-4"
        >
          Il Tempio
        </motion.h1>
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hero-title text-gradient-fire text-4xl sm:text-6xl lg:text-8xl xl:text-9xl mb-6 sm:mb-8"
        >
          della Brace
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-accent text-lg sm:text-xl lg:text-2xl text-gold-light italic tracking-wide mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4"
        >
          Dove tradizione, passione e eccellenza<br className="hidden sm:block" />
          <span className="sm:hidden"> </span>si incontrano dal 1920
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4"
        >
          <a
            href="tel:+393403824158"
            className="px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-fire to-fire-dark text-cream font-bold uppercase tracking-wider text-xs sm:text-sm shadow-[0_10px_30px_rgba(139,21,56,0.3)] hover:translate-y-[-3px] hover:shadow-[0_15px_40px_rgba(139,21,56,0.5)] transition-all duration-400 flex items-center justify-center gap-3"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            Prenota il Tuo Tavolo
          </a>
          <a
            href="#menu"
            className="px-6 sm:px-10 py-4 sm:py-5 border-2 border-cream text-cream font-bold uppercase tracking-wider text-xs sm:text-sm hover:bg-cream hover:text-noir hover:translate-y-[-3px] transition-all duration-400"
          >
            Esplora il Menù
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        href="#intro"
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-gold animate-bounce"
      >
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8" />
      </motion.a>
    </section>
  );
};

export default Hero;
