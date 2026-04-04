import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MenuPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20 px-4" />
      <Footer />
    </div>
  );
};

export default MenuPage;
