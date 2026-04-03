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
import Footer from "@/components/Footer";
import Sparks from "@/components/Sparks";
import React from "react";

const GlowingSeparator = () => (
  <div className="h-32 w-full relative overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-orange-500 via-red-600 via-yellow-400 to-transparent opacity-30 shadow-[0_0_15px_rgba(255,69,0,0.5)]" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative bg-black">
      <Header />
      
      <main id="main-content" role="main" className="flex-grow space-y-0 overflow-hidden relative">
        <Sparks />
        
        {/* Glowing Background Gradients */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[15%] -left-[10%] w-[50%] h-[40%] bg-red-900/10 blur-[150px] rounded-full" />
          <div className="absolute top-[40%] -right-[10%] w-[50%] h-[40%] bg-orange-900/10 blur-[150px] rounded-full" />
          <div className="absolute top-[70%] -left-[10%] w-[50%] h-[40%] bg-yellow-900/5 blur-[150px] rounded-full" />
          <div className="absolute top-[90%] -right-[10%] w-[50%] h-[40%] bg-red-900/10 blur-[150px] rounded-full" />
        </div>

        <Hero />
        
        <div className="relative z-10">
          <Intro />
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