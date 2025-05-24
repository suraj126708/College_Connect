import React from 'react';
import { Link } from 'react-router-dom';

const UserNavbar = () => {
  return (
    <nav className="backdrop-blur-md bg-black/20 shadow-sm shadow-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-100">
              College Connect
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-100 hover:text-gray-100 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-100 hover:text-blue-100 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-100 hover:text-blue-100 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-gray-100 hover:text-blue-100 focus:outline-none"
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="hidden md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link 
            to="/" 
            className="text-gray-100 hover:text-blue-100 block px-3 py-2 text-base font-medium"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-gray-100 hover:text-blue-100 block px-3 py-2 text-base font-medium"
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="text-gray-100 hover:text-blue-100 block px-3 py-2 text-base font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
