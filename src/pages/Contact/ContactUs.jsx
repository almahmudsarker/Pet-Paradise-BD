import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "../../components/shared/Container";
import Footer from "../../components/Footer";

const ContactUs = () => {
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
            Contact Pet Paradise BD
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8" data-aos="fade-right">
              {/* Google Map */}
              <iframe
                title="Pet Paradise BD Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.034206707366!2d23.8620324183315!3d90.41161756512176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z90.41161756512176!8m2!3dYourLatitude!4d23.8620324183315"
                width="100%"
                height="400"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
            </div>

            <div className="md:w-1/2 md:ml-12" data-aos="fade-left">
              <h2 className="text-3xl font-semibold mb-4">Get In Touch</h2>

              <p className="text-lg mb-4">
                We'd love to hear from you! Whether you have a question about
                our products, need assistance, or just want to chat about pets,
                feel free to reach out to us.
              </p>

              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6 mr-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
                <p className="text-lg">
                  123 Pet Paradise Street, Uttara, Dhaka, Bangladesh
                </p>
              </div>

              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6 mr-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
                <p className="text-lg">Email: info@petparadisebd.com</p>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6 mr-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
                <p className="text-lg">Phone: +1 (123) 456-7890</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default ContactUs;
