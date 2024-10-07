import React from 'react';
import GNB from '@/components/GNB';
import Footer from '@/components/Footer';

const LandingPage = () => {
  return (
    <div className="bg-[#111111] min-h-screen">
      {/* Global Navigation Bar */}
      <GNB />

      {/* Main Section */}
      <div className="container mx-auto my-52 px-4 h-full flex flex-col gap-16">
        
        {/* 첫 번째 행: 텍스트 섹션 + 샘플 카드 섹션 */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start gap-8 max-w-7xl">
          {/* 텍스트 섹션 */}
          <div className="flex flex-col gap-20 w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-white text-4xl font-bold leading-tight">
              Never Miss
              <br />
              a Crucial Crypto Event
            </h1>
            <p className="text-[#a6a8b0] text-lg leading-relaxed">
              Essential Guide to Upcoming
              <br />
              Cryptocurrency Events and Updates
            </p>
            {/* Explore 버튼 */}
            <div className="w-full flex justify-center md:justify-start my-16">
              <button className="w-[200px] px-6 py-2 bg-[#2440f2] rounded-[20px] text-white text-sm font-medium transition-all duration-300 hover:bg-[#3c86ff] leading-relaxed">
                Explore
              </button>
            </div>
          </div>

          {/* 샘플 카드 섹션 */}
          <div className="w-full flex justify-center items-center">
            <div className="relative w-full max-w-md h-[260px] bg-white rounded-lg shadow-lg flex justify-center items-center">
              <div className="absolute inset-0 bg-[#111111] rounded-lg opacity-80 blur-lg" />
              <div className="relative z-10 text-white">Sample Card Content</div>
            </div>
          </div>
        </div>

        {/* 두 번째 행: 카드 그리드 섹션 */}
        <div className="w-full flex justify-start">
          <div className=" w-[1020px] grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-16 max-w-7xl">
            <div
              className="w-full w-max-[328px] h-[204px] rounded-[29.14px] flex justify-center items-center shadow-lg"
              style={{
                background: 'linear-gradient(180deg, #3C86FF1F 12%, #3C86FF1F 4%, #3C86FF1F 7%)',
              }}
            >
              <div className="text-center transition-transform hover:scale-105 duration-300 ease-in-out">
                <h2 className="text-white text-4xl font-bold">000</h2>
                <p className="text-[#a6a8b0] text-xl">Events Tracked</p>
              </div>
            </div>

            <div
              className="w-full h-[204px] rounded-[29.14px] flex justify-center items-center shadow-lg"
              style={{
                background: 'linear-gradient(180deg, #3C86FF1F 12%, #3C86FF1F 4%, #3C86FF1F 7%)',
              }}
            >
              <div className="text-center transition-transform hover:scale-105 duration-300 ease-in-out">
                <h2 className="text-white text-4xl font-bold">00</h2>
                <p className="text-[#a6a8b0] text-xl">Events Updated Daily</p>
              </div>
            </div>

            <div
              className="w-full h-[204px] rounded-[29.14px] flex justify-center items-center shadow-lg"
              style={{
                background: 'linear-gradient(180deg, #3C86FF1F 12%, #3C86FF1F 4%, #3C86FF1F 7%)',
              }}
            >
              <div className="text-center transition-transform hover:scale-105 duration-300 ease-in-out">
                <p className="text-[#a6a8b0] text-xl">From</p>
                <h2 className="text-white text-4xl font-bold">$0</h2>
                <p className="text-[#a6a8b0] text-xl">
                  Cost for receiving reminders
                  <br />
                  and notifications
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
