import { Globe, Share2, ArrowUp } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Iscrizione avvenuta con successo!");
    setEmail("");
  };

  return (
    <footer role="contentinfo" className="py-20 bg-[#f7f4ed] text-[#1c1c1c] relative overflow-hidden border-t border-[#eceae4]">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-16">
          
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-4">
              <div className="space-y-1">
                <h2 className="text-2xl font-semibold tracking-[-0.03em] leading-none">
                  BELVEDERE
                </h2>
                <p className="text-[10px] text-[#1c1c1c]/40 uppercase tracking-[0.2em] font-medium mt-2">DAL 1986 — PUTIGNANO</p>
              </div>
            </div>
            <p className="text-[#5f5f5d] text-sm font-normal leading-relaxed">
              Una tradizione di famiglia dedicata alla selezione delle migliori carni e alla brace autentica.
            </p>
            <div className="flex gap-4">
              {[Share2, Globe].map((Icon, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="w-10 h-10 rounded-[8px] border border-[#eceae4] flex items-center justify-center hover:bg-[#1c1c1c] hover:text-[#fcfbf8] transition-all duration-300"
                  aria-label={`Link social ${i + 1}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-[11px] font-semibold uppercase tracking-widest text-[#1c1c1c]">Esplora</h3>
            <ul className="space-y-4">
              {["Storia", "Brace", "Galleria", "Menù", "Vini"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-[#5f5f5d] hover:text-[#1c1c1c] transition-all duration-300 text-sm font-normal"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-[11px] font-semibold uppercase tracking-widest text-[#1c1c1c]">Contatti</h3>
            <div className="space-y-6">
              <div className="space-y-1">
                <p className="text-[10px] font-medium uppercase tracking-widest text-[#1c1c1c]/30">Indirizzo</p>
                <p className="text-[#1c1c1c] font-semibold text-base tracking-tight">Via G. Verdi 5C, Putignano</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-medium uppercase tracking-widest text-[#1c1c1c]/30">Telefono</p>
                <a 
                  href="tel:+390804058608" 
                  className="text-[#1c1c1c] hover:opacity-70 transition-opacity font-semibold text-xl tracking-tight"
                >
                  080 405 8608
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-[11px] font-semibold uppercase tracking-widest text-[#1c1c1c]">Newsletter</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="La tua email" 
                className="w-full bg-white border border-[#eceae4] rounded-[8px] px-5 py-3.5 text-sm font-normal placeholder:text-[#5f5f5d]/40 focus:border-[#1c1c1c] outline-none transition-all shadow-sm" 
                required
              />
              <Button 
                type="submit"
                className="w-full"
              >
                Sottoscrivi
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-[#eceae4] flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-[#5f5f5d] text-center md:text-left">
            © {year} BELVEDERE. TUTTI I DIRITTI RISERVATI.
          </p>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[#1c1c1c]/40 hover:text-[#1c1c1c] transition-all duration-300"
          >
            <span className="text-[10px] font-semibold uppercase tracking-widest">Torna su</span>
            <div className="w-10 h-10 rounded-full border border-[#eceae4] flex items-center justify-center group-hover:bg-[#1c1c1c] group-hover:text-[#fcfbf8] transition-all duration-300">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;