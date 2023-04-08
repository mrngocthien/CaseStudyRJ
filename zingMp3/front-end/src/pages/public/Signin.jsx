import React from 'react'
import logo from '../../assets/logo-dark.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import path from '../../ultis/path'
const Signin = () => {
  const navigate = useNavigate;
  const hangleSubmit = () => { 
    navigate(path.PUBLIC)
  }
  return (
    <div className='flex h-screen flex-col justify-center items-center bg-main-500 text-white'>
      <img 
        src={logo} 
        alt="mp3.zing-logo"
        className='w-1/4' 
      />
      <div className='w-1/4'>
        <form action="" className='flex flex-col gap-2'>
        <h1 className='font-bold text-light-violet text-lg'>FROM ĐĂNG NHẬP</h1>
          <div className='mb-3 flex flex-col gap-2'>
            <label htmlFor="email">Email</label>
            <input 
              type="email" placeholder='Nhập Email...'
              className='rounded-md px-2 py-1 text-black'
            />
          </div>
          <div className='mb-3 flex flex-col gap-2'>
            <label htmlFor="password">Password</label>
            <input 
              type="password" placeholder='Nhập Password...' 
              className='rounded-md px-2 py-1 text-black'
            />
          </div>
          <div className='flex items-center justify-around gap-2'>
            <button onClick={hangleSubmit} className='gap-2 bg-dark-violet hover:bg-light-violet hover:text-white text-gray-100 py-1 px-4 w-[150px] text-center rounded-full'>Login</button>
            <span>Hoặc</span>
            <NavLink to={path.SIGNUP} className='gap-2 bg-dark-violet hover:bg-dark-green hover:text-black text-gray-100 py-1 px-4 w-[150px] text-center rounded-full'>Tao tai khoan</NavLink>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signin