import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="h-fit bg-black items-center  text-white">
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
    </div>
  );
};

export default Footer;
