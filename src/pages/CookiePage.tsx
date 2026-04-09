import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Cookie } from "lucide-react";

const CookiePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 section-spacing mt-24">
        <div className="section-container">
          <div className="flex items-center gap-4 mb-8">
            <Cookie className="w-10 h-10 text-primary" />
            <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-none">
              Cookie <span className="text-primary">Policy</span>
            </h1>
          </div>
          
          <div className="glass border border-white/10 p-8 rounded-3xl space-y-8 text-white/70 italic">
            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white italic tracking-tight uppercase">Utilizzo dei Cookie</h2>
              <p>
                Utilizziamo cookie tecnici e di analisi per migliorare la tua esperienza di navigazione 
                sul sito di Macelleria Belvedere.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white italic tracking-tight uppercase">Tipologie di Cookie</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">Essenziali:</strong> Necessari per il corretto funzionamento del sito.</li>
                <li><strong className="text-white">Analitici:</strong> Per capire come utilizzi il sito (es: Google Analytics in forma anonima).</li>
                <li><strong className="text-white">Funzionali:</strong> Per ricordare le tue preferenze (es: consenso ai cookie).</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white italic tracking-tight uppercase">Gestione delle Preferenze</h2>
              <p>
                Puoi modificare le tue preferenze sui cookie in qualsiasi momento cancellando la 
                cache del tuo browser o utilizzando il banner presente al caricamento della pagina.
              </p>
            </section>
            
            <p className="text-sm pt-8 opacity-50 uppercase tracking-widest">
              Ultimo aggiornamento: 16 Maggio 2024
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePage;
