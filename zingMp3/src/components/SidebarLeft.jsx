import React from 'react'
import logo from '../assets/logo-dark.svg'
import {sidebarMenu} from '../ultis/menu';
import { NavLink } from 'react-router-dom';

const activedStyle = 'font-bold py-2 px-[25px] flex gap-[12px] items-center text-blue-400';
const notActiveStyle = 'font-bold py-2 px-[25px] flex gap-[12px] items-center text-gray-200';

const SidebarLeft = () => {
  return (
    <div className='flex flex-col'>
      <div className='w-full h-[70px] px-[15px] py-[25px] flex justify-start items-center'>
        <img src={logo} alt="logo" className='w-[120px] oh-10' />
      </div>
      <div className='flex flex-col'>
        {
          sidebarMenu.map(item => (
            <NavLink 
              to={item.path}
              key={item.path}
              end={item.end}
              className={({isActive}) => isActive ? activedStyle : notActiveStyle}
            >
              {item.icons}
              <span>{item.text}</span>
            </NavLink>
          ))
        }
      </div>
    </div>
  )
}

export default SidebarLeft