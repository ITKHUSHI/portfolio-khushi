import { useState } from "react";
import React  from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
	  setIsMenuOpen(!isMenuOpen);
	};
  return (
    <nav className="  bg-gradient-to-tr from-black  to-orange-500 shadow-orange-400  border-none   p-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo */}
         

          {/* Site Name */}
          <span className="bg-gradient-to-r from-red-700 to-blue-900 text-transparent bg-clip-text font-bold  text-2xl ">KHUSHI</span>
        </div>
       
            {/* Hamburger Menu for small screens */}
        <button
          className="block sm:hidden  text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        
        
        <div className={`sm:flex sm:items-center  sm:justify-center  ${isMenuOpen ? 'block' : 'hidden'}`}>
          <Link to="/portfolio-khushi/" className="text-white mr-4 hover:text-gray-300 md:mr-0 md:mb-0 mb-4 block md:p-4 hover:scale-110  ">Home</Link>
          <Link to="/portfolio-khushi/projects" className="text-white mr-4 hover:text-gray-300 md:mr-0 md:mb-0 mb-4 block md:p-4 hover:scale-110">Projects</Link>
          <Link to="/portfolio-khushi/skills" className="text-white mr-4 hover:text-gray-300 md:mb-0 mb-4 block md:p-4 hover:scale-110">Skills</Link>
          <Link to="/portfolio-khushi/certificates" className="text-white hover:text-gray-300 md:mb-0 mb-4 block md:p-4 hover:scale-110">Certificates</Link>
        </div>
      </div>
    </nav>
    
  );
};

export default Navbar;