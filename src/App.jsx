import AboutUsSection from "./components/AboutUs";
import CompanyGoals from "./components/CompanyGoals";
import EducationalContent from "./components/EducationalContent";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Carousel from "./components/carousel/Carousel";
import FoodSlider from "./components/foodSlider/FoodSlider";
import SplashScreen from "./components/splashScreen/SplashScreen";

function App() {
  return (
    <>
      <SplashScreen />
      <Navbar />
      <HeroSection />
      <Carousel />
      <CompanyGoals />
      <EducationalContent />
      <FoodSlider />
      <AboutUsSection />
      <Footer />
    </>
  );
}

export default App;
