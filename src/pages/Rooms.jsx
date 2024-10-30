import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import room_1 from "../assets/pexels-pixabay-262048.jpg";
import hero_image from "../assets/hero-image.jpg";


// Sample data
const rooms = [
  {
    room_title: "Couples Deluxe",
    room_detail: "Romantic night out",
    room_price: 2000,
    room_image: room_1,
    room_bed: "Double bed",
    room_wifi: "Free Wifi",
  },
  {
    room_title: "Family Deluxe",
    room_detail: "Suited for family of three",
    room_price: 3000,
    room_image: room_1,
    room_bed: "Twin bed",
    room_wifi: "Free Wifi",
  },
  {
    room_title: "Couples Deluxe",
    room_detail: "Romantic night out",
    room_price: 2000,
    room_image: room_1,
    room_bed: "Twin bed",
    room_wifi: "Free Wifi",
  },
];

const Rooms = () => {
  const [roomsData,setRoomsData] = useState(rooms);
  const [twinBeds,setTwinBeds] = useState('');
  const [doubleBeds, setDoubleBeds] = useState('');
  const [checked,setChecked] = useState([]);

  console.log("Bed Type: ", checked);
  

  const filterBeds = (checked) => {

    let twinBedRooms = rooms.filter(room => room.room_bed.includes("Twin bed")); // Filters the twin beds
    let doubleBedRooms = rooms.filter(room => room.room_bed.includes("Double bed")); // Filters the double beds

    setTwinBeds(twinBedRooms.length);
    setDoubleBeds(doubleBedRooms.length);

    if(checked === "Twin bed" || checked === "Double bed"){
      let filteredBeds = rooms.filter(room => room.room_bed.includes(checked));
      console.log("Filters:",filteredBeds);
      setRoomsData(filteredBeds);
    }else if(checked === "Twin bed" && checked === "Double bed"){
      let filteredBeds = rooms.filter(room => room.room_bed.includes(checked, checked));
      console.log("Filters:",filteredBeds);
      setRoomsData(filteredBeds);
    }
  }
  

  useEffect(()=>{
    filterBeds(checked);
  },[checked]);

  return (
    <div className="flex flex-col items-center h-max">
      {/* Navbar */}
      <div>
        <NavBar />
      </div>
      {/* hero section */}
      <div className="w-full h-[95vh]">
        <img className="hero-image" src={hero_image} alt="hero-image" />
      </div>
      <div className="w-4/5 xl:w-3/5 flex justify-between my-10 ">
        {/*  Filter section */}
        <div className="w-[25%] border rounded-t-lg h-min">
          <p className="font-medium mt-2 ml-2 text-[18px]">Filter by:</p>
          <div className="border-b-[1px] h-[6px] "></div>
          {/* facilities */}
          <div className="flex flex-col ">
            <p className="ml-2 mt-2 text-[16px] font-medium">Room facilities</p>
            <div className="flex flex-col ml-2 gap-2 m-2 text-sm">
              <div className="flex gap-2">
                <input type="checkbox" />
                <label htmlFor="">Coffee/Tea maker</label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" />
                <label htmlFor="">Pets Allowed</label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" />
                <label htmlFor="">Flat-sceen TV</label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" />
                <label htmlFor="">Free WiFi</label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" />
                <label htmlFor="">Wheelchair accessible</label>
              </div>
            </div>
          </div>
          <div className="border-b-[1px] h-[6px] "></div>
          {/* Bed preference  */}
          <div className="flex flex-col ">
            <p className="ml-2 mt-2 text-[16px] font-medium">Bed preference</p>
            <div className="flex flex-col ml-2 gap-2 m-2 text-sm">
              <div className="flex flex-col">
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <input type="checkbox" id="twinBed" value="Twin bed" onClick={(e)=>setChecked(e.target.value)}/>
                      <label htmlFor="">Twin bed</label>
                    </div>
                    <div>
                      <p className="mr-4">{twinBeds}</p>
                    </div>
                  </div>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <input type="checkbox" id="doubleBed" value="Double bed" onClick={(e)=>setChecked(e.target.value)} />
                  <label htmlFor="">Double bed</label>
                </div>
                <div>
                  <p className="mr-4">{doubleBeds}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b-[1px] h-[6px] "></div>
        </div>
        <div className="w-[90%] flex flex-col gap-4 items-end xl:items-center">
          {roomsData
            ? roomsData.map((room, index) => (
                <>
                  <Card index={index} room={room} page={"rooms"} />
                  {/* {console.log(room.room_title,index)} */}
                </>
              ))
            : "No rooms available"}
        </div>
      </div>
      {/* Footer */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Rooms;
