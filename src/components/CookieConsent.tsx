import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Check, ShieldCheck, BarChart3, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: true,
    marketing: false,
  });

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
    localStorage.setItem("cookie-consent", JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
    }));
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleDeclineAll = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
    }));
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences));
    setIsVisible(false);
    setShowPreferences(false);
  };

  const togglePreference = (key: keyof typeof preferences) => {
    if (key === 'necessary') return; // Cannot disable necessary cookies
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
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
            {!showPreferences ? (
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
                    onClick={() => setShowPreferences(true)}
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
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-black italic uppercase text-white flex items-center gap-3">
                    <Settings className="w-6 h-6 text-primary" />
                    Preferenze Privacy
                  </h3>
                  <button 
                    onClick={() => setShowPreferences(false)}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col gap-4">
                    <div className="flex justify-between items-start">
                      <ShieldCheck className="w-6 h-6 text-primary" />
                      <div className="w-12 h-6 bg-primary/20 rounded-full relative">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-primary rounded-full" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm uppercase mb-1">Necessari</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">Essenziali per il funzionamento base del sito.</p>
                    </div>
                  </div>

                  <div 
                    onClick={() => togglePreference('analytics')}
                    className={`cursor-pointer bg-white/5 border transition-all p-5 rounded-2xl flex flex-col gap-4 ${preferences.analytics ? 'border-primary/50' : 'border-white/10'}`}
                  >
                    <div className="flex justify-between items-start">
                      <BarChart3 className="w-6 h-6 text-primary" />
                      <div className={`w-12 h-6 rounded-full relative transition-colors ${preferences.analytics ? 'bg-primary/40' : 'bg-zinc-800'}`}>
                        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${preferences.analytics ? 'right-1' : 'left-1'}`} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm uppercase mb-1">Analitici</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">Ci aiutano a capire come gli utenti usano il sito.</p>
                    </div>
                  </div>

                  <div 
                    onClick={() => togglePreference('marketing')}
                    className={`cursor-pointer bg-white/5 border transition-all p-5 rounded-2xl flex flex-col gap-4 ${preferences.marketing ? 'border-primary/50' : 'border-white/10'}`}
                  >
                    <div className="flex justify-between items-start">
                      <Settings className="w-6 h-6 text-primary" />
                      <div className={`w-12 h-6 rounded-full relative transition-colors ${preferences.marketing ? 'bg-primary/40' : 'bg-zinc-800'}`}>
                        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${preferences.marketing ? 'right-1' : 'left-1'}`} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm uppercase mb-1">Marketing</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">Utilizzati per mostrare annunci personalizzati.</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-end gap-4">
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="px-6 py-4 text-xs md:text-sm font-black uppercase italic tracking-widest text-gray-400 hover:text-white transition-all"
                  >
                    Indietro
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    className="px-8 py-4 text-xs md:text-sm font-black uppercase italic tracking-widest text-white bg-primary rounded-xl hover:bg-primary/90 transition-all shadow-[0_10px_25px_rgba(234,56,76,0.3)]"
                  >
                    Salva preferenze
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
