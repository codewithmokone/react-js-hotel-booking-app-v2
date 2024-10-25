import React from 'react'
import room_1 from '../assets/pexels-pixabay-262048.jpg'

const Card = ({page}) => {

    if(page === 'home'){
        return (
                <div className="w-[815px] h-[215px] flex justify-between rounded-lg  border rounded-[10px]">
                    <div className=" w-[30%] flex items-center justify-center">
                        <img className="w-[220px] h-[190px] rounded-[8px]" src={room_1} alt="" />
                    </div>
                    <div className=" w-[55%]">
                        <h4 className="text-[20px] text-blue-500 font-bold ml-4 mt-2">Luxury Room</h4>
                        <p className="text-[12px] ml-4 mt-2">Lorem ipsum dolor sit amet,</p>
                        <p className="text-[12px] ml-4 mt-2 w-[400px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias delectus neque porro velit. Veniam eius cum, fugiat blanditiis officia facere debitis error, maiores illum sequi ea, minima eos mollitia</p>
                    </div>
                    <div className=" w-[15%] flex flex-col justify-start items-center">
                        <button className="bg-blue-500 font-medium text-white w-[100px] mt-4 h-[30px] rounded-[4px]">Show room</button>
                    </div>
                </div>
          )
    }else if(page === 'rooms'){
        return (
                <div className="w-[815px] h-[215px] flex justify-between rounded-[10px]  border rounded-[10px]">
                    <div className=" w-[30%] flex items-center justify-center">
                        <img className="w-[220px] h-[190px] rounded-[8px]" src={room_1} alt="" />
                    </div>
                    <div className=" w-[55%]">
                        <h4 className="text-[20px] text-blue-500 font-bold ml-4 mt-2">Luxury Room</h4>
                        <p className="text-[12px] ml-4 mt-2">Lorem ipsum dolor sit amet,</p>
                        <p className="text-[12px] ml-4 mt-2 w-[400px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias delectus neque porro velit. Veniam eius cum, fugiat blanditiis officia facere debitis error, maiores illum sequi ea, minima eos mollitia</p>
                    </div>
                    <div className=" w-[15%] flex flex-col gap-4 justify-start items-center">
                        <button className="bg-blue-500 font-medium text-white w-[100px] mt-4 h-[30px] rounded-[4px]">Show room</button>
                        <p className='font-medium'>ZAR 1,150</p>
                    </div>
                </div>
          )
    }
  
}

export default Card