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
// ... keep existing imports


const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative bg-black">
      <Header />
      
      <main id="main-content" role="main" className="flex-grow space-y-0 overflow-hidden relative">
        <ErrorBoundary fallback={null}>
          <FloatingShapes />
        </ErrorBoundary>
        
        <Hero />
        
        <div className="relative z-10">
          <Intro />
          <Tagli />
          <Menu />
          <Vini />
          <Galleria />
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