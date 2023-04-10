import React, { useState } from 'react'
import { FavoriteList, UploadList } from "../../components";


const UserMusic = () => {
    const [myFavoriteMusic, setMyFavoriteMusic] = useState(true)
    const [myUploadMusic, setMyUploadMusic] = useState(false)

    const handleFavoriteMusic = () => { 
        setMyFavoriteMusic(true);
        setMyUploadMusic(false)
      }
    
      const handleUploadMusic = () => { 
        setMyFavoriteMusic(false);
        setMyUploadMusic(true)
      }

    return (
        <div className='flex flex-col gap-4 font-semibold pt-8'>
        <div className='flex gap-4'>
            <span 
            className={`hover:text-dark-green cursor-pointer ${myFavoriteMusic && 'text-dark-green'}`}
              onClick={handleFavoriteMusic}
            >
            YEU THICH
            </span>
            <span 
            className={`hover:text-dark-green cursor-pointer ${myUploadMusic && 'text-dark-green'}`}
              onClick={handleUploadMusic}
            >
            DA TAI LEN
            </span>
        </div>
        <span className='bg-dark-green h-[1px]'></span>
        <div>
            {myFavoriteMusic ? <FavoriteList/> : <UploadList />}
        </div>
        </div>
    )
}

export default UserMusic