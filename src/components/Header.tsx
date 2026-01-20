import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo-cisternino.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#050505] shadow-[0_4px_30px_rgba(0,0,0,0.8)] border-b border-fire/50"
          : "bg-[#0a0a0a]/98 backdrop-blur-md border-b border-gold/10"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-3 lg:py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Braceria Macelleria Cisternino"
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain rounded"
          />
          <div className="hidden sm:block font-elegant leading-tight">
            <div className="text-sm lg:text-lg font-bold text-gold tracking-wide uppercase">
              Braceria Macelleria
            </div>
            <div className="text-[10px] lg:text-xs font-normal text-gold-light tracking-[3px] uppercase">
              Cisternino
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs 2xl:text-sm font-medium text-cream uppercase tracking-wider relative hover:text-fire transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-5px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1px] after:bg-fire after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+393403824158"
            className="px-4 2xl:px-6 py-2 2xl:py-3 bg-fire text-cream text-xs 2xl:text-sm font-semibold uppercase tracking-wider transition-all duration-400 hover:bg-fire-dark flex items-center gap-2"
          >
            <Phone className="w-3 h-3 2xl:w-4 2xl:h-4" />
            Chiama
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="xl:hidden p-2 text-gold z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="xl:hidden fixed inset-0 bg-[#050505] flex flex-col items-center justify-center gap-6 z-40"
          >
            {/* Logo in mobile menu */}
            <img
              src={logo}
              alt="Braceria Macelleria Cisternino"
              className="w-20 h-20 object-contain rounded mb-4"
            />
            
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="text-lg font-medium text-cream uppercase tracking-wider hover:text-fire transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.05 }}
              href="tel:+393403824158"
              className="mt-4 px-8 py-4 bg-fire text-cream font-semibold uppercase tracking-wider hover:bg-fire-dark transition-all flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Phone className="w-5 h-5" />
              Chiama Ora
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
