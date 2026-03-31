import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { ArrowLeft, Home } from "lucide-react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-transparent px-6 py-20 text-white">
      <div className="w-full max-w-4xl mb-12">
        <Breadcrumbs />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="mb-6 text-9xl font-bold text-[#CC0000] opacity-50">404</h1>
        <h2 className="mb-4 text-3xl md:text-5xl font-bold uppercase tracking-widest">
          Pagina Non Trovata
        </h2>
        <p className="mb-12 text-lg md:text-xl text-white/70 max-w-md mx-auto">
          Ops! Sembra che questa pagina non sia disponibile o sia stata rimossa.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="flex items-center gap-2 bg-[#CC0000] hover:bg-[#B30000] text-white px-8 py-4 text-lg font-bold rounded-full transition-all duration-300 shadow-lg hover:scale-105"
          >
            <Home className="w-5 h-5" />
            Torna alla Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 border-2 border-white/20 hover:bg-white/10 text-white px-8 py-4 text-lg font-bold rounded-full transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5" />
            Torna Indietro
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
