import { ArrowUp } from "lucide-react";
import logo from "@/assets/logo-cisternino.jpg";

const Footer = () => {
  return (
    <footer className="bg-noir border-t border-fire/30 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img
                src={logo}
                alt="Braceria Macelleria Cisternino"
                className="w-16 h-16 object-contain rounded"
              />
              <div className="font-elegant leading-tight">
                <div className="text-lg font-bold text-gold">Braceria Macelleria</div>
                <div className="text-xs text-gold-light tracking-widest uppercase">Cisternino</div>
              </div>
            </div>
            <p className="text-gold-light leading-relaxed">
              Dal 1920, tradizione e passione nella selezione della carne e nell'arte della brace.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-elegant text-xl font-semibold text-fire mb-6">
              Link Rapidi
            </h4>
            <div className="space-y-3">
              {["Storia", "Brace", "Menù", "Vini", "Take-away", "Prenota"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace("ù", "u")}`}
                  className="block text-gold-light hover:text-fire hover:translate-x-1 transition-all duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-elegant text-xl font-semibold text-fire mb-6">
              Contatti
            </h4>
            <div className="space-y-3 text-gold-light">
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
                className="block hover:text-fire transition-colors"
              >
                info@braceriacisternino.it
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-elegant text-xl font-semibold text-fire mb-6">
              Orari
            </h4>
            <div className="space-y-3 text-gold-light">
              <p>Martedì - Domenica</p>
              <p>12:00 - 15:00</p>
              <p>19:00 - 23:00</p>
              <p className="text-fire font-semibold">Lunedì: Chiuso</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center pt-8 border-t border-fire/20">
          <p className="text-gold-light mb-6">
            © {new Date().getFullYear()} Braceria Macelleria Cisternino. Tutti i diritti riservati.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 border border-fire text-fire font-semibold uppercase tracking-wider hover:bg-fire hover:text-cream transition-all duration-400"
          >
            <ArrowUp className="w-4 h-4" />
            Torna Su
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
