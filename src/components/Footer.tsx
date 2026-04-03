import { Phone, MapPin, Mail, ArrowUp, Loader2, CheckCircle2, Globe, Share2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import logoImg from "@/assets/logo-cisternino.jpg";

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
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setStatus("success");
    toast.success("Iscrizione avvenuta con successo!");
    setEmail("");
    
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <footer role="contentinfo" className="py-16 bg-black text-white relative overflow-hidden border-t border-white/5">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          
          <div className="lg:col-span-1 space-y-10">
            <div className="space-y-6">
              <div className="h-20 w-20 rounded-full overflow-hidden border-2 border-primary/20 shadow-[0_0_30px_rgba(204,0,0,0.3)]">
                <img src={logoImg} alt="Logo Belvedere" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-black italic tracking-tighter leading-none uppercase">
                  BELVEDERE<span className="text-primary">.</span>
                </h2>
                <p className="text-[10px] text-white/40 uppercase tracking-[0.5em] font-black italic">DAL 1986 — PUTIGNANO</p>
              </div>
            </div>
            <p className="text-white/60 text-lg font-medium leading-relaxed italic">
              Una tradizione di famiglia dedicata alla selezione delle migliori carni e alla brace autentica nel cuore della Puglia.
            </p>
            <div className="flex gap-6">
              {[Share2, Globe].map((Icon, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-500 shadow-xl"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-primary italic">ESPLORA</h3>
            <ul className="space-y-6">
              {["Storia", "Brace", "Galleria", "Menù", "Vini"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-white/40 hover:text-white transition-all duration-300 font-black uppercase tracking-widest text-xs block italic hover:translate-x-2"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-10">
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-primary italic">CONTATTI</h3>
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/30 italic">INDIRIZZO</p>
                <p className="text-white font-black text-lg uppercase tracking-tighter italic">Via G. Verdi 5C, Putignano</p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/30 italic">TELEFONO</p>
                <a 
                  href="tel:+390804058608" 
                  className="text-white hover:text-primary transition-colors font-black text-2xl tracking-tighter italic"
                >
                  080 405 8608
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-primary italic">NEWSLETTER</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="LA TUA EMAIL" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 text-sm font-black italic placeholder:text-white/20 focus:border-primary outline-none transition-all focus:ring-1 focus:ring-primary" 
                  required
                />
              </div>
              <Button 
                type="submit"
                className="w-full h-16 bg-primary hover:bg-primary/90 text-white font-black italic uppercase tracking-widest text-xs rounded-2xl shadow-xl shadow-primary/20 transition-all active:scale-95"
              >
                SOTTOSCRIVI
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 text-center md:text-left italic">
            © {year} BELVEDERE. TUTTI I DIRITTI RISERVATI.
          </p>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-white/20 hover:text-white transition-all duration-500"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] italic">TORNA SU</span>
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-500">
              <ArrowUp className="w-5 h-5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
