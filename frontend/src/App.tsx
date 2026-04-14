import Footer from "./components/Footer";
import FeaturesSection from "./components/FeaturesSection";
import HeroSection from "./components/HeroSection";
import InstallationSection from "./components/InstallationSection";
import Navbar from "./components/Navbar";
import ShowcaseSection from "./components/ShowcaseSection";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-brand-100 selection:text-brand-900">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ShowcaseSection />
      <InstallationSection />
      <Footer />
    </div>
  );
}
