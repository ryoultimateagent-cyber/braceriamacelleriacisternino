import { useState, useEffect } from "react";
import { Phone, Menu as MenuIcon, X } from "lucide-react";
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#f7f4ed]/90 backdrop-blur-md border-b border-[#eceae4] py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#" 
            className="group flex items-center gap-4 transition-transform duration-300"
            aria-label="Home - Macelleria Belvedere"
          >
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-semibold text-[#1c1c1c] tracking-[-0.03em] leading-none">
                BELVEDERE
              </span>
              <span className="text-[10px] font-medium text-[#1c1c1c]/60 tracking-[0.2em] uppercase leading-none mt-1">DAL 1986</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[13px] font-medium text-[#1c1c1c]/80 hover:text-[#1c1c1c] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
            <Button 
              asChild 
              variant="default"
              className="h-10 px-5 text-sm"
            >
              <a href="tel:+390804058608" className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5" />
                <span>Prenota</span>
              </a>
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-[6px] border border-[#eceae4] bg-[#f7f4ed] active:scale-95 transition-transform"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Apri menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-[#1c1c1c]" /> : <MenuIcon className="w-6 h-6 text-[#1c1c1c]" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-[#f7f4ed] flex flex-col p-8 lg:hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex flex-col">
                <span className="text-2xl font-semibold text-[#1c1c1c] tracking-[-0.03em]">BELVEDERE</span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="w-11 h-11 flex items-center justify-center rounded-[6px] border border-[#eceae4]"
                aria-label="Chiudi menu"
              >
                <X className="w-6 h-6 text-[#1c1c1c]" />
              </button>
            </div>
            
            <nav className="flex flex-col gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="text-3xl font-semibold text-[#1c1c1c] tracking-[-0.02em]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-auto"
            >
              <Button asChild variant="default" className="w-full h-14 text-lg">
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