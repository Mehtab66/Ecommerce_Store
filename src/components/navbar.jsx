import React, { useState } from "react";
import { Menu, X, User, LogIn } from "lucide-react";

const Navbar = ({ onAuthClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold tracking-tight">
              MyApp
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <button
                onClick={() => onAuthClick("login")}
                className="flex items-center space-x-2 hover:text-gray-300 transition-colors duration-200"
              >
                <LogIn size={20} />
                <span>Sign In</span>
              </button>
              <button
                onClick={() => onAuthClick("signup")}
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors duration-200"
              >
                <User size={20} />
                <span>Sign Up</span>
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-gray-300 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button
                onClick={() => onAuthClick("login")}
                className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
              >
                <LogIn size={20} />
                <span>Sign In</span>
              </button>
              <button
                onClick={() => onAuthClick("signup")}
                className="flex items-center space-x-2 px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                <User size={20} />
                <span>Sign Up</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
