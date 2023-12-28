import React from "react";
import Container from "./shared/Container";
import AOS from "aos";
import "aos/dist/aos.css";

const CompanyGoals = () => {
  // Initialize AOS on component mount
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="company-goals" className="py-16 bg-white overflow-x-hidden">
      <Container>
        <div className="flex flex-col gap-5 lg:flex-row items-center lg:justify-between">
          {/* Left Side - Company Logo */}
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="mb-6 lg:mb-0 lg:w-1/3"
          >
            <img
              src="/src/assets/images/petParadise.png"
              alt="Company Logo"
              className="w-full h-auto"
            />
          </div>

          {/* Right Side - Company Goals and Descriptions */}
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="lg:w-2/3 text-center"
          >
            <h2 className="text-3xl lg:text-7xl font-bold mb-4">
              Our Company Goals
            </h2>
            <p className="text-gray-700 leading-loose">
              At Pet Paradise BD, our mission is to provide cat owners with the
              highest quality products that enhance the health and happiness of
              their feline companions. We are dedicated to curating a selection
              of premium cat foods and accessories, ensuring that every product
              we offer contributes to the well-being of your beloved pets.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CompanyGoals;
