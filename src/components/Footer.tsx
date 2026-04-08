import { Globe, Share2, ArrowUp } from "lucide-react";
import logoBelvedere from "@/assets/logo-belvedere.png";
import logoBelvedere from "@/assets/logo-belvedere.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <footer role="contentinfo" className="py-10 bg-transparent text-white relative overflow-hidden border-t border-white/5">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-4">
              <img src={logoBelvedere} alt="Logo Macelleria Belvedere" className="h-14 w-auto object-contain brightness-0 invert" />
              <div className="space-y-2">
                <h2 className="text-xl font-black italic tracking-tighter leading-none uppercase">
                  BELVEDERE<span className="text-primary">.</span>
                </h2>
                <p className="text-[10px] text-white/30 uppercase tracking-[0.25em] font-bold italic">ECCELLENZA DAL 1986 — PUTIGNANO</p>
              </div>
            </div>
            <p className="text-white/40 text-[13px] font-normal leading-relaxed italic max-w-xs">
              Un'esperienza sensoriale dove il fuoco incontra la materia prima d'eccellenza. Tradizione e innovazione sulla brace.
            </p>
            <div className="flex gap-4">
              {[Share2, Globe].map((Icon, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-all duration-500"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white opacity-45 italic">ESPLORA</h3>
            <ul className="space-y-1">
              {["Storia", "Brace", "Galleria", "Vini"].map((link) => (
                <li key={link}>
                  <a 
                    href={`/#${link.toLowerCase()}`} 
                    className="text-white/70 hover:text-white transition-all duration-300 font-normal uppercase tracking-widest text-[14px] leading-[2.0] block italic"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white opacity-45 italic">CONTATTI</h3>
            <div className="space-y-6">
              <div className="space-y-1">
                <p className="text-[10px] font-normal uppercase tracking-[0.12em] text-white opacity-40 italic">INDIRIZZO</p>
                <p className="text-white font-normal text-[14px] uppercase tracking-tighter italic">Via G. Verdi 5C, Putignano</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-normal uppercase tracking-[0.12em] text-white opacity-40 italic">TELEFONO</p>
                <a 
                  href="tel:+390804058608" 
                  className="text-white hover:text-primary transition-colors font-normal text-[14px] tracking-tighter italic"
                >
                  080 405 8608
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] font-normal uppercase tracking-[0.12em] text-white opacity-35 text-center md:text-left italic">
            © {year} BELVEDERE. TUTTI I DIRITTI RISERVATI.
          </p>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-white/20 hover:text-white transition-all duration-500"
          >
            <span className="text-[11px] font-normal uppercase tracking-[0.12em] opacity-35 italic">TORNA SU</span>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary transition-all duration-500">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;