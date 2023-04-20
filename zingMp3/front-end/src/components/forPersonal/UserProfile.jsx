import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../config/firebase';
import { profileInfo } from './profileInfo';

const UserProfile = () => {
    const [loggedInUser] = useAuthState(auth);
    return (
        <div className='flex items-center gap-4'>
            <img src={loggedInUser.photoURL ? loggedInUser.photoURL : profileInfo.avatarURL} alt=""  className='w-1/6 rounded-full'/>
            <div className='flex flex-col gap-2 text-lg'>
                <span>
                    <span className='text-dark-green mr-2'>Họ và tên: </span>
                    {loggedInUser.displayName || profileInfo.displayName}
                </span>
                <span>
                    <span className='text-dark-green mr-2'>Địa chỉ Email: </span> 
                    {loggedInUser.email}
                </span>
                <span>
                    <span className='text-dark-green mr-2'>Đăng nhập gần đây: </span> 
                    {loggedInUser.metadata.lastSignInTime}
                </span>
            </div>
        </div>
    )
}

export default UserProfile