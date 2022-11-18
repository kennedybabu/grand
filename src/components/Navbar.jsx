import React, { useState } from 'react'
import {GiShintoShrine} from 'react-icons/gi'
import {RiMenu3Fill} from 'react-icons/ri'
import {MdClose} from 'react-icons/md'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [nav,setNav] = useState(false)

    const toggleNav = () => {
        setNav(false)
    }


  return (
    <div className='w-full h-[100px] absolute left-0 top-0 px-4 flex items-center justify-between z-50 text-white'>
        <div className='h-full flex flex-col items-center justify-center'>
            <GiShintoShrine className='text-[#df9a57]'/>
            <h2 className='brand-name'>Grand</h2>
            <small className='text-[8px] uppercase'>Hotel and Restaurant</small>
        </div>
        <div>
            <ol className='hidden'>
                <Link to='/'>Home</Link>
                <Link to='accomodation'>Accomodation</Link>
                <li>Gallery</li>
                <li>News</li>
                <li>Shop</li>exact
                <li>Contact</li>
            </ol>
        </div>
        <div className='md:hidden z-40' onClick={(e) => setNav(!nav)}>            
            {nav ? <MdClose className='text-[#202020] fixed right-4 top-12'/> : <RiMenu3Fill />}
        </div>
        {nav ? (
            <div id='mobile-nav' className='fixed right-0 w-[70%] text-[#202020] top-0 bottom-0 bg-[#ffffff] min-h-screen flex items-center justify-center flex-col'>
                <li className='flex flex-col justify-center'>
                    <Link to='/' onClick={toggleNav}>Home</Link>
                    <Link to='accomodation' onClick={toggleNav}>Accomodation</Link>
                    <Link onClick={toggleNav}>Gallery</Link>
                    <Link onClick={toggleNav}>News</Link>
                    <Link onClick={toggleNav}>Shop</Link>
                    <Link onClick={toggleNav}>Contact</Link>
                </li>
            </div>
        ): ( null )}

    </div>
  )
}

export default Navbar