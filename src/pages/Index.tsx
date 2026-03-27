import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Storia from "@/components/Storia";
import Tagli from "@/components/Tagli";
import Galleria from "@/components/Galleria";
import Menu from "@/components/Menu";
import Vini from "@/components/Vini";
import Takeaway from "@/components/Takeaway";
import Prenota from "@/components/Prenota";
import Recensioni from "@/components/Recensioni";
import DoveSiamo from "@/components/DoveSiamo";
import Footer from "@/components/Footer";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 800);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-noir flex flex-col">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] bg-gold text-noir px-4 py-2 rounded-md font-bold"
      >
        Salta al contenuto principale
      </a>
      
      <Header />
      
      <main id="main-content" role="main" className="flex-grow">
        <Hero />
        <Intro />
      </main>
      
      <Footer />

      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <Button
              onClick={scrollToTop}
              variant="gold"
              size="icon"
              className="rounded-full w-12 h-12 shadow-fire hover:scale-110 transition-transform"
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
