import React from 'react'
import PageLoading from './music/pageLoading'
import logo from '../assets/logo-dark.svg'

const Loading = () => {
  return (
    <div className='flex flex-col w-full h-screen bg-main-100 items-center justify-center'>
      <img 
          src={logo} 
          alt="mp3.zing-logo"
          className='w-1/4' 
        />
      <div>
        <PageLoading />
      </div>
    </div>
  )
}

export default Loading