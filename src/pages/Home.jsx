import React from 'react';
import hero_image from '../assets/hero-image.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='bg-red-500 m-auto'>
        {/* logo and nav links */}
        <div className='w-4/5 flex items-center justify-between absolute top-0 right-0 mt-4 shadow-lg left-0 m-auto bg-white h-14 rounded-[25px]'>
            <span className='font-bold text-medium-2xl ml-10'>Hotel</span>
            <nav className='mr-10'>
                <ul className='flex gap-10 items-center font-medium text-gray-500  '>
                    <li className='font-medium'><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/gallery"}>Gallery</Link></li>
                    <li><Link to={"/Rooms"}>Rooms</Link></li>
                    <li><Link to={"/Contact"}>Contact</Link></li>
                    <li className='bg-blue-500 w-20 h-8 flex items-center justify-center rounded-[25px] text-white'><Link to={"/Login"}>Login</Link></li>
                </ul>
            </nav>
        </div>
        {/* hero section */}
        <div className='w-full'>
            <img className='hero-image' src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default Home