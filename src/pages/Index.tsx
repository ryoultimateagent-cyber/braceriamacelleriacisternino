import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative bg-black">
      <Header />
      
      <main id="main-content" role="main" className="flex-grow space-y-0 overflow-hidden relative">
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