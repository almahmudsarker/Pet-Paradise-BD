import React from "react";
import Container from "./shared/Container";
import AOS from "aos";
import "aos/dist/aos.css";
import BANNER from "../assets/images/banner1.png";

const EducationalContent = () => {
  // Initialize AOS on component mount
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="products"
      // className="py-16 bg-cover bg-center bg-[#73AEAE]"
      className="py-36 bg-cover bg-center bg-[#73AEAE] overflow-x-hidden"
      style={{
        backgroundImage: `url(${BANNER})`,
      }}
    >
      <Container>
        {/* <div className="text-center">
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-3xl lg:text-5xl font-bold text-black mb-4"
          >
            Things You Should Know About Your Cat
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-gray-500 mb-8"
          >
            Explore tips on cat nutrition, care, and product usage.
          </p>
        </div> */}

        {/* Blog/Advice Section */}

        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold mb-2">Nutrition Tips</h3>
            <p className="text-gray-700">
              Learn about the essential nutrients your cat needs for a healthy
              diet.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold mb-2">Care Guidelines</h3>
            <p className="text-gray-700">
              Discover effective ways to care for your cat's well-being and
              happiness.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold mb-2">Product Usage Tips</h3>
            <p className="text-gray-700">
              Maximize the benefits of our products with these helpful tips.
            </p>
          </div>
        </div> */}

        {/* Engaging Media (Videos or Infographics) */}

        {/* <div className="lg:mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-center"
          >
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/jLNiAxeNlXQ?si=PhTGDgHMzw6I3xYU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-center"
          >
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/KHmrh6eQ6EQ?si=_G5KlVG4JbnVstBx"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
         
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-center"
          >
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/--QGl3PwzI0?si=55WiGj6iGjksDmom"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div> */}
      </Container>
    </section>
  );
};

export default EducationalContent;
