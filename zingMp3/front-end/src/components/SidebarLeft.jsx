import React from 'react'
import logo from '../assets/logo-dark.svg'
import {sidebarMenu} from '../ultis/menu';
import { NavLink, useNavigate } from 'react-router-dom';
import path from '../ultis/path'

const activedStyle = 'font-bold py-2 px-[25px] flex gap-[12px] items-center text-blue-400';
const notActiveStyle = 'font-bold py-2 px-[25px] flex gap-[12px] items-center text-gray-200';


const SidebarLeft = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col h-full bg-main-200'>
      <div onClick={() => navigate(path.HOME)} className='w-full h-[70px] px-[15px] py-[25px] flex justify-start items-center cursor-pointer'>
        <img src={logo} alt="logo" className='w-[120px] oh-10' />
      </div>
      <div className='flex flex-col text-sm'>
        {
          sidebarMenu.map(item => (
            <NavLink 
              to={item.path}
              key={item.path}
              end={item.end}
              className={({isActive}) => isActive ? activedStyle : notActiveStyle}
            >
              {item.icons}
              <span className='hover:text-green-300'>{item.text}</span>
            </NavLink>
          ))
        }
      </div>
    </div>
  )
}

export default SidebarLeft