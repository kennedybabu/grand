import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import data from '../data/data.json'



const Account = () => {
  const {id} = useParams()


  return (
    <div className='w-full h-screen'>
        <Header text={'Account'} />
        <div className='w-full  flex flex-col items-center justify-center'>
            <p>trials and errors</p>
        </div>
    </div>
  )
}

export default Account