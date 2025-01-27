import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md bg-[#121618] relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 font-oswald items-center">
          {/* Brand Name - centered on mobile, left on desktop */}
          <div className="flex-1 flex pt-6 justify-center lg:justify-start">
            <img src="/logo.png" className='w-[86px] h-[76px]' alt="" srcset="" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden text-[16px] pt-6 lg:flex uppercase space-x-8">
            <a
              href="/"
              className="text-base-content hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="/"
              className="text-base-content hover:text-blue-600 transition-colors duration-200"
            >
              Menu
            </a>
            <a
              href="/menu"
              className="text-base-content hover:text-blue-600 transition-colors duration-200"
            >
              Make a reservation
            </a>
            <a
              href="/contact"
              className="text-base-content hover:text-blue-600 transition-colors duration-200"
            >
              Contact us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden absolute right-4 p-2 text-base-content"
          >
            <span className="sr-only">Open menu</span>
            <div className="w-6 flex flex-col space-y-1">
              <span className={`block h-0.5 w-6 bg-current transform transition duration-200 ease-in-out ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 w-6 bg-current transition duration-200 ease-in-out ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-current transform transition duration-200 ease-in-out ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden ${
          isOpen ? 'block' : 'hidden'
        } absolute top-16 left-0 right-0 bg-black border-b border-gray-200 z-50`}
      >
        <div className="px-4 py-2">
          <a
            href="/"
            className="block w-full text-base-content hover:text-blue-600 hover:bg-gray-50 px-4 py-3 transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="/about"
            className="block w-full text-base-content hover:text-blue-600 hover:bg-gray-50 px-4 py-3 transition-colors duration-200"
          >
            Menu
          </a>
          <a
            href="/menu"
            className="block w-full text-base-content hover:text-blue-600 hover:bg-gray-50 px-4 py-3 transition-colors duration-200"
          >
            Make a reservation
          </a>
          <a
            href="/contact"
            className="block w-full text-base-content hover:text-blue-600 hover:bg-gray-50 px-4 py-3 transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;