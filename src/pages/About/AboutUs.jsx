import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "../../components/shared/Container";
import Footer from "../../components/Footer";

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Container>
        <div className="mt-10 mb-20">
          <h1
            className="text-4xl font-semibold mb-8 text-center"
            data-aos="fade-up"
          >
            About Pet Paradise BD
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8" data-aos="fade-right">
              <img
                src="https://placekitten.com/800/600" // Replace with actual image URL
                alt="Pet Paradise BD"
                className="w-full h-auto rounded-lg"
              />
            </div>

            <div className="md:w-1/2 md:ml-12" data-aos="fade-left">
              <p className="text-lg mb-4">
                Pet Paradise BD is your one-stop destination for premium pet
                products and services. We are dedicated to providing the best
                for your furry friends, ensuring their health, happiness, and
                well-being.
              </p>

              <p className="text-lg">
                Our mission is to create a paradise for pets, offering a wide
                range of high-quality products, from nutritious food to
                comfortable beds and entertaining toys.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default AboutUs;
