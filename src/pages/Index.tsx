import { useState, useEffect } from "react";
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
import EmberDivider from "@/components/EmberDivider";
import GlobalSparkles from "@/components/GlobalSparkles";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      
      
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-8 focus:left-8 focus:z-[60] bg-primary text-white px-6 py-3 rounded-2xl font-bold shadow-2xl"
      >
        Salta al contenuto principale
      </a>
      
      <Header />
      
      <main id="main-content" role="main" className="flex-grow space-y-0 overflow-hidden">
        <Hero />
        <EmberDivider />
        <Intro />
        <EmberDivider />
        <Storia />
        <EmberDivider />
        <Tagli />
        <EmberDivider />
        <Galleria />
        <EmberDivider />
        <Menu />
        <EmberDivider />
        <Vini />
        <EmberDivider />
        <Recensioni />
        <EmberDivider />
        <Prenota />
        <EmberDivider />
        <DoveSiamo />
      </main>
      
      <Footer />

      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-10 right-10 z-50"
          >
            <Button
              onClick={scrollToTop}
              size="icon"
              className="rounded-full w-14 h-14 bg-primary text-white shadow-xl shadow-primary/20 hover:scale-110 active:scale-95 transition-all"
              aria-label="Torna su"
            >
              <ChevronUp className="w-6 h-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;