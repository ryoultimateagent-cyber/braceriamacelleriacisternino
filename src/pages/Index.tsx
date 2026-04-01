import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Storia from "@/components/Storia";
import Tagli from "@/components/Tagli";
import Galleria from "@/components/Galleria";
import Menu from "@/components/Menu";
import Vini from "@/components/Vini";
import Prenota from "@/components/Prenota";
import Recensioni from "@/components/Recensioni";
import DoveSiamo from "@/components/DoveSiamo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative bg-black">
      <Header />
      
      <main id="main-content" role="main" className="flex-grow space-y-0 overflow-hidden relative">
        <Hero />
        
        <div className="relative">
          <Intro />
          <Storia />
          <Tagli />
          <Galleria />
          <Menu />
          <Vini />
          <Recensioni />
          <Prenota />
          <DoveSiamo />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;