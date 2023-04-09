import React from 'react'
import icons from '../ultis/icons'
import Search from './Search';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';


const { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight, AiOutlineLogout } = icons;

function Header() {
    const [loggedInUser] = useAuthState(auth);
    
    const handleLogout = async () => { 
        try {
            await signOut(auth)
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