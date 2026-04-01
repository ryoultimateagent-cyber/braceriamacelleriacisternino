import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Footer from "@/components/Footer";
import FloatingShapes from "@/components/FloatingShapes";
import ErrorBoundary from "@/components/ErrorBoundary";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative bg-black">
      <Header />
      
      <main id="main-content" role="main" className="flex-grow space-y-0 overflow-hidden relative">
        <ErrorBoundary fallback={null}>
          <FloatingShapes />
        </ErrorBoundary>
        <Hero />
        
        <div className="relative">
          <Intro />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;