import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MenuPage = () => {
  const menuUrl = "https://drive.google.com/file/d/1_LBXD8l_BNEpK1vPxeo7qVWKxIr9ePlB/view?usp=sharing";
  const embedUrl = "https://drive.google.com/file/d/1_LBXD8l_BNEpK1vPxeo7qVWKxIr9ePlB/preview";

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <Link 
                to="/" 
                className="inline-flex items-center text-white/60 hover:text-primary transition-colors mb-4 group"
              >
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Torna alla Home
              </Link>
              <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter">
                Il Nostro <span className="text-primary">Menù</span>
              </h1>
            </div>
            
            <Button 
              asChild 
              className="h-14 px-8 bg-white text-black hover:bg-white/90 font-black uppercase tracking-tighter text-sm rounded-full transition-all shadow-xl"
            >
              <a href={menuUrl} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Scarica il Menù
              </a>
            </Button>
          </div>

          <div className="relative aspect-[1/1.4] w-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
            <iframe
              src={embedUrl}
              className="absolute inset-0 w-full h-full"
              allow="autoplay"
            ></iframe>
          </div>
          
          <div className="mt-12 text-center text-white/50 text-sm">
            Se non riesci a visualizzare il menù, puoi scaricarlo cliccando sul pulsante in alto.
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MenuPage;
