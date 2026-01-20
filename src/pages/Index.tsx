import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Storia from "@/components/Storia";
import Tagli from "@/components/Tagli";
import Menu from "@/components/Menu";
import Vini from "@/components/Vini";
import Takeaway from "@/components/Takeaway";
import Prenota from "@/components/Prenota";
import Recensioni from "@/components/Recensioni";
import DoveSiamo from "@/components/DoveSiamo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-noir">
      <Header />
      <Hero />
      <Intro />
      <Storia />
      <Tagli />
      <Menu />
      <Vini />
      <Takeaway />
      <Prenota />
      <Recensioni />
      <DoveSiamo />
      <Footer />
    </div>
  );
};

export default Index;
