import React from "react";
import calendar_icon from '../assets/icons/calendar-days-svgrepo-com.png';
import user_icon from '../assets/icons/user-svgrepo-com.png';
import search_icon from '../assets/icons/search-svgrepo-com.png';

const SearchFilter = () => {
  return (
    <div className="w-4/5  flex justify-around items-center gap-0 bg-white lg:h-14 xl:h-[80px] absolute left-0 right-0 lg:top-[580px] xl:top-[865px] bottom-50 rounded-[35px] xl:rounded-[40px] shadow-lg m-auto">
      <div className="w-[20%] h-full flex items-center justify-center gap-6 ">
        <img className="w-[22px]" src={calendar_icon} />
        <p>Check in</p>
      </div>
      <div className="border-l-2 border-gray-500 h-6"></div>
      <div className="w-[20%] h-full flex items-center justify-center gap-6 ">
        <img className="w-[22px]" src={calendar_icon} />
        Check out
      </div>
      <div className="border-l-2 border-gray-500 h-6"></div>
      <div className="w-[30%] h-full flex items-center justify-center gap-6 ">
        <img className="w-[22px]" src={user_icon} />
        Adults
      </div>
      <div className="border-l-2 border-gray-500 h-6"></div>
      <div className="w-[10.5%] h-full gap-2 flex items-center justify-center bg-[#0A82DC] rounded-r-full mr-[-16px]">
      <img className="w-[20px]" src={search_icon} /> 
        <button>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;
