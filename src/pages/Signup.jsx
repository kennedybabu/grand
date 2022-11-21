import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Header from "../components/Header"
import { useNavigate } from 'react-router-dom'

import { UserAuth } from '../context/AuthContext'

const Signup = () => {
  const {user, signUp } = UserAuth()
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        await signUp(email, password)
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
      <Header text={'signup'}/>
      <div className='w-full px-4 '>
         <div className='max-w-[450px] mx-auto my-4'>
          <form className='flex flex-col' onSubmit={handleSubmit}>   
              { error ? <p className='p-2 bg-red-500'>{error}</p> : null }         
              <input onChange={(e) => setEmail(e.target.value)} className='border p-1 my-2'  type="email" placeholder='enter email' autoComplete='email' />
              <input onChange={(e) => setPassword(e.target.value)} className='border p-1 my-2' type="password" placeholder='password' autoComplete='current-password' />
              <button className='w-full p-1 bg-[#df9a57] my-2'>sign up</button>
              <div className='flex justify-between'>
                <small>ALready signed up?</small>
                <Link to='/login'>
                  <small>Login</small>
                </Link>
              </div>
            </form>
         </div>
      </div>
    </div>
  )
}

export default Signup