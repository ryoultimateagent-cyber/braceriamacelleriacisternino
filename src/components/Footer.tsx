import { Facebook, Instagram, Phone, MapPin, Mail, ArrowUp, Loader2, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("loading");
    // Simulo invio API
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setStatus("success");
    toast.success("Iscrizione avvenuta con successo!");
    setEmail("");
    
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <footer role="contentinfo" className="py-24 bg-[#0A0A0A] text-white relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-black tracking-tight leading-none uppercase">
                BELVEDERE<span className="text-primary">.</span>
              </h2>
              <p className="text-[10px] text-white/60 uppercase tracking-[0.4em] font-bold">DAL 1986 — PUTIGNANO</p>
            </div>
            <p className="text-white/70 text-base leading-relaxed font-medium">
              Una tradizione di famiglia dedicata alla selezione delle migliori carni e alla brace autentica nel cuore della Puglia.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary outline-none"
                aria-label="Seguici su Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary outline-none"
                aria-label="Seguici su Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-8">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-primary">ESPLORA</h3>
            <ul className="space-y-4">
              {["Storia", "Brace", "Galleria", "Menù", "Vini"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-white/60 hover:text-white transition-colors font-bold uppercase tracking-widest text-xs block focus-visible:text-primary outline-none"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-primary">CONTATTI</h3>
            <div className="space-y-6">
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/50">INDIRIZZO</p>
                <p className="text-white font-bold text-sm uppercase tracking-wider">Via G. Verdi 5C, Putignano</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/50">TELEFONO</p>
                <a 
                  href="tel:+390804058608" 
                  className="text-white hover:text-primary transition-colors font-bold text-sm focus-visible:underline outline-none"
                >
                  +39 080 405 8608
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-8">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-primary">NEWSLETTER</h3>
            <div className="space-y-4">
              <div className="relative">
                <label htmlFor="newsletter-email" className="sr-only">Iscriviti alla nostra newsletter</label>
                <input 
                  id="newsletter-email"
                  type="email" 
                  placeholder="LA TUA EMAIL" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold placeholder:text-white/40 focus:border-primary outline-none transition-all focus:ring-1 focus:ring-primary" 
                />
              </div>
              <Button 
                onClick={() => toast.success("Iscrizione avvenuta con successo!")}
                className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest text-xs rounded-2xl shadow-xl shadow-primary/20 transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-white"
              >
                SOTTOSCRIVI
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 text-center md:text-left">
            © {year} BELVEDERE. TUTTI I DIRITTI RISERVATI.
          </p>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-white/40 hover:text-white transition-colors focus-visible:text-primary outline-none"
            aria-label="Torna all'inizio della pagina"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">TORNA SU</span>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-300 group-focus-visible:ring-2 group-focus-visible:ring-primary">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;