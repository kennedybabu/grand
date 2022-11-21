import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Header from "../components/Header"
import { useNavigate } from 'react-router-dom'

import { UserAuth } from '../context/AuthContext'

const Signup = () => {
  const {user, signUp } = UserAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        await signUp(email, password)
        navigate('/account')
    } catch(error) {
      console.log(error)
    }
  }
  return (
    <div className='w-full h-screen'>
      <Header text={'signup'}/>
      <div className='w-full '>
         <div className='max-w-[450px] mx-auto my-4'>
          <form className='flex flex-col' onSubmit={handleSubmit}>            
              <input onChange={(e) => setEmail(e.target.value)} className='border p-1 my-2'  type="email" placeholder='enter email' autoComplete='email' />
              <input onChange={(e) => setPassword(e.target.value)} className='border p-1 my-2' type="password" placeholder='password' autoComplete='current-password' />
              <button>sign up</button>
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