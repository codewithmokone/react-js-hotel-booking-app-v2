import React, { useState } from "react";
import calendar_icon from "../assets/icons/calendar-days-svgrepo-com.png";
import user_icon from "../assets/icons/user-svgrepo-com.png";
import search_icon from "../assets/icons/search-svgrepo-com.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const SearchFilter = () => {
  const [dateIn, setDateIn] = useState(new Date());
  const [dateOut, setDateOut] = useState(new Date());
  const [showCheckIn, setShowCheckIn] = useState(false);
  const [showCheckOut, setShowCheckOut] = useState(false);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const selectedDate = (dateIn, dateOut) => {
    // setCheckInDate(dateIn)
    console.log("Date in:", dateIn);
    // setCheckOutDate(dateOut)
    console.log("Date out:", dateOut);
  };

  const search = () => {
    console.log("Check in:", checkInDate, "Check Out: ", checkOutDate);
    
  }
  

  return (
    <div className="w-4/5 xl:w-3/5  flex justify-around items-center gap-0 bg-white lg:h-14 xl:h-[80px] absolute left-0 right-0 lg:top-[578px] xl:top-[865px] bottom-50 rounded-[35px] xl:rounded-[40px] shadow-lg m-auto">
      <div className="w-[20%] h-full flex flex-col items-center justify-center gap-6 ">
        {showCheckIn ? (
          // <Calendar className="absolute top-[60px] botton-0" onChange={selectedDate} value={dateIn}/>
          <input type="date" onChange={(e) => setCheckInDate(e.target.value)} />
        ) : (
          <button className="flex gap-4" onClick={(e) => setShowCheckIn(true)}>
            <img className="w-[22px]" src={calendar_icon} />
            <p>Check in</p>
          </button>
        )}
      </div>
      <div className="border-l-2 border-gray-500 h-6"></div>
      <div className="w-[20%] h-full flex items-center justify-center gap-6 ">
        
        {showCheckOut ? (
          <input type="date" onChange={(e) => setCheckOutDate(e.target.value)} />
        ) : (
          <button className="flex gap-4" onClick={(e) => setShowCheckOut(true)}>
          <img className="w-[22px]" src={calendar_icon} />
          Check out
        </button>
        )}
      </div>
      <div className="border-l-2 border-gray-500 h-6"></div>
      <div className="w-[30%] h-full flex items-center justify-center gap-6 ">
        <img className="w-[22px]" src={user_icon} />
        Adults
      </div>
      <div className="border-l-2 border-gray-500 h-6"></div>
      <div className="w-[10.5%] h-full gap-2 flex items-center justify-center bg-[#0A82DC] rounded-r-full mr-[-16px]">
        <img className="w-[20px]" src={search_icon} />
        <button onClick={search}>Search</button>
      </div>
    </div>
  );
};

export default SearchFilter;
