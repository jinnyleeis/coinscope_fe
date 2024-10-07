import React from 'react';
import Image from 'next/image';

const GNB = () => {
  return (
    <header className="w-full max-w-screen-2xl  lg:px-[120px] mx-auto h-[70px] flex justify-between items-center px-8 bg-black text-white shadow-md fixed top-0 z-10">
     {/* 로고 영역 */}
  <div className="flex items-center">
    {/* PNG 아이콘 추가 (next/image) */}
    <Image 
      src="/images/logo_icon.png" 
      alt="Logo Icon" 
      width={16.538} 
      height={19.636} 
      className="flex-shrink-0"
    />

    {/* CoinScope 텍스트 */}
    <div className="ml-2 text-title-1 font-bold cursor-pointer">
      CoinScope
    </div>
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
<div className="sm:w-[80px] px-5 py-1.5 bg-[#242424] rounded-[20px] flex items-center">
  <div className="text-white text-sm font-medium font-['SUIT'] leading-relaxed whitespace-nowrap">Sign Up</div>
</div>

{/* Sign In Button */}
<div className="sm:w-[80px] px-5 py-1.5 bg-[#2440f2] rounded-[20px] flex items-center">
  <div className="text-white text-sm font-medium font-['SUIT'] leading-relaxed whitespace-nowrap">Sign In</div>
</div>


        {/* Language Selection */}
        <div className="flex items-center gap-1 gap-x-2">
  {/* 아이콘 */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
  >
    <g clipPath="url(#clip0_3011_3125)">
      <path
        d="M7.00002 12.8332C10.2217 12.8332 12.8334 10.2215 12.8334 6.99984C12.8334 3.77818 10.2217 1.1665 7.00002 1.1665C3.77836 1.1665 1.16669 3.77818 1.16669 6.99984C1.16669 10.2215 3.77836 12.8332 7.00002 12.8332Z"
        stroke="#A6A8B0"
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.16669 7H12.8334"
        stroke="#A6A8B0"
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.00002 1.1665C8.4591 2.76388 9.28829 4.83686 9.33335 6.99984C9.28829 9.16282 8.4591 11.2358 7.00002 12.8332C5.54094 11.2358 4.71175 9.16282 4.66669 6.99984C4.71175 4.83686 5.54094 2.76388 7.00002 1.1665Z"
        stroke="#A6A8B0"
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_3011_3125">
        <rect width="14" height="14" fill="white" />
      </clipPath>
    </defs>
  </svg>

  {/* EN 글씨 */}
  <div className="text-[#a6a8b0] pt-1 text-sm font-medium font-['SUIT'] leading-relaxed">
    EN
  </div>
</div>
        </div>

    </header>
  );
};

export default GNB;
