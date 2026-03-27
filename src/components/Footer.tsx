import { ChefHat, Facebook, Instagram, Phone, MapPin, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer role="contentinfo" className="py-24 bg-[#0A0A0A] border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-ember via-gold to-ember" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24 mb-24">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 bg-gold/5 border border-gold/20 rounded-2xl flex items-center justify-center">
                <ChefHat className="text-gold w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-black text-gold uppercase leading-none">Belvedere</h3>
                <span className="text-[10px] text-gold-light/40 uppercase tracking-[0.4em]">Macelleria Braceria</span>
              </div>
            </div>
            <p className="text-gold-light/60 text-base leading-relaxed mb-10 font-accent italic">
              "La nostra missione è portare in tavola l'eccellenza, rispettando la tradizione e la materia prima."
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold-light hover:bg-gold hover:text-noir transition-all duration-500 shadow-xl group">
                <Facebook className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold-light hover:bg-gold hover:text-noir transition-all duration-500 shadow-xl group">
                <Instagram className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gold font-display font-black text-sm uppercase tracking-[0.4em] mb-10">Navigazione</h4>
            <ul className="space-y-6">
              {["Storia", "Brace", "Galleria", "Menù"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gold-light/60 hover:text-gold transition-all duration-300 text-sm uppercase tracking-widest font-bold block hover:translate-x-2">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-display font-black text-sm uppercase tracking-[0.4em] mb-10">Contatti</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-gold-light/60 text-sm uppercase tracking-widest font-bold">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
                <span>Via Belvedere, 15 <br /> Mola di Bari (BA)</span>
              </li>
              <li className="flex items-center gap-4 text-gold-light/60 text-sm uppercase tracking-widest font-bold">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="tel:+393403824158" className="hover:text-gold transition-colors">+39 340 382 4158</a>
              </li>
              <li className="flex items-center gap-4 text-gold-light/60 text-sm uppercase tracking-widest font-bold">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="mailto:info@macelleriabelvedere.it" className="hover:text-gold transition-colors lowercase">info@macelleriabelvedere.it</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-display font-black text-sm uppercase tracking-[0.4em] mb-10">Newsletter</h4>
            <p className="text-gold-light/60 text-sm mb-8 leading-relaxed font-body">Iscriviti per ricevere aggiornamenti sulle nostre specialità e serate a tema.</p>
            <div className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="Il tuo indirizzo email" 
                className="bg-[#111111] border border-gold/10 p-5 rounded-none text-cream focus:border-gold outline-none transition-all placeholder:text-gold-light/20 text-xs tracking-widest" 
              />
              <button className="h-14 bg-gold hover:bg-gold-satin text-noir font-black uppercase tracking-[0.4em] text-xs transition-all shadow-fire">Iscriviti</button>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <p className="text-gold-light/30 text-[10px] uppercase tracking-[0.3em] font-black mb-2">
              © {year} Macelleria Braceria Belvedere. Eccellenza dal 1980.
            </p>
            <p className="text-gold-light/10 text-[8px] uppercase tracking-[0.2em]">P.IVA 01234567890 | Design by Luxury Web Studio</p>
          </div>
          
          <motion.button
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="group flex items-center gap-4 px-10 py-5 bg-white/5 hover:bg-gold/10 border border-white/10 hover:border-gold/30 rounded-full transition-all"
          >
            <span className="text-[10px] font-black text-gold/40 group-hover:text-gold uppercase tracking-[0.4em]">Inizio</span>
            <ArrowUp className="w-4 h-4 text-gold" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;