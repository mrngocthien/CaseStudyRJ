import React from 'react'
import { Outlet, NavLink } from 'react-router-dom';
import { Scrollbars } from "react-custom-scrollbars-2";
import { searchMenu } from '../../ultis/menu'
import { useSelector } from 'react-redux';

const activedStyle = 'text-light-violet font-bold px-3 cursor-pointer hover:text-white border-b-2 border-dark-green flex items-center h-[50px]'
const notActivedStyle = 'text-gray-300 font-bold px-3 cursor-pointer hover:text-white'

const Search = () => {
  const { keyword } = useSelector(state => state.music)
  return (
    <div className='px-[59px] w-full h-[80%] overflow-y-auto'>
      <Scrollbars style={{width: "100%", height: "100%" }}>
        <div className='flex gap-4 h-[50px] mb-7 items-center border-b border-gray-600'>
          <span className='text-[24px] font-bold border-r border-gray-600 pr-4'>Kết quả tìm kiếm</span>
          <div className='flex items-center'>
            {searchMenu.map(item => (
              <NavLink 
                key={item.path} 
                to={`${item.path}?q=${keyword.replace(' ', '+')}`}
                className={({isActive}) => isActive ? activedStyle : notActivedStyle}
              >
                {item.text}
              </NavLink>
              
            ))}
          </div>
        </div>
        <div className='w-full'>
          <Outlet />
        </div>
      </Scrollbars>
    </div>
  )
}

export default Search