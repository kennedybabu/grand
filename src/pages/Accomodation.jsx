import React, { useEffect, useState } from 'react'
import data from '../data/data.json'
import Room from '../components/Room'


const Accomodation = () => {
    const [rooms, setRooms] = useState([])

    useEffect(() => {
      setRooms(data)      

    }, [])

  return (
    <div className='w-full h-full flex items-center flex-col pb-8'>
        <div className='h-[35vh] md:h-[40vh] bg-[black] w-full accomodate-header'>
            <div className="header-cover relative px-2 md:px-8">
                <h2 className='absolute bottom-2 z-[60] text-2xl text-[white]'>Accomodation</h2>
            </div>            
        </div>
        <div className='w-full h-full md:w-[90%] lg:w-[60%] md:mt-8'>
            {rooms.map((room) => {
                return <Room room={room} key={room.id}/>
            })}
        </div>
    </div>
  )
}

export default Accomodation