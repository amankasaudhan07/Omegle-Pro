import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="w-full bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left: Logo / Icon */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">Logo</h1>
          </div>

          {/* Center: Menu */}
          <div className="hidden md:flex space-x-8 items-center justify-center flex-grow">
            <a href="/" className="hover:text-yellow-400">Home</a>
            <a href="/about" className="hover:text-yellow-400">About</a>
            <a href="/support" className="hover:text-yellow-400">Support</a>
          </div>

          {/* Right: Login */}
          <div className="hidden md:flex items-center">
            <a href="/login" className="ml-6 hover:text-yellow-400">Login</a>
            <a href="/register" className="ml-6 hover:text-yellow-400">Register</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={handleNavToggle}>
              {navOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="/about" className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="/support" className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">Support</a>
            <a href="/login" className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">Login</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
