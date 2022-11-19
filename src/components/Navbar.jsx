import React, { useState } from 'react'
import {GiShintoShrine} from 'react-icons/gi'
import {RiMenu3Fill} from 'react-icons/ri'
import {MdClose} from 'react-icons/md'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [nav,setNav] = useState(false)

    const toggleNav = () => {
        setNav(false)
    }


    let activeStyle = {
        textDecoration :"underline",
        color:'#df9a57'
    }

    let activeClassName = "underline"


  return (
    <div className='w-full h-[100px] absolute left-0 top-0 px-4 flex items-center justify-between z-50 text-white md:px-8'>
        <div className='h-full flex flex-col items-center justify-center md:text-xl'>
            <GiShintoShrine className='text-[#df9a57]'/>
            <h2 className='brand-name'>Grand</h2>
            <small className='text-[8px] uppercase'>Hotel and Restaurant</small>
        </div>
        <div>
            <div className='hidden md:flex md:text-[13px]'>
                <NavLink style={({isActive}) => isActive ? activeStyle : undefined} className='mx-1 hover:border-t-2 transition' to='/'>Home</NavLink>
                <NavLink style={({isActive}) => isActive ? activeStyle : undefined} className='mx-1 hover:border-t-2 transition' to='accomodation'>Accomodation</NavLink>
                <NavLink className='mx-1 hover:border-t-2 transition' >Gallery</NavLink>
                <NavLink className='mx-1 hover:border-t-2 transition' >News</NavLink>
                <NavLink className='mx-1 hover:border-t-2 transition' >Shop</NavLink>
                <NavLink className='mx-1 hover:border-t-2 transition' >Contact</NavLink>
            </div>
        </div>
        <div className='md:hidden z-40' onClick={(e) => setNav(!nav)}>            
            {nav ? <MdClose className='text-[#202020] fixed right-4 top-12'/> : <RiMenu3Fill />}
        </div>
        {nav ? (
            <div id='mobile-nav' className='fixed right-0 w-[70%] text-[#202020] top-0 bottom-0 bg-[#ffffff] min-h-screen flex items-center justify-center flex-col'>
                <li className='flex flex-col justify-center'>
                    <NavLink to='/' onClick={toggleNav}>Home</NavLink>
                    <NavLink to='accomodation' onClick={toggleNav}>Accomodation</NavLink>
                    <NavLink onClick={toggleNav}>Gallery</NavLink>
                    <NavLink onClick={toggleNav}>News</NavLink>
                    <NavLink onClick={toggleNav}>Shop</NavLink>
                    <NavLink onClick={toggleNav}>Contact</NavLink>
                </li>
            </div>
        ): ( null )}

    </div>
  )
}

export default Navbar