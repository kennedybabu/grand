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
         <div className='h-[40vh] bg-[black] w-full accomodate-header'>
            <div className="header-cover relative px-4">
                <h2 className='absolute bottom-2 z-[60] text-2xl text-[white]'>Accomodation 01</h2>
            </div>            
        </div>
        <div className='w-full h-full'>
            {rooms.map((room) => {
                return <Room room={room} key={room.id}/>
            })}
        </div>
    </div>
  )
}

export default Accomodation