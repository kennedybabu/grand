import React, {useState} from 'react'
import {BsPeopleFill} from 'react-icons/bs'
import {FaCalendarAlt} from 'react-icons/fa'

const Room = ({room}) => {

    const [isBooked, setIsBooked] = useState(room.booked)

    console.log(room.room_name, room.booked)

    const bookRoom = (e) => {
        e.preventDefault()
        setIsBooked(!isBooked)
    }


  return (
    <>       
        <div className='w-full my-8 px-2'>
            <div className="room w-full flex flex-col h-[200px]">
                <img className='w-full h-[200px]' src={room.roomImg_url} alt="/" />
            </div>
            <div className='w-full my-4'>
                <button onClick={(e) => bookRoom(e)} className='bg-[#dd9c5c] text-white w-[100px] flex justify-center items-center px-2 py-1'>
                    {isBooked ? 'Book Now' : 'Booked'}
                </button>
            </div>
        </div> 
        <div className="room-info px-4">
            <h1 className='font-[600] text-3xl'>{room.room_no}</h1>
            <div className='h-[25px] my-2 border-l-2 border-black'>

            </div>
            <h2 className='font-[800] text-2xl text-[#dd9c5c]'>{room.room_name}</h2>
            <p className='font-[400] text-[13px] room-more-info'>
                {room.description}
            </p>
            <h3 className='text-xl'><span className='font-bold'>${room.rate}</span> / night</h3>
            <div className='w-full flex justify-between my-2 room-more-info'>
                <div className='w-[150px] bg-black text-white  flex items-center justify-center py-1'>
                    <BsPeopleFill className='text-[#df9a57]'/>
                    <span className='text-[#df9a57]'>|</span>
                    <p>2 people</p>
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