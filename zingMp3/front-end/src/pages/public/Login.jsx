import React from 'react'
import logo from '../../assets/logo-dark.svg'
const Login = () => {
  return (
    <div className='flex h-screen flex-col justify-center items-center bg-main-500 text-white'>
      <img 
        src={logo} 
        alt="mp3.zing-logo"
        className='w-1/4' 
      />
      <form action="" className='flex flex-col gap-2'>
        <div className='mb-3 flex flex-col gap-2'>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='Enter Email' />
        </div>
        <div className='mb-3 flex flex-col gap-2'>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder='Enter Password' />
        </div>
        <button className='gap-2 mt-2 bg-dark-violet hover:bg-light-violet hover:text-white text-gray-100 py-1 px-11 rounded-full'>Login</button>
        <p>Ban chua co tai khoan ?</p>
        <button className='gap-2 mt-2 bg-dark-violet hover:bg-light-violet hover:text-white text-gray-100 py-1 px-4 rounded-full'>Tao tai khoan</button>
      </form>
    </div>
  )
}

export default Login