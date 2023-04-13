import moment from 'moment'
import React, { memo } from 'react'
import 'moment/locale/vi'

const SongItem = ({thumbnail, title, artistsNames, releaseDate}) => {
  return (
    <div className='w-[30%] p-[10px] flex-auto flex gap-2 hover:bg-gray-700 rounded-md'>
      <img src={thumbnail} alt="thumbnail" className='w-[60px] h-auto object-cover rounded-md cursor-pointer'/>
      <div className='flex flex-col justify-center gap-1'>
        <span className='text-sm'>{title}</span>
        <span className='text-gray-400'>{artistsNames}</span>
        <span className='text-gray-400'>{moment(releaseDate * 1000).fromNow()}</span>
      </div>
    </div>
  )
}

export default memo(SongItem)