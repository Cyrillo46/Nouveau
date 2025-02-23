import { useState } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiGriffinSymbol } from "react-icons/gi";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav
      className={`p-4 fixed top-0 left-0 w-full transition-all ${
        darkMode ? "bg-gray-900" : "bg-slate-800"
      } text-white shadow-md`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
          <GiGriffinSymbol />
          <span>Nouveau</span>
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

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="text-2xl focus:outline-none">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden flex flex-col items-center bg-slate-800 p-4 space-y-4 transition-all ${
            darkMode ? "bg-gray-900" : "bg-slate-800"
          }`}>
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
