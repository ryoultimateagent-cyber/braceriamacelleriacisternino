import { Phone, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo-cisternino.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-noir/80 via-noir/60 to-noir" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(139,21,56,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(212,175,55,0.1)_0%,transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24">
        {/* Badge */}
        <div className="inline-block px-8 py-3 border border-gold text-gold font-accent text-sm font-semibold tracking-[6px] uppercase mb-8 relative">
          <span className="absolute -top-1 -left-1 w-2 h-2 bg-fire" />
          <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-fire" />
          Dal 1920
        </div>

        {/* Logo in intro */}
        <div className="flex justify-center mb-8">
          <img
            src={logo}
            alt="Braceria Macelleria Cisternino Logo"
            className="w-32 h-32 object-contain rounded-lg shadow-2xl"
          />
        </div>

        {/* Title - Stylized italic font */}
        <h1 className="hero-title text-5xl sm:text-7xl lg:text-9xl text-cream mb-4">
          Il Tempio
        </h1>
        <h1 className="hero-title text-gradient-fire text-5xl sm:text-7xl lg:text-9xl mb-8">
          della Brace
        </h1>

        {/* Subtitle */}
        <p className="font-accent text-xl sm:text-2xl text-gold-light italic tracking-wide mb-12 max-w-2xl mx-auto leading-relaxed">
          Dove tradizione, passione e eccellenza<br />
          si incontrano dal 1920
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="tel:+393403824158"
            className="px-10 py-5 bg-gradient-to-r from-fire to-fire-dark text-cream font-bold uppercase tracking-wider text-sm shadow-[0_10px_30px_rgba(139,21,56,0.3)] hover:translate-y-[-3px] hover:shadow-[0_15px_40px_rgba(139,21,56,0.5)] transition-all duration-400 flex items-center justify-center gap-3"
          >
            <Phone className="w-5 h-5" />
            Prenota il Tuo Tavolo
          </a>
          <a
            href="#menu"
            className="px-10 py-5 border-2 border-cream text-cream font-bold uppercase tracking-wider text-sm hover:bg-cream hover:text-noir hover:translate-y-[-3px] transition-all duration-400"
          >
            Esplora il Menù
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#intro"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default Hero;
