import React from 'react'
import icons from '../ultis/icons'
import Search from './Search';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify'
import * as actions from '../store/actions'
import path from '../ultis/path';


const { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight, AiOutlineLogout } = icons;

function Header() {
    const [loggedInUser] = useAuthState(auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = async () => { 
        try {
            await signOut(auth);
            dispatch(actions.play(false))
            navigate(path.PUBLIC)
            toast.success('Đăng xuất !')
        } catch (error) {
            console.log('error logging out', error)
        }
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
            <div className='flex w-1/4 gap-2 items-center justify-end'>
                <img 
                    src={loggedInUser?.photoURL || ''} 
                    alt=""
                    className='w-1/5 rounded-full cursor-pointer' 
                />
                <button 
                    className=' bg-dark-violet hover:bg-dark-orange hover:text-white py-1 px-4 text-center text-xl rounded-full'
                    onClick={handleLogout}
                >
                    <AiOutlineLogout />
                </button>
            </div>
        </div>
    )
}

export default Header