import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { bell, profile } from '../assets';

const NavbarCms = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-100 p-4 flex justify-between items-center">
      <div>
        {/* <h2 className="text-xl font-bold text-white">CMS Admin</h2> */}
      </div>
      <div className="flex items-center">
      <button className="mr-4 text-white">
          <img src={bell} alt="Notification Bell" className="h-6 w-6" />
        </button>
        <button className="relative text-white" onClick={toggleMenu}>
          <img src={profile} alt="Notification Bell" className="h-6 w-6" />
          {isOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2">
              <Link to="/dashboard" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-sm">
                Dashboard
              </Link>
              <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-sm">
                Profile
              </Link>
              <Link to="/logout" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-sm">
                Logout
              </Link>
            </div>
          )}
        </button>
      </div>
    </nav>
  );
};

export default NavbarCms;
