import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import logoImg from "@/assets/logo-cisternino.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#storia", label: "La Nostra Storia" },
    { href: "#menu", label: "Il Menù" },
    { href: "#brace", label: "La Brace" },
    { href: "#vini", label: "Vini" },
    { href: "#galleria", label: "Galleria" },
    { href: "#recensioni", label: "Dicono di Noi" },
    { href: "#dovesiamo", label: "Contatti" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "glass py-3" : "bg-transparent py-6"
        }`}
      >
        {/* Animated bottom border gradient */}
        {isScrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-pulse" />
        )}

        <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#" 
            className="group flex items-center gap-4 transition-transform duration-300 hover:scale-105"
            aria-label="Home - Macelleria Belvedere"
          >
            <div className="relative h-10 md:h-12 aspect-square rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary/50 transition-colors shadow-[0_0_20px_rgba(204,0,0,0.2)]">
              <img 
                src={logoImg} 
                alt="Logo Macelleria Belvedere" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-black text-white tracking-tighter leading-none font-display uppercase italic">
                BELVEDERE<span className="text-primary">.</span>
              </span>
              <span className="text-[9px] font-bold text-white/50 tracking-[0.4em] uppercase leading-none mt-1">DAL 1986</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs font-black uppercase tracking-widest text-white/70 hover:text-white transition-all duration-300 relative group overflow-hidden"
                  >
                    <span className="relative z-10">{link.label}</span>
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary transform translate-y-1 transition-transform duration-300 group-hover:translate-y-0" />
                    <span 
                      className="absolute inset-0 bg-primary/10 transition-all duration-300 -translate-x-full group-hover:translate-x-0" 
                      style={{ clipPath: 'inset(0 0 0 0)' }}
                    />
                  </a>
                </li>
              ))}
            </ul>
            
            <Button 
              asChild 
              className="rounded-full px-6 h-10 bg-primary hover:bg-primary/90 text-white font-black transition-all shadow-lg hover:shadow-primary/40 uppercase italic tracking-tighter"
            >
              <a href="tel:+390804058608" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>Prenota</span>
              </a>
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white block rounded-full"
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white block rounded-full"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-2xl flex flex-col p-10 lg:hidden"
          >
            <div className="flex justify-between items-center mb-16">
             <div className="flex items-center gap-3">
               <div className="h-10 w-10 rounded-full overflow-hidden border border-primary/30">
                 <img src={logoImg} alt="" className="w-full h-full object-cover" />
               </div>
               <span className="text-3xl font-black italic">BELVEDERE<span className="text-primary">.</span></span>
             </div>
             <button onClick={() => setIsMobileMenuOpen(false)} className="text-white text-sm font-bold tracking-widest uppercase opacity-50">Chiudi</button>
            </div>
            
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.06 }}
                  className="text-4xl font-black italic uppercase tracking-tighter hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-auto"
            >
              <Button asChild className="w-full h-16 rounded-2xl bg-primary text-xl font-black italic uppercase tracking-tighter">
                <a href="tel:+390804058608">Prenota Ora</a>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
