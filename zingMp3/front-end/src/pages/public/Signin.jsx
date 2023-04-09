import React, { useState } from 'react'
import logo from '../../assets/logo-dark.svg'
import { NavLink } from 'react-router-dom'
import path from '../../ultis/path'
import { Formik } from "formik";
import { useDispatch } from 'react-redux';
import * as actions from '../../store/actions'
import { toast } from 'react-toastify'

function Signin() {
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    };
    const [form, setForm] = useState({});
    const dispatch = useDispatch();

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
            errors.email = "Đây không phải là một email !";
        }
        if (!form.password) {
            errors.password = "Trường này không được bỏ trống !";
        }
        return errors;
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log({email: form.email, password: form.password});
        toast.success('Đăng nhập thành công !', {theme: "colored"});
        dispatch(actions.getSignIn(true));

        if (handleValidate()) {
            fetch(`http://localhost:3000/users/${form.email}`)
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                console.log(resp)
                if(Object.keys(resp).length === 0) {
                    toast.error('Tài khoản không tồn tại !')
                } else {
                    if (resp.password === form.password) {
                        dispatch(actions.getSignIn(true))
                    } else {
                        toast.error('Vui lòng nhập đúng mật khẩu')
                    }
                }
            })
            .catch((err) => {
                console.log(err)
            })
        }
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
            >
            {({ errors, handleSubmit }) => (
                <form action="" className='flex flex-col gap-2' onSubmit={handleSubmit}>
                    <h1 className='font-bold text-light-violet text-lg'>FROM ĐĂNG NHẬP</h1>
                    <div className='mb-3 flex flex-col gap-2'>
                        <label htmlFor="email">Email<span className='text-red-500'> *</span></label>
                        <input 
                        type="email" placeholder='Nhập Email...'
                        name='email'
                        className='rounded-md px-2 py-1 text-black'
                        value={form.email || ''}
                        onChange={handleChange}
                        />
                        {errors.email && <span className="text-red-500">{errors.email}</span>}
                    </div>
                    <div className='mb-3 flex flex-col gap-2'>
                        <label htmlFor="password">Password<span className='text-red-500'> *</span></label>
                        <input 
                        type="password" placeholder='Nhập Password...' 
                        name='password'
                        className='rounded-md px-2 py-1 text-black'
                        value={form.password || ''}
                        onChange={handleChange}
                        />
                        {errors.password && <span className="text-red-500">{errors.password}</span>}
                    </div>
                    <div className='flex items-center justify-around gap-2'>
                        <button 
                            type='submit' 
                            onClick={handleSubmit} 
                            className='gap-2 bg-dark-violet hover:bg-light-violet hover:text-white text-gray-100 py-1 px-4 w-[150px] text-center rounded-full'
                        >Đăng nhập</button>
                        <span>Hoặc</span>
                        <NavLink to={path.SIGNUP} className='gap-2 bg-dark-green hover:bg-dark-orange hover:text-white text-black py-1 px-4 w-[150px] text-center rounded-full'>Đăng ký</NavLink>
                    </div>
                </form>
            )}
            </Formik>
        </div>
        </div>
    )
}

export default Signin