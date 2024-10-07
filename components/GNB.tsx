import React from 'react';

const GNB = () => {
  return (
    <header className="w-full h-[70px] flex justify-between items-center px-8 bg-black text-white shadow-md fixed top-0 z-10">
      {/* Logo */}
      <div className="text-title-1 font-bold cursor-pointer">
        CoinScope
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-8">
        <a href="#events" className="text-body-2-b hover:text-primary hover:underline">
          Events
        </a>
        <a href="#calendar" className="text-body-2-b hover:text-primary hover:underline">
          Calendar
        </a>
        <a href="#feed" className="text-body-2-b hover:text-primary hover:underline">
          Feed
        </a>
        <a href="#alert" className="text-body-2-b hover:text-primary hover:underline">
          Alert
        </a>
      </nav>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <button className="bg-blue500 text-white py-2 px-4 rounded-lg hover:bg-blue600 transition duration-300 ease-in-out">
          Sign In
        </button>
        <button className="text-body-2-m hover:text-gray300 transition duration-300 ease-in-out">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default GNB;
