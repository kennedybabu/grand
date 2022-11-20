import React, { useEffect, useState } from 'react'
import data from '../data/data.json'
import Room from '../components/Room'
import Header from '../components/Header'


const Accomodation = () => {
    const [rooms, setRooms] = useState([])

    useEffect(() => {
      setRooms(data)      

    }, [])

  return (
    <div className='w-full h-full flex items-center flex-col pb-8'>
        <Header text={'Accomodation'} /> 
        <div className='w-full h-full md:w-[90%] lg:w-[60%] md:mt-8'>
            {rooms.map((room) => {
                return <Room room={room} key={room.id}/>
            })}
        </div>
    </div>
  )
}

export default Accomodation