import React, { useState } from 'react'
import { UserProfile, UserMusic } from "../../components";

function Personal() {
  const [userInfo, setUserInfo] = useState(true);
  const [userMusic, setUserMusic] = useState(false);

  const handleUserInfoClick = () => { 
    setUserInfo(true);
    setUserMusic(false)
  }

  const handleUserMusicClick = () => { 
    setUserInfo(false);
    setUserMusic(true)
  }

  return (
    <div className='flex flex-col gap-4 font-semibold px-[59px] pt-8'>
      <div className='flex gap-4'>
        <span 
          className={`hover:text-light-violet cursor-pointer ${userInfo && 'text-light-violet'}`}
          onClick={handleUserInfoClick}
        >
          THÔNG TIN TÀI KHOẢN
        </span>
        <span 
          className={`hover:text-light-violet cursor-pointer ${userMusic && 'text-light-violet'}`}
          onClick={handleUserMusicClick}
        >
          THƯ VIỆN NHẠC
        </span>
      </div>
      <span className='bg-dark-violet h-[2px]'></span>
      <div>
        {userInfo ? <UserProfile/> : <UserMusic />}
      </div>
    </div>
  )
}

export default Personal