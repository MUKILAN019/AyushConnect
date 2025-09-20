import React from 'react';
import { Search, Menu } from 'lucide-react';

const NavBar = () => {
  return (
    <nav className="bg-surface shadow-soft border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-primary flex items-center">
            NAMASTE ↔ ICD-11
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-3 py-2 text-text rounded hover:bg-gray-100 transition-all">
              <Search size={20} />
              <span>Search</span>
            </button>
            <button className="px-3 py-2 text-text rounded hover:bg-gray-100 transition-all">
              Upload
            </button>
          </div>
          <button className="md:hidden p-2">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;