import React, { useState } from 'react'
import logo from '../../assets/logo-dark.svg'
import { Formik } from "formik";
import { auth } from '../../config/firebase';
import { toast } from 'react-toastify'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import path from '../../ultis/path'

const SignUp = () => {
    const REGEX = {
        email: /^[a-zA-Z0-9._%+-]+@gmail\.com$/
    };

    const [form, setForm] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const navigate = useNavigate();

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    const handleValidate = () => {
        const errors = {};
        if (!form.email) {
            errors.email = "Trường này bắt buộc";
        } else if (!REGEX.email.test(form.email)) {
            errors.email = "Đây không phải là một Gmail";
        }
        if (!form.password) {
            errors.password = "Trường này bắt buộc";
        }
        if (!form.confirmPassword) {
            errors.confirmPassword = "Trường này bắt buộc";
        } else if (form.confirmPassword !== form.password) {
            errors.confirmPassword = "Vui lòng lặp lại mật khẩu ở trên"
        }
        return errors;
    }
    
    const handleSubmit = () => {
        const { email, password } = form;
        console.log(email, password)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
            navigate(path.PUBLIC)
        })
        .catch((error) => {
            console.log(error)
        })
        toast.success('Đăng nhập thành công !', {theme: "colored"})
    }

    
    return (
        <div className='flex h-screen flex-col gap-4 justify-center items-center bg-main-500 text-white'>
            <img 
                src={logo} 
                alt="mp3.zing-logo"
                className='w-1/4' 
            />
            <h1 className='font-bold text-dark-green'>FORM ĐĂNG KÝ</h1>
            <Formik
                initialValues={form}
                validate={handleValidate}
                onSubmit={handleSubmit}
            >
                {({ errors, handleSubmit }) => (
                <form onSubmit={handleSubmit} className='w-1/5'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-2'>
                            <label>Gmail <span className='text-red-400'>*</span></label>
                            <input
                                type="email"
                                name="email"
                                value={form.email || ""}
                                onChange={(e) => handleChange(e)}
                                placeholder='Nhập Gmail...'
                                className='text-gray-700 rounded-sm p-1'
                            />
                            {errors.email && <span className="text-red-400">{errors.email}</span>}
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>Mật khẩu <span className='text-red-400'>*</span></label>
                            <input
                                type="password"
                                name="password"
                                value={form.password || ""}
                                onChange={(e) => handleChange(e)}
                                placeholder='Nhập mật khẩu...'
                                className='text-gray-700 rounded-sm p-1'
                            />
                            {errors.password && <span className="text-red-400">{errors.password}</span>}
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>Xác Nhận Mật khẩu <span className='text-red-400'>*</span></label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={form.confirmPassword || ""}
                                onChange={(e) => handleChange(e)}
                                placeholder='Nhập lại mật khẩu...'
                                className='text-gray-700 rounded-sm p-1'
                            />
                            {errors.confirmPassword && <span className="text-red-400">{errors.confirmPassword}</span>}
                        </div>
                        <button 
                            type="submit"
                            onClick={handleSubmit}
                            className='w-1/2 m-auto p-1 bg-dark-green rounded-md hover:bg-dark-violet'
                        >ĐĂNG KÝ</button>
                        <button 
                            type="submit"
                            onClick={() => navigate(path.PUBLIC)}
                            className='w-1/2 m-auto p-1 bg-dark-orange rounded-md hover:bg-red-700'
                        >HỦY ĐĂNG KÝ</button>
                    </div>
                </form>
                )}
            </Formik>
        </div>
    )
}

export default SignUp