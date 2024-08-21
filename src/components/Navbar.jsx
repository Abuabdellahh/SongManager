import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">
            Song Manager
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="hover:bg-blue-700 px-3 py-2 rounded">
              Home
            </Link>
            <Link to="/songs" className="hover:bg-blue-700 px-3 py-2 rounded">
              Songs
            </Link>
            <Link to="/create" className="hover:bg-blue-700 px-3 py-2 rounded">
              Create Song
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
