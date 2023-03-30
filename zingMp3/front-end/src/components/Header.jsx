import React from 'react'
import icons from '../ultis/icons'
import Search from './Search';

const { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } = icons;

function Header() {
  return (
    <div className='flex justify-between w-full items-center'>
        <div className='flex gap-6 items-center w-full'>
            <div className='flex gap-6 text-gray-400'>
                <span><MdOutlineKeyboardDoubleArrowLeft size={24}/></span>
                <span><MdOutlineKeyboardDoubleArrowRight size={24}/></span>
            </div>
            <div className='w-1/2'>
                <Search />
            </div>
        </div>
        <div>
            Login
        </div>
    </div>
  )
}

export default Header