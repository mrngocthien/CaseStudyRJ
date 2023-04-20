import React, { useState } from 'react'
import { RecentList, UploadList, FavouriteList } from "../../components";
import { Scrollbars } from "react-custom-scrollbars-2";

const UserMusic = () => {
  const [isActive, setIsActive] = useState(0)

  return (
    <div className='h-screen flex flex-col gap-4 font-semibold'>
      <div className='flex gap-4 border-b-2 border-dark-green h-[40px]'>
        <span 
        className={`hover:text-dark-green cursor-pointer ${isActive === 0 && 'text-dark-green border-b-2 border-dark-violet h-[40px]'}`}
          onClick={() => setIsActive(0)}
        >
        NGHE GẦN ĐÂY
        </span>
        <span 
        className={`hover:text-dark-green cursor-pointer ${isActive === 1 && 'text-dark-green border-b-2 border-dark-violet h-[40px]'}`}
          onClick={() => setIsActive(1)}
        >
        NHẠC YÊU THÍCH
        </span>
        <span 
        className={`hover:text-dark-green cursor-pointer ${isActive === 2 && 'text-dark-green border-b-2 border-dark-violet h-[40px]'}`}
          onClick={() => setIsActive(2)}
        >
        ĐÃ TẢI LÊN
        </span>
      </div>
      <Scrollbars>
        <div className='pb-80'>
            {isActive === 0 ? <RecentList/> : isActive === 1 ? <FavouriteList /> : <UploadList />}
        </div>
      </Scrollbars>
      
    </div>
  )
}

export default UserMusic