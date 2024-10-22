import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation(); // Get current location to determine active link

  // Main links for the navbar
  const mainLinks = [
    { path: "/", label: "Home" },
    { path: "/contact-us", label: "Contact Us" },
    { path: "/about-us", label: "About Us" },
  ];

  // Dropdown links for Hot Options
  const dropdownLinks = [
    { path: "/sdg/no-poverty", label: "No Poverty" },
    { path: "/sdg/zero-hunger", label: "Zero Hunger" },
    { path: "/sdg/good-health-and-well-being", label: "Good Health" },
    { path: "/sdg/quality-education", label: "Quality Education" },
  ];

  return (
    <nav className="bg-gray-900 text-gray-100 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-3xl font-bold text-indigo-400">
          <Link
            to="/"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            SDGs
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-gray-100 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className={`hidden md:flex items-center space-x-6`}>
          {/* Dropdown for Hot Options */}

          {/* Main Links */}
          {mainLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`block mt-4 md:mt-0 text-lg transition-colors duration-300 
                ${
                  location.pathname === link.path
                    ? "text-indigo-400"
                    : "hover:text-indigo-400"
                }`}
              onClick={() => setIsOpen(false)} // Close mobile menu on link click
            >
              {link.label}
            </Link>
          ))}

          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-lg hover:text-indigo-400 transition-colors duration-300"
            >
              Hot Options
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 z-20 mt-2 w-48 bg-gray-800 rounded-md shadow-lg transition-all duration-300">
                {dropdownLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className={`block px-4 py-2 text-lg text-gray-100 hover:bg-gray-700 transition-colors duration-300`}
                    onClick={() => {
                      setIsDropdownOpen(false); // Close dropdown on click
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4 transition-all duration-300 ease-in-out">
          

          {/* Main Links for Mobile */}
          {mainLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`block py-2 text-lg transition-colors duration-300 
                ${
                  location.pathname === link.path
                    ? "text-indigo-400"
                    : "hover:text-indigo-400"
                }`}
              onClick={() => {
                setIsOpen(false); // Close mobile menu on click
              }}
            >
              {link.label}
            </Link>
          ))}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-lg hover:text-indigo-400 transition-colors duration-300"
            >
              Hot Options
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 z-20 mt-2 w-48 bg-gray-800 rounded-md shadow-lg transition-all duration-300">
                {dropdownLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className={`block px-4 py-2 text-lg text-gray-100 hover:bg-gray-700 transition-colors duration-300`}
                    onClick={() => {
                      setIsDropdownOpen(false); // Close dropdown on click
                      setIsOpen(false); // Close mobile menu
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
