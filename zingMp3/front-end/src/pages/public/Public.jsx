import React from 'react'
import { Outlet } from 'react-router-dom';
import { SidebarLeft, SidebarRight } from '../../components';

const Public = () => {
  return (
    <div className='w-full flex bg-[#170F23] text-white'>
        <div className='w-[240px] flex-none'>
            <SidebarLeft />
        </div>
        <div className='flex-auto'>
            <Outlet />
        </div>
        <div className='w-[329px] flex-none bg-[#120822]'>
            <SidebarRight />
        </div>
    </div>
  )
}

export default Public