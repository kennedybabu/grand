import React from 'react'

const Accomodation = () => {
  return (
    <div className='w-full h-screen flex items-center flex-col'>
        <div className='h-[30vh] bg-[black] w-full accomodate-header'>
            <div className="header-cover relative px-4">
                <h2 className='absolute bottom-2 z-[60] text-2xl text-[white]'>Accomodation 01</h2>
            </div>
            <div className='w-full h-screen mt-4 px-2'>
                <div className="room w-full flex flex-col h-[200px] bg-teal-300">
                    <img className='w-full h-full' src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="/" />
                </div>
                <div className="room-info px-4">
                    <h1 className='font-[600] text-3xl'>01</h1>
                    <div className='h-[25px] my-2 border-l-2 border-black'>

                    </div>
                    <h2 className='font-[800] text-2xl '>Suoerior villa</h2>
                    <p className='font-[400] text-[13px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aut tempore nemo, qui delectus cumque repellendus fugit culpa 
                        sunt magni impedit accusantium necessitatibus voluptatibus distinctio
                         earum id illum at reprehenderit quasi iste? Quae ducimus expedita magnam
                        ipsam reprehenderit, facilis sunt aspernatur.
                    </p>
                    <h3 className='text-xl'><span className='font-bold'>$200</span> / night</h3>
                    <div className='w-full flex justify-between my-2'>
                        <div className='w-[100px] bg-black text-white flex items-center justify-center py-1'>
                            <p>2 people</p>
                        </div>
                        <div className='w-[100px] bg-black text-white flex items-center justify-center py-1'>
                            <p>Date</p>
                        </div>
                    </div>

                </div>
            </div>            
        </div>
    </div>
  )
}

export default Accomodation