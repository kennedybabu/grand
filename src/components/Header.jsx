import React from 'react'

const Header = (props) => {
  return (  
    <div className='h-[35vh] md:h-[40vh] bg-[black] w-full accomodate-header'>
        <div className="header-cover top-0 relative px-2 md:px-8 lg:px-[14rem]">
            <h2 className='absolute bottom-2 z-[60] text-2xl text-[white]'>{props.text}</h2>
        </div>            
    </div>
  )
}

export default Header