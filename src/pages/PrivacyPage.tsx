import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShieldCheck } from "lucide-react";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 section-spacing mt-24">
        <div className="section-container">
          <div className="flex items-center gap-4 mb-8">
            <ShieldCheck className="w-10 h-10 text-primary" />
            <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-none">
              Privacy <span className="text-primary">Policy</span>
            </h1>
          </div>
          
          <div className="glass border border-white/10 p-8 rounded-3xl space-y-8 text-white/70 italic">
            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white italic tracking-tight uppercase">Informativa sulla Privacy</h2>
              <p>
                In conformità con il Regolamento Generale sulla Protezione dei Dati (GDPR), questa pagina 
                descrive come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali durante la 
                tua visita sul sito di Macelleria Belvedere.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white italic tracking-tight uppercase">Dati Raccolti</h2>
              <p>
                Raccogliamo solo i dati necessari per fornirti una navigazione ottimale. Questo include 
                informazioni tecniche (come indirizzo IP) e dati forniti volontariamente tramite i nostri 
                canali di contatto.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white italic tracking-tight uppercase">I tuoi Diritti</h2>
              <p>
                Hai il diritto di accedere, rettificare o richiedere la cancellazione dei tuoi dati 
                personali in qualsiasi momento. Per esercitare questi diritti, contattaci tramite i 
                recapiti presenti in fondo alla pagina.
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

export default PrivacyPage;
