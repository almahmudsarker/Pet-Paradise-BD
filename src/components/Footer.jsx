import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Container from "./shared/Container";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Section - Logo and Social Media Icons */}
          <div className="mb-4 lg:mb-0">
            {/* Logo */}
            <img
              src="/petParadise.png"
              alt="Footer Logo"
              className="h-28 w-28 ml-2 bg-white p-2 rounded-full mb-10"
            />
            {/* Social Media Icons */}
            <div className="flex space-x-10">
              <a
                href="https://www.facebook.com/profile.php?id=100063697374773"
                className="text-white hover:text-gray-300"
              >
                <FaFacebook />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaTwitter />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Right Section - Quick Links */}
          <div className="lg:text-right">
            <nav className="flex flex-col lg:flex-row space-y-2 lg:space-x-4 lg:space-y-0">
              <a href="#" className="text-white hover:text-gray-300">
                Home
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                Products
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                About
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                Contact
              </a>
            </nav>
          </div>
        </div>

        {/* Legal Information */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Privacy Policy | Terms of Use | © 2023 Pet Paradise BD
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
