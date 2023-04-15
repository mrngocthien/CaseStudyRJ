import React from 'react'
import icons from '../ultis/icons'
import SearchBar from './SearchBar';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actions from '../store/actions'
import path from '../ultis/path';
import { profileInfo } from './personal/profileInfo';


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
        } catch (error) {
            console.log('error logging out', error)
        }
    }
    return (
        <div className='flex justify-between w-full items-center z-10'>
            <div className='flex gap-6 items-center w-full'>
                <div className='flex gap-6 text-white'>
                    <span className='hover:text-light-violet cursor-pointer'><MdOutlineKeyboardDoubleArrowLeft size={30}/></span>
                    <span className='hover:text-light-violet cursor-pointer'><MdOutlineKeyboardDoubleArrowRight size={30}/></span>
                </div>
                <div className='w-1/2'>
                    <SearchBar />
                </div>
            </div>
            <div className='flex w-1/4 gap-2 items-center justify-end'>
                <div className='w-1/5' title={loggedInUser.email}>
                    <img 
                        src={loggedInUser?.photoURL || profileInfo.avatarURL} 
                        alt=""
                        className='w-full rounded-full cursor-pointer'
                        onClick={() => navigate(path.MY_MUSIC)} 
                    />
                </div>
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