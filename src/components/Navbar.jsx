import React from 'react'
import {GiShintoShrine} from 'react-icons/gi'
import {RiMenu3Fill} from 'react-icons/ri'

const Navbar = () => {
  return (
    <div className='w-full h-[100px] absolute left-0 top-0 px-4 flex items-center justify-between z-50 text-white'>
        <div className='h-full flex flex-col items-center justify-center'>
            <GiShintoShrine className='text-[#df9a57]'/>
            <h2 className='brand-name'>Grand</h2>
            <small className='text-[8px] uppercase'>Hotel and Restaurant</small>
        </div>
        <div>
            <ol className='hidden'>
                <li>Home</li>
                <li>Prices</li>
                <li>Gallery</li>
                <li>Contact</li>
            </ol>
        </div>
        <div>
            <RiMenu3Fill />
        </div>
    </div>
  )
}

export default Navbar