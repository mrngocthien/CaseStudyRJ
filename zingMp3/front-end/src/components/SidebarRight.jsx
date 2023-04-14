import React, { useState } from 'react'
import icons from "../ultis/icons";
import { useSelector } from 'react-redux'
import SongItem from './music/SongItem';

const {
  RiDeleteBinFill 
} = icons;


const SidebarRight = () => {
  const [isActive, setIsActive] = useState(false)
  const { currentSongData } = useSelector(state => state.music);
  console.log(currentSongData)
  return (
    <div className='w-full h-full bg-main-200 flex flex-col text-xs text-gray-300'>
      <div className='h-[70px] flex-none px-2 py-[14px] flex gap-8 justify-between items-center'>
        <div className='w-full flex-auto flex justify-center bg-main-500 rounded-l-full rounded-r-full p-[5px] cursor-pointer'>
          <span 
            className={`${!isActive && 'bg-gray-600 text-white'} py-[5px] flex-1 flex justify-center rounded-l-full rounded-r-full`}
            onClick={() => setIsActive(prev => !prev)}
          >Danh sách phát</span>
          <span 
            className={`${isActive && 'bg-gray-600 text-white'} py-[5px] flex-1 flex justify-center rounded-l-full rounded-r-full`}
            onClick={() => setIsActive(prev => !prev)}  
          >Nghe gần đây</span> 
        </div>
        <span className='p-1 bg-gray-600 hover:bg-dark-violet cursor-pointer rounded-full'><RiDeleteBinFill size={20}/></span>
      </div>  
      <div className='w-full flex flex-col'>
        <SongItem 
          thumbnail={currentSongData.thumbnail}
          title={currentSongData.title}
          artistsNames={currentSongData.artistsNames}
          releaseDate={currentSongData.releaseDate}
          sid={currentSongData.encodeId}
        />
      </div>
    </div>
  )
}

export default SidebarRight;