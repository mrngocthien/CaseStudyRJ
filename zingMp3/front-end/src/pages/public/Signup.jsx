import React, { useState } from 'react'
import logo from '../../assets/logo-dark.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import path from '../../ultis/path'
import { Formik } from "formik";
import { toast } from 'react-toastify'
import axios from 'axios'

function Signup() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [fileSelected, setFileSelected] = useState();
  const [form, setForm] = useState({
    email:'', 
    password: '', 
    file:''
  });
  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  };

  function handleChange(event) {
    setForm({
        ...form,
        [event.target.name]: event.target.value
    });
  }

  function handleValidate() {
    const errors = {};
    if (!form.email) {
        errors.email = "Trường này không được bỏ trống !";
    } else if (!REGEX.email.test(form.email)) {
        errors.email = "Đây không phải là một email";
    }
    if (!form.password) {
        errors.password = "Trường này không được bỏ trống !";
    }
    if (!form.file) {
      errors.file = "Vui lòng ảnh đại diện !"
    }
    return errors;
  }

  const handleFileSelected = (event) => { 
    setFileSelected(event.target.files[0]);
    setForm({
      ...form,
      [event.target.name]: event.target.value
  });
  }

  const createUser = async (image) => {
    const newUser = {
      email: form.email,
      password: form.password,
      image
    };
    try {
      const res = await axios.post(`http://localhost:3000/users`, newUser);
      if (res.data.status === 1) {
        toast.success('Đăng ký thành công !', {theme: "colored"});
        navigate(path.SIGNIN)
      }
    } catch (error) {
      console.error(error);
      toast.warning('Đăng ký người dùng thất bại')
    } finally {
      setIsLoading(false);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(form);
    setIsLoading(true);
    try {
      let image = "";
      if (fileSelected) {
        const reader = new FileReader();
        reader.readAsDataURL(fileSelected);
        reader.onloadend = () => {
          image = reader.result;
          createUser(image);
        };
      } else {
        createUser(image);
      }
    } catch (error) {
      console.error(error);
    }
  }

  if (isLoading) {
    return <p>Loading...</p>
  }
  return (
    <div className='flex h-screen flex-col justify-center items-center bg-main-500 text-white'>
      <img 
        src={logo} 
        alt="mp3.zing-logo"
        className='w-1/4' 
      />
      <div className='w-1/4'>
        <Formik
          initialValues={form}
          validate={handleValidate}
          onSubmit={handleSubmit}
          onChange={handleChange}
          >
          {({ errors, handleSubmit }) => (
            <form action="" className='flex flex-col gap-4' onSubmit={handleSubmit}>
                <h1 className='font-bold text-dark-green text-lg'>FROM ĐĂNG KÝ</h1>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="email">Email<span className='text-red-500'> *</span></label>
                  <input 
                    type="email" placeholder='Nhập Email...'
                    name='email'
                    className='rounded-md px-2 py-1 text-black'
                    value={form.email}
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
                    value={form.password}
                    onChange={handleChange}
                  />
                  {errors.password && <span className="text-red-400">{errors.password}</span>}
                </div>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="file">Avatar<span className='text-red-500'> *</span></label>
                  <input 
                    type="file" 
                    name='file'
                    value={form.file} 
                    onChange={(e) => handleFileSelected(e)} 
                    className='file:rounded-md file:cursor-pointer file:py-1' />
                  {errors.file && <span className="text-red-400">{errors.file}</span>}
                </div>
                <div className='mt-2 flex items-center justify-around gap-2'>
                  <button 
                    className='gap-2 bg-dark-green hover:bg-dark-orange hover:text-white text-black py-1 px-4 w-[150px] text-center rounded-full'
                    type='submit'
                    onClick={handleSubmit}
                  >Đăng ký</button>
                  <span>Hoặc</span>
                  <NavLink 
                    to={path.PUBLIC} 
                    className='gap-2 bg-dark-violet hover:bg-light-violet hover:text-white text-gray-100 py-1 px-4 w-[150px] text-center rounded-full'
                  >Đăng nhập</NavLink>
                </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Signup