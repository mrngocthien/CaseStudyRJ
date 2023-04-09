import React from 'react'
import icons from '../ultis/icons'
import Search from './Search';
import { useDispatch } from 'react-redux';
import * as actions from '../store/actions'

const { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } = icons;

function Header() {
    const dispatch = useDispatch();
    const handleSignout = () => { 
        dispatch(actions.getSignIn(false))
    }
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
        <div className='flex w-1/4 items-center justify-end'>
            <img src="" alt="" />
            <button 
                className=' bg-dark-violet hover:bg-light-violet hover:text-white text-gray-100 py-1 px-4 text-center rounded-full'
                onClick={handleSignout}
            >Đăng xuất</button>
        </div>
    </div>
  )
}

export default Header