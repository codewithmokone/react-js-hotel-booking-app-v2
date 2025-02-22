import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div className="w-4/5 xl:w-3/5 flex items-center justify-between absolute top-0 right-0 mt-4 shadow-lg left-0 m-auto bg-white h-14 rounded-[30px]">
      <span className="font-bold text-[20px] ml-8">Ocean Hotel</span>
      <nav className="mr-6">
        <ul className="flex gap-10 items-center font-medium text-gray-500  ">
          <li className="font-medium">
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/gallery"}>Gallery</Link>
          </li>
          <li>
            <Link to={"/Rooms"}>Rooms</Link>
          </li>
          <li>
            <Link to={"/Contact"}>Contact</Link>
          </li>
          <li className="bg-blue-500 w-20 h-8 flex items-center justify-center rounded-[25px] text-white">
            <Link to={"/Login"}>Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
