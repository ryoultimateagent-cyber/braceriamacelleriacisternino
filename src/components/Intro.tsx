import logo from "@/assets/logo-cisternino.jpg";

const Intro = () => {
  return (
    <section id="intro" className="py-24 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-10">
            <img
              src={logo}
              alt="Braceria Macelleria Cisternino"
              className="w-40 h-40 object-contain rounded-lg shadow-2xl"
            />
          </div>

          <h2 className="font-elegant text-3xl sm:text-5xl font-bold text-cream mb-6 relative inline-block section-divider">
            Braceria Macelleria Cisternino
          </h2>

          <p className="font-accent text-xl text-gold-light italic mt-10 leading-relaxed">
            Nel cuore di Mola di Bari, la nostra famiglia porta avanti una tradizione centenaria. 
            Dalla macelleria alla braceria, dalla selezione accurata delle carni alla cottura perfetta 
            sulla brace viva: ogni dettaglio racconta una storia di passione e dedizione autentica.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {[
              { icon: "🔥", label: "Brace Autentica" },
              { icon: "🥩", label: "Carni Selezionate" },
              { icon: "👨‍🍳", label: "Tradizione dal 1920" },
              { icon: "⭐", label: "Qualità Premium" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <span className="text-4xl">{item.icon}</span>
                <span className="text-sm text-gold-light uppercase tracking-wider">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
