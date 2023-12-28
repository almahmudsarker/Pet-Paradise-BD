import AboutUsSection from "./components/AboutUs";
import CompanyGoals from "./components/CompanyGoals";
import EducationalContent from "./components/EducationalContent";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CompanyGoals />
      <EducationalContent />
      <AboutUsSection />
      <Footer />
    </>
  );
}

export default App;
