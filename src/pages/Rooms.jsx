import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Card from '../components/Card'

const Rooms = () => {
  return (
    <div className='flex flex-col items-center'>
       {/* Navbar */}
       <div className='w-full bg-blue-500 h-[90px]'>
        <NavBar />
      </div>
      <div className='w-4/5 xl:w-3/5 flex justify-between my-10'>
        <div className='w-[20%] border rounded-t-lg'>
            <p className='font-medium mt-2 ml-2 text-[18px]'>Filter by:</p>
            <div className='border-b-[1px] h-[6px] '></div>
            <div className='flex flex-col '>
            <p className='ml-2 mt-2 text-[16px]'>Facilities</p>
            </div>
            <div className='border-b-[1px] h-[6px] '></div>
        </div>
        <div className='w-[90%] flex flex-col items-end xl:items-center'>
          <Card page={"rooms"} />
        </div>
      </div>
      {/* Footer */}
      <div className='absolute bottom-0 left-0 right-0'>
        <Footer />
      </div>
    </div>
  )
}

export default Rooms