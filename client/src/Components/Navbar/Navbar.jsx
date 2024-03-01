import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="container mx-auto flex items-center">
        <div className="flex-grow flex justify-center">
          <div className="relative flex items-center">
            <SearchIcon className="w-5 h-5 text-gray-400 absolute top-3 left-3" />
            <input
              type="search"
              placeholder="Search"
              className="text-black w-full bg-gray-100 border border-gray-300 rounded-md pl-10 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
        <div className="hidden md:flex justify-end">    
          <a
            to="#"
            className="text-white hover:text-gray-400 px-4 py-2 rounded-md text-sm"
          >
            Categories
          </a>
          <a
            to="#"
            className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm"
          >
            Website Builders
          </a>
          <a
            to="#"
            className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm"
          >
            Today's Deals
          </a>
        </div>
        <div className="md:hidden flex justify-center items-center">
          <button
            className="text-white text-2xl focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center mt-2">
            {/* Collapsible menu content */}
            <a
              to="#"
              className="text-white hover:text-gray-400 px-4 py-2 rounded-md text-sm"
            >
              Categories
            </a>
            <a
              to="#"
              className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm"
            >
              Website Builders
            </a>
            <a
              to="#"
              className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm"
            >
              Today's Deals
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
