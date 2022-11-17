import React from 'react'

const Landingpage = () => {
  return (
    <div className='w-full h-screen landing relative z-10'>
        <div className="overlay z-20 min-h-screen min-w-full flex items-center text-white justify-center flex-col">
            <small className=''>welcome to</small>
            <h1 className='text-3xl font-[600]'>Grand <span className='text-[#df9a57]'>Hotel</span></h1>
            <p className='tracking-wide text-[15px]'>A place to experience and enjoy the life</p>
        </div>
    </div>
  )
}

export default Landingpage