import React from 'react'
import logo from '../../assets/logo-dark.svg'
import { NavLink } from 'react-router-dom'
import path from '../../ultis/path'
import { useFormik } from 'formik';
import signinFormValidation from '../../dto/signupFrom-Validation-DTO'

const Signin = () => {
  
  const {errors, values, handleSubmit, handleChange} = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: signinFormValidation,
    onSubmit: (values) => {
      console.log(values)
    },
    validateOnChange: false,
  });
  return (
    <div className='flex h-screen flex-col justify-center items-center bg-main-500 text-white'>
      <img 
        src={logo} 
        alt="mp3.zing-logo"
        className='w-1/4' 
      />
      <div className='w-1/4'>
        <form action="" className='flex flex-col gap-2' onSubmit={handleSubmit}>
          <h1 className='font-bold text-light-violet text-lg'>FROM ĐĂNG NHẬP</h1>
          <div className='mb-3 flex flex-col gap-2'>
            <label htmlFor="email">Email</label>
            <input 
              type="email" placeholder='Nhập Email...'
              name='email'
              className='rounded-md px-2 py-1 text-black'
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <span className="text-red-500">{errors.email}</span>}
          </div>
          <div className='mb-3 flex flex-col gap-2'>
            <label htmlFor="password">Password</label>
            <input 
              type="password" placeholder='Nhập Password...' 
              name='password'
              className='rounded-md px-2 py-1 text-black'
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <span className="text-red-500">{errors.password}</span>}
          </div>
          <div className='flex items-center justify-around gap-2'>
            <button type='submit' onClick={handleSubmit} className='gap-2 bg-dark-violet hover:bg-light-violet hover:text-white text-gray-100 py-1 px-4 w-[150px] text-center rounded-full'>Đăng nhập</button>
            <span>Hoặc</span>
            <NavLink to={path.SIGNUP} className='gap-2 bg-dark-green hover:bg-dark-orange hover:text-white text-black py-1 px-4 w-[150px] text-center rounded-full'>Đăng ký</NavLink>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signin