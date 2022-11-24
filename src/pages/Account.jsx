import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'


const Account = () => {
  const {id} = useParams()
  return (
    <div className='w-full h-screen'>
        <Header text={'Account'} />
        <div className='w-full  flex flex-col items-center justify-center'>
            <p>trials and errors</p>
            {id ? <p>{id}</p> : null}
        </div>
    </div>
  )
}

export default Account