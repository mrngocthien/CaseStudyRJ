import React from 'react'
import logo from '../../assets/logo-dark.svg'
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { auth } from '../../config/firebase'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import path from '../../ultis/path'

const SignIn = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithGoogle();
    toast.success('Đăng nhập thành công !', {theme: "colored"})
  }

  const signInClassical = () => { 
    navigate(path.SIGNIN_CLASSICAL)
  }
  return (
    <div className='flex h-screen flex-col gap-4 justify-center items-center bg-main-500 text-white'>
      <img 
        src={logo} 
        alt="mp3.zing-logo"
        className='w-1/4' 
      />
      <button 
        className='w-1/5 gap-2 bg-dark-violet hover:bg-light-violet hover:text-white text-gray-100 py-1 px-4 text-center rounded-full'
        onClick={signIn}
      >
        ĐĂNG NHẬP BẰNG GOOGLE
      </button>
      <button 
        className='w-1/5 gap-2 bg-dark-violet hover:bg-light-violet hover:text-white text-gray-100 py-1 px-4 text-center rounded-full'
        onClick={signInClassical}
      >
        ĐĂNG NHẬP BẰNG EMAIL
      </button>
    </div>
  )
}

export default SignIn