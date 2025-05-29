import React from "react";
import Navlogo from "../../assets/NavLogo.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md text-white px-4 md:px-6 py-4 md:py-6 flex items-center justify-between">
      <div className="flex items-center">
        <img
          src={Navlogo}
          alt="Logo"
          className="w-8 h-8 sm:w-10 sm:h-9 md:w-12 md:h-10 rounded"
        />
      </div>

      <nav className="flex items-center space-x-4 sm:space-x-6 md:space-x-10 text-sm sm:text-base md:text-lg">
        <a
          href="#about"
          className="hover:text-gray-300 transition whitespace-nowrap"
        >
          About Us
        </a>
        <a
          href="#waitlist"
          className="hover:text-gray-300 transition whitespace-nowrap"
        >
          Waitlist
        </a>
        <a
          href="#cart"
          className="hover:text-gray-300 transition whitespace-nowrap"
        >
          Cart
        </a>
        <button className="bg-white text-black px-4 py-1.5 sm:px-6 sm:py-2 md:px-8 md:py-2 rounded transition-transform duration-200 hover:scale-105 whitespace-nowrap">
          <nav>
            <Link to="/checkout">Buy</Link>
          </nav>
        </button>
      </nav>
    </header>
  );
}

export default Header;
