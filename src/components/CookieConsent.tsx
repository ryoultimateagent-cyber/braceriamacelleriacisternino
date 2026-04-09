import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, Cookie } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000); // Show after 2 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-6 left-6 right-6 z-[100] md:left-auto md:right-8 md:max-w-md"
        >
          <div className="glass border border-white/10 p-6 rounded-2xl shadow-2xl relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/20 blur-3xl rounded-full group-hover:bg-primary/30 transition-colors duration-500" />
            
            <div className="flex items-start gap-4 relative z-10">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Cookie className="w-6 h-6 text-primary" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-black uppercase italic tracking-tight flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    Cookie & Privacy
                  </h3>
                  <button 
                    onClick={() => setIsVisible(false)}
                    className="text-muted-foreground hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito, 
                  analizzare il traffico e personalizzare i contenuti. Puoi scegliere di accettare tutti 
                  i cookie o configurare le tue preferenze. Consulta la nostra{" "}
                  <a href="/privacy" className="text-primary hover:underline underline-offset-4">
                    Privacy Policy
                  </a>.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleAccept}
                    className="flex-1 bg-primary hover:bg-primary/80 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] text-sm uppercase italic tracking-wider"
                  >
                    Accetta Tutto
                  </button>
                  <button
                    onClick={handleDecline}
                    className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-sm uppercase italic tracking-wider"
                  >
                    Rifiuta
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
