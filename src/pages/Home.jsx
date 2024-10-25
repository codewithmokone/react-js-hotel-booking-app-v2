import React from "react";
import hero_image from "../assets/hero-image.jpg";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

import SearchFilter from "../components/SearchFilter";
import Footer from "../components/Footer";
import Card from "../components/Card";

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
        </div>
      </div>
      {/* rooms */}
      <div className="w-4/5 xl:w-3/5 m-auto">
        <h2 className="text-2xl font-bold">Our rooms</h2>
        <div className="flex justify-center mt-8">
          <Card page={"home"}/>
        </div>
      </div>
      {/* map and contact */}
      <div className="w-3/5 flex items-center justify-between gap-4 m-auto my-10">
        <div className="w-[500px] h-[250px] bg-gray-500 rounded-[10px]"></div>
        <div className="flex flex-col items-start justify-start border ">
          <h3 className="font-medium">Contact Us</h3>
          <div>
            <p>Phone: 012-345-6789</p>
          </div>
          <div>
            <p>Email: email@email.com</p>
          </div>
        </div>
      </div>
      <div></div>
      {/* footer section */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
