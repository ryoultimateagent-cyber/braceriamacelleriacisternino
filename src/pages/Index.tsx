import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Tagli from "@/components/Tagli";
import Menu from "@/components/Menu";
import Vini from "@/components/Vini";
import Galleria from "@/components/Galleria";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import Recensioni from "@/components/Recensioni";
import DoveSiamo from "@/components/DoveSiamo";
import Prenota from "@/components/Prenota";
import Storia from "@/components/Storia";
import Footer from "@/components/Footer";
import Sparks from "@/components/Sparks";
import React from "react";

const GlowingSeparator = () => (
  <div className="h-12 w-full relative overflow-hidden pointer-events-none flex items-center justify-center">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
    <div className="led-divider" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[60px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/10 via-transparent to-transparent" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative bg-transparent overflow-x-hidden">
      <Header />
      
      <main id="main-content" role="main" className="flex-grow space-y-0 overflow-hidden relative">
        <Sparks />
        
        {/* Ambient Glows */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[10%] -left-[10%] w-[40%] h-[40%] bg-red-900/10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-orange-900/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-[70%] -left-[10%] w-[40%] h-[40%] bg-amber-900/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <Hero />
        
        <div className="relative z-10">
          <Intro />
          <GlowingSeparator />
          <Storia />
          <GlowingSeparator />
          <Tagli />
          <GlowingSeparator />
          <Menu />
          <Vini />
          <GlowingSeparator />
          <Galleria />
          <GlowingSeparator />
          <div className="py-12 md:py-16">
            <div className="section-container relative z-10">
              <div className="max-w-2xl mx-auto bg-black/40 backdrop-blur-sm border border-white/5 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10 flex flex-col items-center gap-6">
                  <span className="text-5xl">🥩</span>
                  <h3 className="text-2xl md:text-3xl font-black italic uppercase text-foreground">
                    Cuoci la Bistecca Perfetta
                  </h3>
                  <p className="text-muted-foreground italic max-w-md">
                    Metti alla prova le tue abilità da grigliatore! Riesci a fermare la cottura al momento giusto?
                  </p>
                  <Link
                    to="/gioco"
                    className="group/btn relative px-8 py-4 bg-primary text-white font-black italic uppercase rounded-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-3 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                    <Play className="w-5 h-5 fill-current relative z-10" />
                    <span className="relative z-10">Gioca Ora</span>
                  </Link>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full" />
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500/5 blur-3xl rounded-full" />
              </div>
            </div>
          </div>
          <GlowingSeparator />
          <Recensioni />
          <GlowingSeparator />
          <Prenota />
          <GlowingSeparator />
          <DoveSiamo />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
