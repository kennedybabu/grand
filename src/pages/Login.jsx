import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'

import { UserAuth } from '../context/AuthContext'


const Login = () => {
  const {user, logIn } = UserAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [error, setError] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        await logIn(email, password)
        navigate('/account')
    } catch(error) {
      setError(error.message)
      clearAlert()
    }
  }

  const clearAlert = () => {
    setTimeout(() => {
      setError('')
    }, 3000)
  }


  return (
    <div className='w-full h-screen'>
    <Header text={'login'} className='lg:hidden'/>
    <div className='w-full px-4 lg:px-0 flex'>      
       <div className='w-full my-4 lg:my-0 flex flex-col items-center justify-center'>            
      
        <h2 className='text-2xl font-bold my-6'>welcome</h2>
          <small className='w-[200px] mx-auto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</small>
        <form className='max-w-[550px] flex flex-col' onSubmit={handleSubmit}> 
            {error ? (
              <div className='w-full bg-red-400 p-1 text-black'>              
                <p>{error}</p>    
              </div>
            ) : null }             
            <input onChange={(e) => setEmail(e.target.value)} className='border p-1 my-2'  type="email" placeholder='enter email' autoComplete='email' />
            <input onChange={(e) => setPassword(e.target.value)} className='border p-1 my-2' type="password" placeholder='password' autoComplete='current-password' />
            <button className='w-full bg-[#df9a57] p-1'>Login</button>
            <div className='flex justify-between my-2'>
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