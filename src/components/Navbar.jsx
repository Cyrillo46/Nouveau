import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { GiGriffinSymbol } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <nav className="bg-slate-800 text-white p-4 fixed top-0 left-0 w-full shadow-md z-50">
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

        {/* Mobile Menu Button (with animation) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden text-2xl transition-transform duration-300 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`absolute left-0 w-full bg-slate-800 shadow-md transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "translate-y-0 opacity-100 max-h-60 py-4"
            : "-translate-y-full opacity-0 max-h-0 py-0"
        } overflow-hidden md:hidden`}>
        <div className="flex flex-col items-start pl-6 space-y-4">
          <Link
            to="/dashboard"
            className="text-lg hover:text-gray-300"
            onClick={() => setIsOpen(false)}>
            Dashboard
          </Link>
          <Link
            to="/profile"
            className="text-lg hover:text-gray-300"
            onClick={() => setIsOpen(false)}>
            Profile
          </Link>
          <Link
            to="/logout"
            className="text-lg hover:text-gray-300"
            onClick={() => setIsOpen(false)}>
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};
