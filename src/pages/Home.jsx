import React from "react";
import hero_image from "../assets/hero-image.jpg";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import SearchFilter from "../components/SearchFilter";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { rooms } from "../assets/content";
import unique_room1 from "../assets/unique_room1.jpg";
import unique_room2 from "../assets/unique_room2.jpg";
import unique_room3 from "../assets/unique_room3.jpg";
import unique_room4 from "../assets/unique_room4.jpg";
import recommended_room1 from "../assets/recommended_rooms1.jpg";
import recommended_room2 from "../assets/recommended_rooms2.jpg";

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
          <Link
            to="/rooms"
            className="flex items-center justify-center border border-black rounded-[30px] w-[130px] h-[38px]"
          >
            <p>View All Rooms</p>
          </Link>
        </div>
        <div className="flex items-center justify-between mt-8">
          <div className="w-[31.3%] h-[200px] bg-[#BFBFBF] rounded-[10px]">
            <Link>
              <img
                className="w-[100%] h-[100%] rounded-[10px]"
                src={recommended_room2}
                alt="unique room image"
              />
            </Link>
          </div>
          <div className="w-[31.3%] h-[200px] bg-[#BFBFBF] rounded-[10px]">
            <Link>
              <img
                className="w-[100%] h-[100%] rounded-[10px]"
                src={recommended_room1}
                alt="unique room image"
              />
            </Link>
          </div>
          <div className="w-[31.3%] h-[200px] bg-[#BFBFBF] rounded-[10px]">
            <Link>
              <img
                className="w-[100%] h-[100%] rounded-[10px]"
                src={unique_room4}
                alt="unique room image"
              />
            </Link>
          </div>
        </div>
      </div>
      {/* Unique rooms */}
      <div className="w-[80%] xl:w-3/5 m-auto bg-white h-min  my-10">
        <div className="flex items-center justify-between h-10 mt-24">
          <h2 className="text-2xl font-bold">Stay at our unique rooms</h2>
          {/* <Link to="/rooms" className="flex items-center justify-center border border-black rounded-[30px] w-[130px] h-[38px]">
           <p className="text-sm">View All Rooms</p> 
          </Link> */}
        </div>
        <div className="flex items-center justify-between mt-8">
          <div className="w-[31.3%] h-[200px] bg-[#BFBFBF] rounded-[10px]">
            <Link>
              <img
                className="w-[100%] h-[100%]"
                src={unique_room1}
                alt="unique room image"
              />
            </Link>
          </div>
          <div className="w-[31.3%] h-[200px] bg-[#BFBFBF] rounded-[10px]">
            <Link>
              <img
                className="w-[100%] h-[100%]"
                src={unique_room2}
                alt="unique room image"
              />
            </Link>
          </div>
          <div className="w-[31.3%] h-[200px] bg-[#BFBFBF] rounded-[10px]">
            <Link>
              <img
                className="w-[100%] h-[100%]"
                src={unique_room3}
                alt="unique room image"
              />
            </Link>
          </div>
        </div>
      </div>
      {/* rooms */}
      <div className="w-4/5 xl:w-3/5 m-auto">
        <h2 className="text-2xl font-bold">Our rooms</h2>
        <div className="flex flex-col items-center justify-center gap-4 mt-8">
          {rooms.map((room, index) => (
            <Card room={room} index={index} page={"home"} />
          ))}
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
