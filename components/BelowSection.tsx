import Image from 'next/image';
import React from 'react';

const Belowsection = () => {
  return (
    <div>
      {/* 기존 섹션 */}
      <div className="h-[522.03px] justify-start items-center gap-[79px] inline-flex relative">
        {/* 왼쪽 이미지 섹션 */}
        <div className="w-[477.14px] h-[522.03px] relative">
          <Image
            src="https://via.placeholder.com/320x522"
            alt="Crypto event image"
            layout="fill"
            objectFit="cover"
            className="w-80 h-[522.03px] left-0 top-0 absolute"
          />
         
        </div>

        {/* 오른쪽 텍스트 섹션 */}
        <div className="w-[463px] flex-col justify-start items-start gap-12 inline-flex">
          <div className="self-stretch h-[156px] flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch text-white text-[32px] font-bold font-['SUIT'] leading-[44px]">
              Stay Connected with the Latest Trends and Events
            </div>
            <div className="text-[#dcdcdc] text-lg font-normal leading-relaxed">
              Get real-time alerts and stay informed on all major cryptocurrency happenings
            </div>
          </div>
          {/* 버튼 */}
          <div className="w-[200px] my-16 px-6 py-1 bg-[#2440f2] rounded-[20px] justify-center items-center inline-flex">
            <button className="text-white text-sm font-medium font-['SUIT'] leading-relaxed">
              Free Curated Alerts
            </button>
          </div>
        </div>
      </div>

 {/* 추가된 섹션 1 */}
<div className="h-[386px] mt-20 justify-start items-center gap-10 inline-flex  relative">
  <div className="w-[530px] flex-col justify-start items-start gap-12 inline-flex">
    <div className="h-[156px] flex-col justify-start items-start gap-4 flex">
      <div className="text-white text-[32px] font-bold font-['SUIT'] leading-[44px]">
        Cut through the noise with <br />personalized crypto event notifications
      </div>
      <div className="text-[#dcdcdc] text-lg font-normal font-['Pretendard Variable'] leading-relaxed">
        Get only the alerts you need with our<br />customizable crypto event filters
      </div>
    </div>
    <div className="mt-48 w-[200px]  px-6 py-1 bg-[#242424] rounded-[20px] justify-center items-center inline-flex ">
      <button className="text-[#616574]  text-sm font-medium font-['SUIT'] leading-relaxed px-4 py-2">
        Coming Soon
      </button>
    </div>
  </div>
  <div className= "w-[660px] h-[386px]  relative">
    <div className="w-[404px] h-[485.44px] left-[5px] top-[2.99px] absolute bg-white/30 rounded-[36px] shadow border-2 border-white" />
  </div>
</div>



      {/* 추가된 섹션 2 */}
      <div className="w-[1020px] h-[713.62px]  mt-44 flex-col justify-start items-center gap-16 inline-flex  relative">
        <div className="self-stretch text-center text-white text-[32px] font-bold font-['SUIT'] leading-[44px]">
          Unlock the Power of Timely Crypto Event Tracking
        </div>
        <div className="w-[800px] h-[605.62px] relative">
          <div className="w-[800px] h-[605.62px] left-0 top-0 absolute bg-white/30 rounded-tl-[28.92px] rounded-tr-[28.92px] border-2 border-white" />
          <div className="w-[782.33px] h-[587.95px] left-[9.64px] top-[8.84px] absolute bg-white rounded-tl-3xl rounded-tr-3xl border-8 justify-center items-center inline-flex">
              {/* 섹션 내부 콘텐츠 */}
              {/* 생략된 내용 */}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Belowsection;
