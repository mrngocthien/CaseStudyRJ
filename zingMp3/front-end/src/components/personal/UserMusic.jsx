import React, { useState } from 'react'
import { RecentList, UploadList } from "../../components";
import { Scrollbars } from "react-custom-scrollbars-2";

const UserMusic = () => {
  const [myRecentList, setMyRecentList] = useState(true)
  const [myUploadMusic, setMyUploadMusic] = useState(false)

  const handleRecentMusic = () => { 
    setMyRecentList(true);
    setMyUploadMusic(false)
  }
  
  const handleUploadMusic = () => { 
    setMyRecentList(false);
    setMyUploadMusic(true)
  }

  return (
    <div className='h-screen flex flex-col gap-4 font-semibold pt-8'>
      <div className='flex gap-4'>
        <span 
        className={`hover:text-dark-green cursor-pointer ${myRecentList && 'text-dark-green'}`}
          onClick={handleRecentMusic}
        >
        NGHE GẦN ĐÂY
        </span>
        <span 
        className={`hover:text-dark-green cursor-pointer ${myUploadMusic && 'text-dark-green'}`}
          onClick={handleUploadMusic}
        >
        ĐÃ TẢI LÊN
        </span>
      </div>
      <span className='bg-dark-green h-[1px]'></span>
      <Scrollbars>
        <div className='pb-80'>
            {myRecentList ? <RecentList/> : <UploadList />}
        </div>
      </Scrollbars>
      
    </div>
  )
}

export default UserMusic