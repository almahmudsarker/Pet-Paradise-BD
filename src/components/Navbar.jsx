import React, { useEffect, useState } from "react";
import Container from "./shared/Container";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isScrolledDown = prevScrollPos > currentScrollPos;

    setVisible(isScrolledDown);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <nav
      className={`bg-transparent top-0 z-50 w-full p-4 ${
        visible ? "fixed" : "absolute"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between mt-5">
          {/* Logo (Left Side) */}
          <div className="flex items-center">
            <img
              src="/src/assets/images/petParadise.png"
              alt="Logo"
              className="h-20 w-20 mr-2"
            />
            <span className="text-white text-lg font-bold hover:text-[#007257]">
              {/* Pet Paradise BD */}
            </span>
          </div>

          {/* Navigation Links (Right Side) */}
          <div className="hidden lg:flex space-x-4 items-center">
            <a href="#products" className="text-white hover:text-gray-300">
              Products
            </a>
            <a href="/about" className="text-white hover:text-gray-300">
              About
            </a>
            <a href="/contact" className="text-white hover:text-gray-300">
              Contact
            </a>
            <a
              href="/order"
              className="bg-[#007257] text-white hover:bg-white hover:text-[#296456] px-4 py-2 rounded"
            >
              Order
            </a>
          </div>

          {/* Mobile Menu Toggle (Hidden on larger screens) */}
          <div className="lg:hidden bg-white">
            {/* Mobile menu button */}
            <FaBarsStaggered onClick={toggleMobileMenu} />
          </div>

          {/* Mobile Menu (Hidden on larger screens) */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full right-0 w-1/2 bg-white p-5">
              {/* Mobile menu content goes here */}
              <a href="#products" className="block text-[#007257] py-2">
                Products
              </a>
              <a href="/about" className="block text-[#007257] py-2">
                About
              </a>
              <a href="/contact" className="block text-[#007257] py-2">
                Contact
              </a>
              <a
                href="/order"
                className="block text-[#007257] hover:text-[#296456] py-2 rounded"
              >
                Order
              </a>
            </div>
          )}
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
