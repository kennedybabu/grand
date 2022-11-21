import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const Login = () => {
  return (
    <div className='w-full h-screen'>
    <Header text={'login'}/>
    <div className='w-full '>
       <div className='max-w-[450px] mx-auto my-4'>
        <form className='flex flex-col'>            
            <input className='border p-1 my-2'  type="email" placeholder='enter email' autoComplete='email' />
            <input className='border p-1 my-2' type="password" placeholder='password' autoComplete='current-password' />
            <button>Login</button>
            <div className='flex justify-between'>
              <small>Need an account?</small>
              <Link to='/signup'>
                <small>Sign Up</small>
              </Link>
            </div>
          </form>
       </div>
    </div>
  </div>
  )
}

export default Login