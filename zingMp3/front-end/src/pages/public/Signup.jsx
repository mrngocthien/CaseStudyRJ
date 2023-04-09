import React from 'react'
import logo from '../../assets/logo-dark.svg'
import { NavLink } from 'react-router-dom'
import path from '../../ultis/path'
import { useFormik } from 'formik';
import FormValidation from '../../dto/fromValidation'

function Signup() {
  const { errors, values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: '',
      password: '',
      file: ''
    },
    validationSchema: FormValidation,
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
        <form action="" className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <h1 className='font-bold text-dark-green text-lg'>FROM ĐĂNG KÝ</h1>
            <div className='flex flex-col gap-2'>
              <label htmlFor="email">Email<span className='text-red-500'> *</span></label>
              <input 
              type="email" placeholder='Nhập Email...'
              name='email'
              className='rounded-md px-2 py-1 text-black'
              value={values.email}
              onChange={handleChange}
              />
              {errors.email && <span className="text-red-400">{errors.email}</span>}
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="password">Password<span className='text-red-500'> *</span></label>
              <input 
              type="password" placeholder='Nhập Password...' 
              name='password'
              className='rounded-md px-2 py-1 text-black'
              value={values.password}
              onChange={handleChange}
              />
              {errors.password && <span className="text-red-400">{errors.password}</span>}
            </div>
            <div className='flex flex-col gap-2'>
            <label htmlFor="file">Avatar<span className='text-red-500'> *</span></label>
              <input type="file" name='file' onChange={handleChange} className='file:rounded-md file:cursor-pointer file:py-1' />
              {errors.file && <span className="text-red-400">{errors.file}</span>}
            </div>
            <div className='mt-2 flex items-center justify-around gap-2'>
              <button 
              className='gap-2 bg-dark-green hover:bg-dark-orange hover:text-white text-black py-1 px-4 w-[150px] text-center rounded-full'
              type='submit'
              onClick={handleSubmit}
              >Đăng ký</button>
              <span>Hoặc</span>
              <NavLink to={path.PUBLIC} className='gap-2 bg-dark-violet hover:bg-light-violet hover:text-white text-gray-100 py-1 px-4 w-[150px] text-center rounded-full'>Đăng nhập</NavLink>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Signup