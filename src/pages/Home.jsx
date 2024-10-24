import React from "react";
import hero_image from "../assets/hero-image.jpg";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

import SearchFilter from "../components/SearchFilter";

const Home = () => {
  return (
    <div className="items-center h-min">
      {/* navbar */}
      <div>
        <NavBar />
      </div>
      {/* hero section */}
      <div className="w-full h-[95vh]">
        <img className="hero-image" src={hero_image} alt="hero-image" />
      </div>
      {/* Search filter */}
      <div>
        <SearchFilter />
      </div>
      {/*  */}
      <div className="w-[80%] m-auto bg-white h-min  my-10">
        <div className="flex items-center justify-between h-10 mt-24">
          <h2 className="text-2xl font-bold">
            Rooms we recommend for our customers
          </h2>
          <button className="border border-black rounded-[30px] w-[140px] h-[40px]">
            View All Rooms
          </button>
        </div>
        <div className="flex items-center justify-between mt-14">
            <div className="w-[220px] h-[200px] bg-red-500"></div>
            <div className="w-[220px] h-[200px] bg-red-500"></div>
            <div className="w-[220px] h-[200px] bg-red-500"></div>
            <div className="w-[220px] h-[200px] bg-red-500"></div>
        </div>
      </div>
      <div>

      </div>
      {/* footer section */}
      <div className="h-[300px] bg-black items-center text-gray-500">
        <div></div>
        <hr className="w-4/5 bg-gray-500 m-auto h-[2px]" />
        <div className="w-4/5 m-auto">
            <div>
                <p className="text-gray-500">@2024 Hotel. All rights reserved</p>
            </div>
            <div className="flex gap-4">
                <a href="">Terms & Conditions</a>
                <a href="">Privacy Policy</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
