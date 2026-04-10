import { MessageCircle, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import logoBelvedere from "@/assets/logo-belvedere.png";

const Facebook = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);

const Instagram = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Footer = () => {
  const year = new Date().getFullYear();
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
              {[
                { Icon: Facebook, href: "https://www.facebook.com/macelleriabelvedere" },
                { Icon: Instagram, href: "https://www.instagram.com/macelleriabelvedere" },
                { Icon: MessageCircle, href: "https://wa.me/393495319286" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-all duration-500 group"
                >
                  <social.Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
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
                  +39 080 405 8608
                </a>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-normal uppercase tracking-[0.12em] text-white opacity-40 italic">WHATSAPP</p>
                <a 
                  href="https://wa.me/393495319286" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors font-normal text-[14px] tracking-tighter italic"
                >
                  +39 349 531 9286
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-[11px] font-normal uppercase tracking-[0.12em] text-white opacity-35 text-center md:text-left italic">
              © {year} BELVEDERE. TUTTI I DIRITTI RISERVATI.
            </p>
            <Link 
              to="/privacy" 
              className="text-[11px] font-normal uppercase tracking-[0.12em] text-white opacity-35 hover:opacity-100 transition-opacity italic"
            >
              PRIVACY POLICY
            </Link>
            <Link 
              to="/cookies" 
              className="text-[11px] font-normal uppercase tracking-[0.12em] text-white opacity-35 hover:opacity-100 transition-opacity italic"
            >
              COOKIE POLICY
            </Link>
          </div>

          
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