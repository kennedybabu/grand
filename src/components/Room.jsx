import React, {useState} from 'react'
import {BsPeopleFill} from 'react-icons/bs'
import {FaCalendarAlt} from 'react-icons/fa'


const Room = ({room}) => {

    const [isBooked, setIsBooked] = useState(room.booked)  
    const [startDate, setStartDate] = useState(new Date())

    const bookRoom = (e) => {
        e.preventDefault()
        setIsBooked(!isBooked)
    }
   
    const style = {
        order: 1
    }


    console.log(startDate)

  return (

    <div className='md:flex '>       
        <div className='w-full my-8 px-2 md:flex md:flex-2 md:flex-col' style={room.order ? null : style}>
            <div className="room w-full flex flex-col h-[200px]  md:h-[400px]">
                <img className='w-full h-full' src={room.roomImg_url} alt="/" />
            </div>
            <div className={room.order ? 'w-full my-4 md:flex' : 'w-full my-4 md:flex md:justify-end' }>
                <button onClick={(e) => bookRoom(e)} className='bg-[#dd9c5c] text-white w-[100px] flex justify-center items-center px-2 py-1'>
                    {isBooked ? 'Book Now' : 'Booked'}
                </button>
            </div>
        </div> 
        <div className="room-info px-4 md:flex md:flex-1 md:flex-col md:justify-end">
            <h1 className='font-[600] text-3xl lg:text-4xl lg:font-[800]'>{room.room_no}</h1>
            <div className='h-[25px] my-2 border-l-2 border-black'>

            </div>
            <h2 className='font-[800] text-2xl lg:text-3xl lg:my-1 text-[#dd9c5c]'>{room.room_name}</h2>
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
                <div className='md:ml-1 cursor-pointer w-[105px] bg-black text-white  flex items-center justify-center py-1'>
                    <FaCalendarAlt className='text-[#df9a57]'/>
                    <span className='text-[#df9a57]'>|</span>
                    <p>date</p>
                    {/* <input onChange={(e) => setStartDate(e.target.value)} className='w-full cursor-pointer bg-white text-black' type='date' id='start' name='vacation-start' value='2022-11-20' min="2022-11-20" max="2050-01-01" /> */}
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Room