import { ChefHat, Facebook, Instagram, Phone, MapPin, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const Footer = () => {
  const year = new Date().getFullYear();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer role="contentinfo" className="py-16 md:py-24 bg-accent border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="mb-8 md:mb-12">
              <h3 className="text-2xl md:text-3xl font-display font-black text-[#FAF7F0] uppercase tracking-tighter leading-none mb-1">BELVEDERE</h3>
              <span className="text-[10px] text-[#FAF7F0]/50 uppercase tracking-[0.5em] font-bold">EST. 1986</span>
            </div>
            <p className="text-[#FAF7F0]/60 text-sm leading-relaxed mb-8 md:mb-12 font-accent italic">
              "La Macelleria Belvedere è una realtà a conduzione familiare nel cuore di Putignano. Qualità, tradizione e passione in ogni taglio."
            </p>
            <div className="flex gap-6">
              <a href="https://www.facebook.com/macelleriabelvedere" target="_blank" rel="noopener noreferrer" className="text-[#FAF7F0]/60 hover:text-white transition-colors" aria-label="Seguici su Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/macelleriabelvedere" target="_blank" rel="noopener noreferrer" className="text-[#FAF7F0]/60 hover:text-white transition-colors" aria-label="Seguici su Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gold text-[10px] font-black uppercase tracking-[0.5em] mb-8 md:mb-12">Esplora</h4>
            <ul className="space-y-4 md:space-y-6">
              {["Storia", "Brace", "Galleria", "Menù", "Dove Siamo"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(" ", "")}`} className="text-cream/60 hover:text-gold transition-all duration-300 text-xs uppercase tracking-widest font-bold block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold text-[10px] font-black uppercase tracking-[0.5em] mb-8 md:mb-12">Contatti</h4>
            <ul className="space-y-6 md:space-y-8">
              <li className="flex flex-col gap-2">
                <span className="text-gold/50 text-[10px] uppercase tracking-widest font-black">Indirizzo</span>
                <span className="text-cream/60 text-xs font-bold uppercase tracking-widest">Via Belvedere, 12 <br /> Mola di Bari (BA)</span>
              </li>
              <li className="flex flex-col gap-2">
                <span className="text-gold/50 text-[10px] uppercase tracking-widest font-black">Telefono</span>
                <a href="tel:+393403824158" className="text-cream/60 hover:text-gold transition-colors text-xs font-bold uppercase tracking-widest">+39 340 382 4158</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold text-[10px] font-black uppercase tracking-[0.5em] mb-8 md:mb-12">Newsletter</h4>
            <p className="text-cream/60 text-xs mb-8 leading-relaxed italic font-accent">Iscriviti per ricevere aggiornamenti sulle nostre selezioni limitate.</p>
            <div className="flex flex-col gap-4">
              <div className="relative">
                <input 
                  id="newsletter-email"
                  type="email" 
                  placeholder="EMAIL" 
                  aria-label="Iscriviti alla newsletter con la tua email"
                  className="w-full bg-transparent border-b border-gold/20 py-4 text-gold focus:border-gold outline-none transition-all placeholder:text-gold/20 text-[10px] tracking-[0.4em] font-black" 
                />
              </div>
              <button 
                onClick={() => {
                  const email = (document.getElementById("newsletter-email") as HTMLInputElement).value;
                  if (email) {
                    toast.success("Iscrizione avvenuta con successo!");
                    (document.getElementById("newsletter-email") as HTMLInputElement).value = "";
                  } else {
                    toast.error("Inserisci un'email valida.");
                  }
                }}
                className="h-14 bg-gold hover:bg-gold-dark text-noir font-black uppercase tracking-[0.4em] text-[10px] transition-all rounded-lg"
              >
                Sottoscrivi
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 md:pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-gold/50 text-[10px] uppercase tracking-[0.3em] font-black text-center md:text-left">
              © {year} BELVEDERE. TUTTI I DIRITTI RISERVATI.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[9px] text-gold/30 hover:text-gold/50 uppercase tracking-widest transition-colors">Privacy Policy</a>
              <a href="#" className="text-[9px] text-gold/30 hover:text-gold/50 uppercase tracking-widest transition-colors">Cookie Policy</a>
            </div>
          </div>
          
          <motion.button
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-gold/60 hover:text-gold transition-colors"
            aria-label="Torna all'inizio della pagina"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Inizio Pagina</span>
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;