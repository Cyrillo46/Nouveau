import { Link } from "react-router-dom";
import { useState } from "react";
import { GiGriffinSymbol } from "react-icons/gi"; // Example logo icon
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for mobile menu

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 text-white p-4 fixed top-0 left-0 w-full shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
          <GiGriffinSymbol />
          <span>Turnover App</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/dashboard" className="hover:text-gray-200">
            Dashboard
          </Link>
          <Link to="/profile" className="hover:text-gray-200">
            Profile
          </Link>
          <Link to="/logout" className="hover:text-gray-200">
            Logout
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-blue-600 p-4 space-y-4">
          <Link to="/dashboard" className="hover:text-gray-200">
            Dashboard
          </Link>
          <Link to="/profile" className="hover:text-gray-200">
            Profile
          </Link>
          <Link to="/logout" className="hover:text-gray-200">
            Logout
          </Link>
        </div>
      )}
    </nav>
  );
};
