import { Link } from "react-router-dom";
import { ArrowLeft, Share2 } from "lucide-react";
import SteakGame from "@/components/SteakGame";
import logoBelvedere from "@/assets/logo-belvedere.png";
import { toast } from "sonner";
import { Helmet } from "react-helmet-async";

const GiocoPage = () => {
  const handleShare = async () => {
    const url = window.location.href;
    const text = "🥩 Riesci a cuocere la bistecca perfetta? Mettiti alla prova!";
    
    if (navigator.share) {
      try {
        await navigator.share({ title: "Cuoci la Bistecca Perfetta", text, url });
      } catch (e) {
        // user cancelled
      }
    } else {
      await navigator.clipboard.writeText(url);
      toast.success("Link copiato negli appunti!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      {/* Ambient Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] -left-[10%] w-[40%] h-[40%] bg-red-900/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute top-[50%] -right-[10%] w-[40%] h-[40%] bg-orange-900/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Top Bar */}
      <header className="relative z-20 flex items-center justify-between px-6 py-4 border-b border-white/5 bg-black/40 backdrop-blur-sm">
        <Link to="/" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span className="font-bold italic uppercase text-xs tracking-widest hidden sm:inline">Torna al sito</span>
        </Link>
        
        <Link to="/">
          <img src={logoBelvedere} alt="Macelleria Belvedere" className="h-10 object-contain" />
        </Link>

        <button
          onClick={handleShare}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Share2 className="w-5 h-5" />
          <span className="font-bold italic uppercase text-xs tracking-widest hidden sm:inline">Condividi</span>
        </button>
      </header>

      {/* Game Area */}
      <main className="flex-grow flex items-center justify-center relative z-10 py-8">
        <SteakGame />
      </main>

      {/* Footer */}
      <footer className="relative z-20 text-center py-6 border-t border-white/5 bg-black/40 backdrop-blur-sm">
        <p className="text-muted-foreground text-xs italic">
          © {new Date().getFullYear()} Macelleria Belvedere — Passione per la carne dal 1987
        </p>
      </footer>
    </div>
  );
};

export default GiocoPage;
