import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    setIsVisible(false);
  };

  const handleDeclineAll = () => {
    localStorage.setItem("cookie-consent", "none");
    setIsVisible(false);
  };

  const handlePreferences = () => {
    console.log("Mostra preferenze cookie");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[200] p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-8 relative z-10">
              <div className="flex items-center gap-5 flex-1 text-center lg:text-left">
                <div className="hidden sm:flex flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 items-center justify-center border border-primary/20">
                  <Cookie className="w-8 h-8 text-primary" />
                </div>
                
                <p className="text-sm md:text-base text-gray-100 leading-relaxed font-medium">
                  Questo sito utilizza cookie tecnici e, previo consenso, 
                  cookie di profilazione e analitici. Per saperne di più leggi la{" "}
                  <a href="/cookies" className="text-primary hover:underline underline-offset-4 font-bold decoration-2 transition-all">
                    Cookie Policy
                  </a>.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
                <button
                  onClick={handlePreferences}
                  className="flex-1 lg:flex-none px-6 py-4 text-xs md:text-sm font-black uppercase italic tracking-widest text-gray-300 hover:text-white transition-all border border-white/10 rounded-xl hover:bg-white/5"
                >
                  Preferenze
                </button>
                <button
                  onClick={handleDeclineAll}
                  className="flex-1 lg:flex-none px-8 py-4 text-xs md:text-sm font-black uppercase italic tracking-widest text-white bg-white/20 hover:bg-white/30 border border-white/20 rounded-xl transition-all"
                >
                  Rifiuta
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 lg:flex-none px-8 py-4 text-xs md:text-sm font-black uppercase italic tracking-widest text-white bg-primary rounded-xl hover:bg-primary/90 transition-all shadow-[0_10px_25px_rgba(234,56,76,0.3)] hover:scale-[1.02] active:scale-95"
                >
                  Accetta tutti
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
