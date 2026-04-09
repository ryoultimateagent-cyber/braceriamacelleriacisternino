import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import logoBelvedere from "@/assets/logo-belvedere.png";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";


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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/#storia", label: "La Nostra Storia" },
    { href: "/menu", label: "Il Nostro Menu" },
    { href: "/#brace", label: "La Brace" },
    { href: "/#vini", label: "Vini" },
    { href: "/#galleria", label: "Galleria" },
    { href: "/#recensioni", label: "Dicono di Noi" },
    { href: "/#dovesiamo", label: "Contatti" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "glass py-1.5" : "bg-transparent py-3"
        }`}
      >
        {/* Animated bottom border gradient */}
        {isScrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-pulse" />
        )}

        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo Section (Left) */}
          <div className="flex items-center">
            <a 
              href="/" 
              className="group flex items-center gap-2 md:gap-3 transition-transform duration-300 hover:scale-105"
              aria-label="Home - Macelleria Belvedere"
            >
              <img src={logoBelvedere} alt="Logo Macelleria Belvedere" className="h-10 md:h-12 w-auto object-contain brightness-0 invert" />
              <div className="flex flex-col whitespace-nowrap">
                <span className="text-lg md:text-2xl font-black text-white tracking-tighter leading-none font-display uppercase italic">
                  BELVEDERE<span className="text-primary">.</span>
                </span>
                <span className="text-[8px] md:text-[10px] font-bold text-white/50 tracking-[0.3em] md:tracking-[0.4em] uppercase leading-none mt-1">DAL 1986</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation (Center/Right) */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-12">
            <ul className="flex items-center gap-4 xl:gap-8 flex-nowrap">
              {navLinks.map((link) => (
                <li key={link.href} className="flex-shrink-0">
                  <a
                    href={link.href}
                    className="text-[10px] xl:text-xs font-black uppercase tracking-wider xl:tracking-widest text-white/80 hover:text-white transition-all duration-300 relative group overflow-hidden whitespace-nowrap"
                  >
                    <span className="relative z-10">{link.label}</span>
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary transform translate-y-1 transition-transform duration-300 group-hover:translate-y-0" />
                  </a>
                </li>
              ))}
            </ul>
            
            <Button 
              asChild 
              className="rounded-full px-6 xl:px-8 h-10 xl:h-12 bg-primary hover:bg-primary/90 text-white font-black transition-all shadow-lg hover:shadow-primary/40 uppercase italic tracking-tighter text-sm flex-shrink-0"
            >
              <a href="tel:+390804058608" className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5" />
                <span>Prenota</span>
              </a>
            </Button>
          </nav>

          {/* Mobile Toggle (Right) */}
          <button
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-50 ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={isMobileMenuOpen}
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
              <div className="flex items-center gap-2">
                <img src={logoBelvedere} alt="Logo Macelleria Belvedere" className="h-10 w-auto object-contain brightness-0 invert" />
                <span className="text-2xl font-black italic">BELVEDERE<span className="text-primary">.</span></span>
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
