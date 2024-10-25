import React from "react";
import hero_image from "../assets/hero-image.jpg";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

import SearchFilter from "../components/SearchFilter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="items-center h-min xl:m-auto">
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
      <div className="w-[80%] xl:w-3/5 m-auto bg-white h-min  my-10">
        <div className="flex items-center justify-between h-10 mt-24">
          <h2 className="text-2xl font-bold">
            Rooms we recommend for our customers
          </h2>
          <button className="border border-black rounded-[30px] w-[140px] h-[40px]">
            View All Rooms
          </button>
        </div>
        <div className="flex items-center justify-between mt-14">
          <div className="w-[31.3%] h-[200px] bg-[#BFBFBF] rounded-[10px]"></div>
          <div className="w-[31.3%] h-[200px] bg-[#BFBFBF] rounded-[10px]"></div>
          <div className="w-[31.3%] h-[200px] bg-[#BFBFBF] rounded-[10px]"></div>
          {/* <div className="w-[220px] h-[200px] bg-red-500"></div> */}
        </div>
      </div>
      <div></div>
      {/* footer section */}
      {/* <div className="h-fit bg-black items-center text-white">
        <div className="w-4/5 xl:w-3/5 flex justify-center items-center m-auto h-[200px]">
          <div className="w-full flex justify-between">
            <div className="text-gray-500 flex flex-col justify-center gap-2">
              <h3>Hotel</h3>
              <ul>
                <li>Kings Road</li>
                <li>5th Ave,Johannesburg</li>
                <li>4000</li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-2">
                <li>Facilities</li>
                <li>About</li>
                <li>Rooms</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-2">
                <li>Instagram</li>
                <li>Twitter</li>
                <li>TikTok</li>
              </ul>
            </div>
            <div className="flex flex-col justify-center gap-6">
              <h3 className="text-xl">News letter</h3>
              <form className="w-[265px] border">
                <input className="w-full" type="text" placeholder="email" />
              </form>
            </div>
          </div>
        </div>
        <hr className="w-4/5 xl:w-3/5 bg-gray-500 m-auto h-[1px] mb-6" />
        <div className="w-4/5 xl:w-3/5 flex justify-between m-auto">
          <div className="w-full flex justify-between mb-4">
            <div>
              <p className="text-gray-500">@2024 Hotel. All rights reserved</p>
            </div>
            <div className="flex gap-10 text-gray-500 ">
              <Link to={"/terms"}>Terms & Conditions</Link>
              <Link to={"/policy"}>Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div> */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
