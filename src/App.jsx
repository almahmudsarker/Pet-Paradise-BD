import AboutUsSection from "./components/AboutUs";
import CompanyGoals from "./components/CompanyGoals";
import EducationalContent from "./components/EducationalContent";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ParadiseBanner from "./components/ParadiseBanner";
import Reviews from "./components/Reviews";
import SpecialOffers from "./components/SpecialOffers";
import Carousel from "./components/carousel/Carousel";
import FoodSlider from "./components/foodSlider/FoodSlider";
import SplashScreen from "./components/splashScreen/SplashScreen";

function App() {
  return (
    <>
      <SplashScreen />
      <Navbar />
      <HeroSection />
      <ParadiseBanner />
      <Carousel />
      <CompanyGoals />
      <EducationalContent />
      <FoodSlider />
      <SpecialOffers />
      <AboutUsSection />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
