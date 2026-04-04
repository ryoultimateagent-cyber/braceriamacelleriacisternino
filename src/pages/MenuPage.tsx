import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MenuPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 pb-20 px-4 flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <Link 
            to="/" 
            className="inline-flex items-center text-white/60 hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Torna alla Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter opacity-20">
            Menù non disponibile
          </h1>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MenuPage;
