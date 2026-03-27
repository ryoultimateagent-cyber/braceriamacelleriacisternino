import { ArrowUp, Instagram, Facebook, MapPin, Phone, Mail, Award } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo-cisternino.jpg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-noir pt-24 pb-12 relative overflow-hidden">
      {/* Decorative gradient divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-fire/30 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-20 mb-20">
          {/* Brand Identity Side */}
          <div className="lg:col-span-5 space-y-10">
            <div className="flex items-center gap-6">
              <img
                src={logo}
                alt="Braceria Macelleria Cisternino"
                className="w-16 h-16 lg:w-24 lg:h-24 object-contain rounded-2xl shadow-2xl border border-white/5"
              />
              <div className="font-display leading-none">
                <div className="text-2xl lg:text-3xl font-bold text-gold tracking-tight uppercase">Braceria Macelleria</div>
                <div className="text-[10px] lg:text-xs text-gold-light/40 tracking-[0.4em] uppercase mt-2">Cisternino</div>
              </div>
            </div>
            
            <p className="text-lg lg:text-xl text-gold-light/60 font-accent italic leading-relaxed tracking-wide max-w-md">
              "Dal 1920, celebriamo l'arte della carne e il calore della brace nel cuore della Puglia. Una storia di famiglia, passione e sapore autentico."
            </p>
            
            <div className="flex items-center gap-8">
              {[
                { icon: Instagram, href: "#" },
                { icon: Facebook, href: "#" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.2, color: "hsl(var(--gold))" }}
                  className="text-white/20 transition-colors p-2 hover:bg-white/5 rounded-full"
                >
                  <social.icon className="w-8 h-8" />
                </motion.a>
              ))}
              <div className="flex-1 h-px bg-white/5" />
            </div>
          </div>

          {/* Nav Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-12">
            {/* Quick Navigation */}
            <div>
              <h4 className="text-sm font-bold text-fire uppercase tracking-[0.3em] mb-8">Esplora</h4>
              <ul className="space-y-4">
                {["Storia", "Brace", "Galleria", "Menù", "Vini", "Take-away", "Prenota"].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace("ù", "u").replace(" ", "")}`}
                      className="text-gold-light/40 hover:text-gold transition-all duration-300 text-sm lg:text-base font-medium tracking-widest uppercase hover:translate-x-2 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Information */}
            <div>
              <h4 className="text-sm font-bold text-fire uppercase tracking-[0.3em] mb-8">Contatti</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold/40 mt-1 shrink-0" />
                  <span className="text-gold-light/40 text-sm lg:text-base tracking-wide leading-relaxed">
                    Via Paolo VI, 47/49<br />70042 Mola di Bari (BA)
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gold/40 shrink-0" />
                  <a href="tel:+393403824158" className="text-gold-light/40 hover:text-gold transition-colors text-sm lg:text-base">
                    +39 340 38 24 158
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gold/40 shrink-0" />
                  <a href="mailto:info@braceriacisternino.it" className="text-gold-light/40 hover:text-gold transition-colors text-sm lg:text-base truncate">
                    info@braceriacisternino.it
                  </a>
                </li>
              </ul>
            </div>

            {/* Special Badge */}
            <div className="flex flex-col items-center sm:items-end justify-between py-2">
              <div className="text-center sm:text-right">
                <h4 className="text-sm font-bold text-fire uppercase tracking-[0.3em] mb-6">Social Proof</h4>
                <div className="p-6 bg-charcoal/30 border border-white/5 rounded-2xl backdrop-blur-md">
                  <Award className="w-10 h-10 text-gold mb-3 mx-auto sm:ml-auto sm:mr-0" />
                  <div className="text-[10px] font-bold text-gold-light/40 uppercase tracking-widest">
                    Puglia Food<br />Excellence 2023
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left space-y-2">
            <p className="text-gold-light/20 text-[10px] lg:text-xs font-bold uppercase tracking-[0.3em]">
              © {currentYear} Braceria Macelleria Cisternino. All Rights Reserved.
            </p>
            <p className="text-white/5 text-[9px] tracking-widest uppercase">
              Partita IVA: 01234567890 | Credits: Modern Web Studio
            </p>
          </div>
          
          <motion.button
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="group flex items-center gap-4 px-8 py-4 bg-white/5 hover:bg-gold/10 border border-white/10 hover:border-gold/30 rounded-full transition-all"
          >
            <span className="text-[10px] font-bold text-gold-light/40 group-hover:text-gold uppercase tracking-[0.3em]">Torna in alto</span>
            <div className="p-2 bg-fire rounded-full text-white shadow-lg group-hover:shadow-fire/40 transition-shadow">
              <ArrowUp className="w-4 h-4" />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;