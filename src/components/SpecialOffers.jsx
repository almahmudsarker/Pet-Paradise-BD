import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "./shared/Container";
import banner4 from "/banner4.png";

const SpecialOffers = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      className="bg-cover"
      style={{ backgroundImage: `url(${banner4})` }}
    >
      <Container>
        <div className="py-20 lg:py-40 2xl:py-80">
          <h2 className="text-2xl lg:text-5xl font-bold mb-16 text-center text-gradient">
            Special Offers and Promotions
          </h2>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-aos="fade-up"
          >
            {/* First-time buyer offer */}
            <div className="bg-[#fefdfb] p-6 rounded-lg shadow-md">
              <h3 className="text-gradient text-xl font-semibold mb-4">
                First-Time Buyer Discount
              </h3>
              <p className="text-gray-500">
                Enjoy exclusive discounts on your first purchase. Make your
                cat's day with quality products.
              </p>
            </div>

            {/* Seasonal sale */}
            <div className="bg-[#fefdfb] p-6 rounded-lg shadow-md">
              <h3 className="text-gradient text-xl font-semibold mb-4">
                Seasonal Sale
              </h3>
              <p className="text-gray-500">
                Explore our seasonal sale for limited-time offers on cat
                accessories, medicine, and food.
              </p>
            </div>

            {/* Loyalty program */}
            <div className="bg-[#fefdfb] p-6 rounded-lg shadow-md">
              <h3 className="text-gradient text-xl font-semibold mb-4">
                Loyalty Program
              </h3>
              <p className="text-gray-500">
                Join our loyalty program to enjoy exclusive benefits. Sign up
                today for purrks and savings.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SpecialOffers;
