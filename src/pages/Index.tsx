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
import React from "react";

const Separator = () => (
  <div className="section-container">
    <hr className="border-[#eceae4]" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative bg-[#f7f4ed] overflow-x-hidden">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-[#1c1c1c] text-[#fcfbf8] px-4 py-2 rounded-[6px] font-medium"
      >
        Vai al contenuto
      </a>
      
      <Header />
      
      <main id="main-content" role="main" className="flex-grow space-y-0 overflow-hidden relative">
        <Hero />
        
        <div className="relative z-10">
          <Intro />
          <Separator />
          <Storia />
          <Separator />
          <Tagli />
          <Separator />
          <Menu />
          <Separator />
          <Vini />
          <Separator />
          <Galleria />
          <Separator />
          <Recensioni />
          <Separator />
          <Prenota />
          <Separator />
          <DoveSiamo />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;