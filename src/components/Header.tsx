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
    { href: "#takeaway", label: "Take-away" },
    { href: "#prenota", label: "Prenota" },
  ];

  return (
    <motion.header
      role="banner"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-noir/90 backdrop-blur-xl border-b border-white/5 py-2"
          : "bg-transparent py-4 lg:py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#" 
          className="group flex items-center gap-6 focus-visible:ring-2 focus-visible:ring-gold rounded-lg p-1 transition-all"
          aria-label="Home - Macelleria Braceria Belvedere"
        >
          <div className="flex flex-col items-center">
             <span className="text-2xl lg:text-3xl font-display font-black text-gold tracking-tighter leading-none mb-1">BELVEDERE</span>
             <div className="h-px w-full bg-gold/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
             <span className="text-[10px] font-display font-bold text-gold/60 tracking-[0.5em] uppercase leading-none mt-1">EST. 1980</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-8" aria-label="Main Navigation">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs font-semibold text-cream/70 uppercase tracking-widest relative py-2 hover:text-gold transition-colors duration-300 focus-visible:text-gold group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
          
          <Button 
            asChild 
            size="lg"
            className="h-12 px-8 bg-gold hover:bg-gold-dark text-noir rounded-none font-black uppercase tracking-widest text-[10px] transition-all duration-500"
          >
            <a href="tel:+393403824158" className="flex items-center gap-3">
              <Phone className="w-4 h-4" />
              Chiama
            </a>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="xl:hidden p-3 text-gold z-50 relative hover:bg-white/5 rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-gold"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? "Chiudi menu" : "Apri menu"}
        >
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="xl:hidden fixed inset-0 bg-noir z-40 flex flex-col p-8 pt-24"
          >
            <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-3xl font-display font-bold text-cream hover:text-gold transition-colors py-2 border-b border-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="mt-8"
              >
                <Button 
                  asChild 
                  variant="gold" 
                  size="lg" 
                  className="w-full h-14 text-lg uppercase tracking-widest"
                >
                  <a href="tel:+393403824158" onClick={() => setIsMobileMenuOpen(false)}>
                    <Phone className="w-5 h-5 mr-3" />
                    Prenota Ora
                  </a>
                </Button>
              </motion.div>
            </nav>
            
            <div className="mt-auto pt-12 text-center text-white/60 text-sm">
              <p>© {new Date().getFullYear()} Macelleria Braceria Belvedere</p>
              <p className="mt-2 uppercase tracking-tighter">Eccellenza e Qualità</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;