import { useState, useEffect } from "react";
import { Menu, X, Phone, ChefHat } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "#storia", label: "Storia" },
    { href: "#brace", label: "Brace" },
    { href: "#galleria", label: "Galleria" },
    { href: "#menu", label: "Menù" },
    { href: "#vini", label: "Vini" },
    
    { href: "#prenota", label: "Prenota" },
    { href: "#dovesiamo", label: "Dove Siamo" },
  ];

  return (
    <motion.header
      role="banner"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-500 rounded-2xl ${
        isScrolled
          ? "bg-white/70 backdrop-blur-xl border border-white/20 shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#" 
          className="group flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1 transition-all"
          aria-label="Home - Macelleria Belvedere"
        >
          <div className="flex flex-col items-start">
             <span className="text-xl md:text-2xl font-bold text-foreground tracking-tight leading-none">
              BELVEDERE<span className="text-primary">.</span>
             </span>
             <span className="text-[10px] font-medium text-muted-foreground tracking-[0.3em] uppercase leading-none mt-1">EST. 1986</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10" aria-label="Main Navigation">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-all duration-300 relative group focus-visible:text-primary outline-none"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
          
          <Button 
            asChild 
            className="rounded-xl px-6 bg-primary hover:bg-primary/90 text-white font-bold transition-all shadow-md hover:shadow-primary/20"
          >
            <a href="tel:+390804058608" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>PRENOTA</span>
            </a>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-foreground z-50 relative hover:bg-black/5 rounded-xl transition-colors w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus-visible:ring-2 focus-visible:ring-primary outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? "Chiudi menu" : "Apri menu"}
        >
          <motion.span
            animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-current block rounded-full"
          />
          <motion.span
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-current block rounded-full"
          />
          <motion.span
            animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-current block rounded-full"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden absolute top-full left-0 right-0 mt-4 bg-white/95 backdrop-blur-2xl rounded-3xl border border-black/5 shadow-2xl p-8 flex flex-col gap-6"
          >
            <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="text-2xl font-bold text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4 pt-4 border-t border-black/5"
              >
                <Button 
                  asChild 
                  className="w-full h-14 bg-primary hover:bg-primary/90 text-white text-lg font-bold rounded-2xl"
                >
                  <a href="tel:+390804058608" onClick={() => setIsMobileMenuOpen(false)}>
                    <Phone className="w-5 h-5 mr-2" />
                    PRENOTA ORA
                  </a>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;