import React from 'react'
import {BsPeopleFill} from 'react-icons/bs'
import {FaCalendarAlt} from 'react-icons/fa'

const Accomodation = () => {
  return (
    <div className='w-full h-full flex items-center flex-col'>
        <div className='h-[40vh] bg-[black] w-full accomodate-header'>
            <div className="header-cover relative px-4">
                <h2 className='absolute bottom-2 z-[60] text-2xl text-[white]'>Accomodation 01</h2>
            </div>            
        </div>
        <div className='w-full mt-4 px-2'>
            <div className="room w-full flex flex-col h-[200px] bg-teal-300">
                <img className='w-full h-[200px]' src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="/" />
            </div>
            <div className='w-full my-4'>
                <div className='bg-[#dd9c5c] w-[100px] flex justify-center items-center px-2 py-1'>
                    <p>Book Now</p>
                </div>
            </div>
        </div> 
        <div className="room-info px-4">
            <h1 className='font-[600] text-3xl'>01</h1>
            <div className='h-[25px] my-2 border-l-2 border-black'>

            </div>
            <h2 className='font-[800] text-2xl text-[#dd9c5c]'>Suoerior villa</h2>
            <p className='font-[400] text-[13px] room-more-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aut tempore nemo, qui delectus cumque repellendus fugit culpa 
                sunt magni impedit accusantium necessitatibus voluptatibus distinctio
                    earum id illum at reprehenderit quasi iste? Quae ducimus expedita magnam
                ipsam reprehenderit, facilis sunt aspernatur.
            </p>
            <h3 className='text-xl'><span className='font-bold'>$200</span> / night</h3>
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
        
    </div>
  )
}

export default Accomodation