import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
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

  const navLinks = [
    { href: "#storia", label: "Storia" },
    { href: "#brace", label: "Brace" },
    { href: "#menu", label: "Menù" },
    { href: "#vini", label: "Vini" },
    { href: "#takeaway", label: "Take-away" },
    { href: "#prenota", label: "Prenota" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-noir/98 shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-fire"
          : "bg-noir/95 backdrop-blur-xl border-b border-gold/20"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-4">
          <img
            src={logo}
            alt="Braceria Macelleria Cisternino"
            className="w-14 h-14 object-contain rounded"
          />
          <div className="hidden sm:block font-elegant leading-tight">
            <div className="text-lg font-bold text-gold tracking-wide uppercase">
              Braceria Macelleria
            </div>
            <div className="text-xs font-normal text-gold-light tracking-[3px] uppercase">
              Cisternino
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cream uppercase tracking-wider relative hover:text-fire transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-5px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1px] after:bg-fire after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+393403824158"
            className="px-6 py-3 border border-fire text-fire text-sm font-semibold uppercase tracking-wider transition-all duration-400 hover:bg-fire hover:text-cream flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Chiama Ora
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-gold"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-full h-screen bg-noir flex flex-col items-center justify-center gap-8 transition-transform duration-500 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-xl font-medium text-cream uppercase tracking-wider hover:text-fire transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="tel:+393403824158"
          className="px-8 py-4 border border-fire text-fire font-semibold uppercase tracking-wider hover:bg-fire hover:text-cream transition-all"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Chiama Ora
        </a>
      </div>
    </header>
  );
};

export default Header;
