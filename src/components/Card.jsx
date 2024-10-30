import React from 'react'
import room_1 from '../assets/pexels-pixabay-262048.jpg'
import { rooms } from '../assets/content'
import { Link } from 'react-router-dom';


const Card = ({room,page,index}) => {
    
    console.log("Rooms: ",rooms);
    

    if(page === 'home'){
        return (
            // <></>
                <div key={index} className="w-[815px] h-[215px] flex justify-between rounded-lg  border rounded-[10px]">
                    <div className=" w-[30%] flex items-center justify-center">
                        <img className="w-[220px] h-[190px] rounded-[8px]" src={room_1} alt="card image" />
                    </div>
                    <div className=" w-[55%]">
                        <h4 className="text-[20px] text-blue-500 font-bold ml-4 mt-2">{room.room_title}</h4>
                        <p className="text-[12px] ml-4 mt-2">Lorem ipsum dolor sit amet,</p>
                        <p className="text-[12px] ml-4 mt-2 w-[400px]">{room.room_details}</p>
                    </div>
                    <div className=" w-[15%] flex flex-col justify-start items-center">
                        <button className="bg-blue-500 font-medium text-white w-[100px] mt-4 h-[30px] rounded-[4px]">Show room</button>
                    </div>
                </div>
          )
    }else if(page === 'rooms'){
        return (
                <div  key={index} className="w-[95%] h-[215px] flex justify-between rounded-[10px]  border rounded-[10px]">
                    <div className=" w-[30%] flex items-center justify-center">
                        <img className="w-[90%] h-[90%] rounded-[8px]" src={room.room_image} alt="" />
                    </div>
                    <div className=" w-[55%]">
                        <h4 className="text-[20px] text-blue-500 font-bold ml-4 mt-2">{room.room_title}</h4>
                        <p className="text-[12px] ml-4 mt-2">Lorem ipsum dolor sit amet,</p>
                        <p className="text-[12px] ml-4 mt-2 w-[400px]">{room.room_detail}</p>
                    </div>
                    <div className=" w-[15%] flex flex-col gap-4 justify-start items-center">
                        <Link to="/viewroom" className="bg-blue-500 font-medium text-white flex items-center justify-center w-[100px] mt-4 h-[30px] rounded-[4px]"><p>Show room</p></Link>
                        <p className='font-medium'>ZAR {room.room_price}</p>
                    </div>
                </div>
          )
    }
  
}

export default Card