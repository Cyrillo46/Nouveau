import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
          Turnover App
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="text-white text-3xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}>
          <GiHamburgerMenu />
        </button>

        {/* Navigation Links - Hidden on small screens */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-blue-600 md:flex md:space-x-6 md:items-center p-4 md:p-0 transition-all duration-300 ease-in ${
            isOpen ? "block" : "hidden"
          }`}>
          <li className="text-white py-2 md:py-0">
            <Link
              to="/dashboard"
              className="block md:inline hover:text-gray-300">
              Dashboard
            </Link>
          </li>
          <li className="text-white py-2 md:py-0">
            <Link to="/profile" className="block md:inline hover:text-gray-300">
              Profile
            </Link>
          </li>
          <li className="text-white py-2 md:py-0">
            <Link to="/logout" className="block md:inline hover:text-gray-300">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
