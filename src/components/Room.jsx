import React from 'react'
import {BsPeopleFill} from 'react-icons/bs'
import {FaCalendarAlt} from 'react-icons/fa'

const Room = ({room}) => {


  return (
    <>       
        <div className='w-full mt-4 px-2'>
            <div className="room w-full flex flex-col h-[200px]">
                <img className='w-full h-[200px]' src={room.roomImg_url} alt="/" />
            </div>
            <div className='w-full my-4'>
                <div className='bg-[#dd9c5c] text-white w-[100px] flex justify-center items-center px-2 py-1'>
                    <p>Book Now</p>
                </div>
            </div>
        </div> 
        <div className="room-info px-4">
            <h1 className='font-[600] text-3xl'>{room.room_no}</h1>
            <div className='h-[25px] my-2 border-l-2 border-black'>

            </div>
            <h2 className='font-[800] text-2xl text-[#dd9c5c]'>{room.room_name}</h2>
            <p className='font-[400] text-[13px] room-more-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aut tempore nemo, qui delectus cumque repellendus fugit culpa 
                sunt magni impedit accusantium necessitatibus voluptatibus distinctio
                    earum id illum at reprehenderit quasi iste? Quae ducimus expedita magnam
                ipsam reprehenderit, facilis sunt aspernatur.
            </p>
            <h3 className='text-xl'><span className='font-bold'>${room.rate}</span> / night</h3>
            <div className='w-full flex justify-between my-2 room-more-info'>
                <div className='w-[150px] bg-black text-white  flex items-center justify-center py-1'>
                    <BsPeopleFill className='text-[#df9a57]'/>
                    <span className='text-[#df9a57]'>|</span>
                    <p>2people</p>
                </div>
                <div className='w-[105px] bg-black text-white  flex items-center justify-center py-1'>
                    <FaCalendarAlt className='text-[#df9a57]'/>
                    <span className='text-[#df9a57]'>|</span>
                    <p>Date</p>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Room