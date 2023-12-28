import React from "react";
import Container from "./shared/Container";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  // Initialize AOS on component mount
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="about-us" className="py-16 overflow-x-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center lg:justify-between">
          {/* Right Side - Owner Words */}
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="lg:w-2/3"
          >
            <h2 className="text-3xl lg:text-7xl font-bold mb-4 text-center lg:text-left">
              Owner Words
            </h2>
            <h2 className="text-xl lg:text-2xl font-bold mb-4 text-center lg:text-left">
              Rahat Amin Shopnil
            </h2>
            <p className="text-gray-700 leading-loose text-center lg:text-left mb-10 lg:mb-0">
              Rahat Amin Shopnil is a passionate cat lover whose journey with
              feline friends inspired the creation of Pet Paradise BD. His
              profound love for cats and dedication to their well-being led to
              the establishment of Pet Paradise BD, a haven for premium cat
              foods and accessories. He is a student of DBA at BAIUST. He is a
              very friendly person and loves to make new friends. He is also a
              very good listener and loves to help people. He is a very
              hard-working person and loves to work with a team. He is also a
              very good human being.
            </p>
          </div>
          {/* Left Side - Owner Photo */}
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="mb-6 lg:mb-0 lg:w-1/3"
          >
            <img
              src="/src/assets/images/rahat.jpg"
              alt="Owner Photo"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
