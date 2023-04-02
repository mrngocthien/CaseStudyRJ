import React, { memo } from 'react'
import icons from '../ultis/icons'
import moment from 'moment'

const { HiOutlineMusicNote } = icons
const Song = ({songData}) => {
    // console.log({songData})
  return (
    <div className='flex justify-between items-center px-[10px] py-2 border-t border-gray-700'>
      <div className='flex items-center gap-2 flex-1'>
        <span><HiOutlineMusicNote size={16}/></span>
        <img src={songData?.thumbnail} 
            alt="thumbnail"
            className='w-10 h-10 object-cover rounded-md'
        />
        <div className='flex flex-col gap-1'>
          <span className='font-semibold cursor-pointer'>
            {songData?.title.length > 30 
            ? `${songData?.title?.slice(0, 30)}...` 
            : songData?.title}
          </span>
          <span className='text-gray-400 font-xs cursor-pointer'>
            {songData?.artistsNames.length > 30
            ? `${songData?.artistsNames?.slice(0, 30)}...`
            : songData?.artistsNames}
          </span>
        </div>
        
      </div>
      <div className='flex-1 flex  items-center justify-center cursor-pointer'>
        {songData?.album?.title}
      </div>
      <div className='flex-1 flex justify-end'>
        {moment.utc(songData?.duration * 1000).format('mm:ss')}
      </div>
    </div>
  )
}

export default memo(Song)