import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-4">
            <Logo
              size="sm"
              className="sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-28 xl:w-28"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                <span style={{ color: "#ed1b24", opacity: 0.9 }}>Sai</span>{" "}
                <span style={{ color: "#303090", opacity: 0.9 }}>
                  Suryabindu
                </span>{" "}
                <span className="text-gray-800">Ventures LLP</span>
              </h1>
              <p className="text-sm text-green-700 font-bold">
                Solution for Solar Energy
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-green-600 transition-colors scroll-smooth"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("home")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-green-600 transition-colors scroll-smooth"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-green-600 transition-colors scroll-smooth"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Services
            </a>
            <a
              href="#subsidy"
              className="text-gray-700 hover:text-green-600 transition-colors scroll-smooth"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("subsidy")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Subsidy
            </a>
            <a
              href="#process"
              className="text-gray-700 hover:text-green-600 transition-colors scroll-smooth"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("process")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Process
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-green-600 transition-colors scroll-smooth"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 hover:text-green-600 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="transition-all duration-500 ease-out">
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6 transform rotate-180 scale-110" />
              ) : (
                <FaBars className="w-6 h-6 transform rotate-0 scale-100" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <a
                href="#home"
                className="text-gray-700 hover:text-green-600 transition-colors scroll-smooth"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("home")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-green-600 transition-colors scroll-smooth"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
              >
                About
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-green-600 transition-colors scroll-smooth"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
              >
                Services
              </a>
              <a
                href="#subsidy"
                className="text-gray-700 hover:text-green-600 transition-colors scroll-smooth"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("subsidy")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
              >
                Subsidy
              </a>
              <a
                href="#process"
                className="text-gray-700 hover:text-green-600 transition-colors scroll-smooth"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("process")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
              >
                Process
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-green-600 transition-colors scroll-smooth"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
              >
                Contact
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
