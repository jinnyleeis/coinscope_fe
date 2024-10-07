import React from 'react';

const GNB = () => {
  return (
    <header className="w-full max-w-screen-2xl  lg:px-[120px] mx-auto h-[70px] flex justify-between items-center px-8 bg-black text-white shadow-md fixed top-0 z-10">
      {/* Logo */}
      <div className="text-title-1 font-bold cursor-pointer">
        CoinScope
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-8 ">
        <div className="px-5 py-1.5 rounded-[20px] flex items-center">
          <a href="#events" className="text-[#e1e2e4] text-sm font-medium font-['SUIT'] leading-relaxed hover:font-bold ">
            Events
          </a>
        </div>
        <div className="px-5 py-1.5 rounded-[20px] flex items-center">
          <a href="#calendar" className="text-[#e1e2e4] text-sm font-medium font-['SUIT'] leading-relaxed hover:font-bold ">
            Calendar
          </a>
        </div>
        <div className="px-5 py-1.5 rounded-[20px] flex items-center">
          <a href="#feed" className="text-[#e1e2e4] text-sm font-medium font-['SUIT'] leading-relaxed hover:font-bold ">
            Feed
          </a>
        </div>
        <div className="px-5 py-1.5 rounded-[20px] flex items-center">
          <a href="#alert" className="text-[#e1e2e4] text-sm font-medium font-['SUIT'] leading-relaxed hover:text-primary">
            Alert
          </a>
        </div>
      </nav>

      {/* Action Buttons */}
      <div className="flex space-x-4 items-center">
        {/* Search Button */}
        <div className=" w-[220px] h-[42px] px-5 py-2 bg-[#242424] rounded-[20px] flex items-center">
          <div className="text-[#a6a8b0] text-sm font-medium font-['SUIT'] leading-relaxed">Search</div>
        </div>

        {/* Sign Up Button */}
        <div className="px-5 py-1.5 bg-[#242424] rounded-[20px] flex items-center">
          <div className="text-white text-sm font-medium font-['SUIT'] leading-relaxed">Sign Up</div>
        </div>

        {/* Sign In Button */}
        <div className="px-5 py-1.5 bg-[#2440f2] rounded-[20px] flex items-center">
          <div className="text-white text-sm font-medium font-['SUIT'] leading-relaxed">Sign In</div>
        </div>

        {/* Language Selection */}
        <div className="pl-2 py-[7.30px] rounded-[65.11px] flex items-center">
          <div className="text-[#a6a8b0] text-sm font-medium font-['SUIT'] leading-relaxed">EN</div>
        </div>
      </div>
    </header>
  );
};

export default GNB;
