import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Profile = () => {
  const location = useLocation();
  const userData = location.state;

  console.log(userData.adminId);

  return (
    <div className="h-full">
      {/* Navbar */}
      <div className="h-[100px]">
        <NavBar />
      </div>
      {/* User Details */}
      <div className="w-4/5 m-auto flex flex-col h-[100vh] gap-4 mt-8">
        <div>
          <h1>My Profile</h1>
        </div>
        <div className="flex items-center justify-between border w-full border-[#92AAC3] h-[100px] rounded-[10px]">
          <div className="flex items-center gap-8 ml-4">
            <img className="w-[60px] h-[60px] rounded-full bg-gray-500" src="" alt="" />
            <h2>Simon Lephoto</h2>
          </div>
          <div className="mr-4">
            <button className="border rounded-[20px] py-1.2 px-4">Edit</button>
          </div>
        </div>
        <div className="border border-[#92AAC3] w-full h-[150px] rounded-[10px]"></div>
        <div className="border border-[#92AAC3] w-full h-[150px] rounded-[10px]"></div>
        <div className="border border-[#92AAC3] w-full h-[150px] rounded-[10px]"></div>
      </div>
      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
