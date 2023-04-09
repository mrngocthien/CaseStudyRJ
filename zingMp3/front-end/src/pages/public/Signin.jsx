import React from 'react'
import logo from '../../assets/logo-dark.svg'
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { auth } from '../../config/firebase'

const SignIn = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const signIn = () => {
    signInWithGoogle();
  }
  return (
    <div className='flex h-screen flex-col gap-4 justify-center items-center bg-main-500 text-white'>
      <img 
          src={logo} 
          alt="mp3.zing-logo"
          className='w-1/4' 
        />
      <button 
        className='gap-2 bg-dark-violet hover:bg-light-violet hover:text-white text-gray-100 py-1 px-4 text-center rounded-full'
        onClick={signIn}
      >
        ĐĂNG NHẬP BẰNG GOOGLE
      </button>
    </div>
  )
}

export default SignIn