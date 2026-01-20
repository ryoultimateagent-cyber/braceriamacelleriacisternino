import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo-cisternino.jpg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050505] border-t border-fire/30 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Logo & About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <img
                src={logo}
                alt="Braceria Macelleria Cisternino"
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded"
              />
              <div className="font-elegant leading-tight">
                <div className="text-base sm:text-lg font-bold text-gold">Braceria Macelleria</div>
                <div className="text-[10px] sm:text-xs text-gold-light tracking-widest uppercase">Cisternino</div>
              </div>
            </div>
            <p className="text-gold-light leading-relaxed text-sm sm:text-base">
              Dal 1920, tradizione e passione nella selezione della carne e nell'arte della brace.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-elegant text-lg sm:text-xl font-semibold text-fire mb-4 sm:mb-6">
              Link Rapidi
            </h4>
            <div className="space-y-2 sm:space-y-3">
              {["Storia", "Brace", "Galleria", "Menù", "Vini", "Take-away", "Prenota"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace("ù", "u")}`}
                  className="block text-gold-light hover:text-fire hover:translate-x-1 transition-all duration-300 text-sm sm:text-base"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-elegant text-lg sm:text-xl font-semibold text-fire mb-4 sm:mb-6">
              Contatti
            </h4>
            <div className="space-y-2 sm:space-y-3 text-gold-light text-sm sm:text-base">
              <p>Via Mentana, 50</p>
              <p>70042 Mola di Bari (BA)</p>
              <a
                href="tel:+393403824158"
                className="block hover:text-fire transition-colors"
              >
                +39 340 38 24 158
              </a>
              <a
                href="mailto:info@braceriacisternino.it"
                className="block hover:text-fire transition-colors break-all"
              >
                info@braceriacisternino.it
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-elegant text-lg sm:text-xl font-semibold text-fire mb-4 sm:mb-6">
              Orari
            </h4>
            <div className="space-y-2 sm:space-y-3 text-gold-light text-sm sm:text-base">
              <p>Martedì - Domenica</p>
              <p>12:00 - 15:00</p>
              <p>19:00 - 23:00</p>
              <p className="text-fire font-semibold">Lunedì: Chiuso</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center pt-6 sm:pt-8 border-t border-fire/20">
          <p className="text-gold-light mb-4 sm:mb-6 text-xs sm:text-sm">
            © {new Date().getFullYear()} Braceria Macelleria Cisternino. Tutti i diritti riservati.
          </p>
          <motion.button
            whileHover={{ y: -3 }}
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-2 sm:py-3 border border-fire text-fire font-semibold uppercase tracking-wider text-xs sm:text-sm hover:bg-fire hover:text-cream transition-all duration-400"
          >
            <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4" />
            Torna Su
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
