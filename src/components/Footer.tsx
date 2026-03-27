import { ChefHat, Facebook, Instagram, Phone, MapPin, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer role="contentinfo" className="py-32 bg-noir border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          <div className="lg:col-span-1">
            <div className="mb-12">
              <h3 className="text-3xl font-display font-black text-gold uppercase tracking-tighter leading-none mb-1">BELVEDERE</h3>
              <span className="text-[10px] text-gold/40 uppercase tracking-[0.5em] font-bold">EST. 1980</span>
            </div>
            <p className="text-cream/40 text-sm leading-relaxed mb-12 font-accent italic">
              "La nostra missione è onorare il fuoco, rispettando la tradizione e portando in tavola solo l'eccellenza della materia prima."
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gold/60 hover:text-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gold/60 hover:text-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gold text-[10px] font-black uppercase tracking-[0.5em] mb-12">Esplora</h4>
            <ul className="space-y-6">
              {["Storia", "Brace", "Galleria", "Menù"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-cream/40 hover:text-gold transition-all duration-300 text-xs uppercase tracking-widest font-bold block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold text-[10px] font-black uppercase tracking-[0.5em] mb-12">Contatti</h4>
            <ul className="space-y-8">
              <li className="flex flex-col gap-2">
                <span className="text-gold/40 text-[10px] uppercase tracking-widest font-black">Indirizzo</span>
                <span className="text-cream/60 text-xs font-bold uppercase tracking-widest">Via Belvedere, 15 <br /> Mola di Bari (BA)</span>
              </li>
              <li className="flex flex-col gap-2">
                <span className="text-gold/40 text-[10px] uppercase tracking-widest font-black">Telefono</span>
                <a href="tel:+393403824158" className="text-cream/60 hover:text-gold transition-colors text-xs font-bold uppercase tracking-widest">+39 340 382 4158</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold text-[10px] font-black uppercase tracking-[0.5em] mb-12">Newsletter</h4>
            <p className="text-cream/40 text-xs mb-8 leading-relaxed italic font-accent">Iscriviti per ricevere aggiornamenti sulle nostre selezioni limitate.</p>
            <div className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="EMAIL" 
                className="bg-transparent border-b border-gold/20 py-4 text-gold focus:border-gold outline-none transition-all placeholder:text-gold/20 text-[10px] tracking-[0.4em] font-black" 
              />
              <button className="h-14 bg-gold hover:bg-gold-dark text-noir font-black uppercase tracking-[0.4em] text-[10px] transition-all">Sottoscrivi</button>
            </div>
          </div>
        </div>

        <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-gold/20 text-[10px] uppercase tracking-[0.3em] font-black">
            © {year} BELVEDERE. TUTTI I DIRITTI RISERVATI.
          </p>
          
          <motion.button
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-gold/40 hover:text-gold transition-colors"
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