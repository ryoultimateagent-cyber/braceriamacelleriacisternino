import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Tagli from "@/components/Tagli";
import Menu from "@/components/Menu";
import Vini from "@/components/Vini";
import Galleria from "@/components/Galleria";
import Recensioni from "@/components/Recensioni";
import DoveSiamo from "@/components/DoveSiamo";
import Prenota from "@/components/Prenota";
import Storia from "@/components/Storia";
import Footer from "@/components/Footer";
import Sparks from "@/components/Sparks";
import React from "react";

const GlowingSeparator = () => (
  <div className="h-16 w-full relative overflow-hidden pointer-events-none flex items-center justify-center">
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
          <GlowingSeparator />
          <Vini />
          <GlowingSeparator />
          <Galleria />
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