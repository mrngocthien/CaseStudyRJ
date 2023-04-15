import React, { memo } from 'react'
import icons from '../../ultis/icons'
import moment from 'moment'
import * as actions from '../../store/actions'
import { useDispatch } from "react-redux";

const { HiOutlineMusicNote } = icons

//received songData from SongList component
const Song = ({ songData, isHide }) => {
  const dispatch = useDispatch();
    // console.log({songData})
  const handleClickSong = () => {
    dispatch(actions.setCurrentSongId(songData?.encodeId))
    dispatch(actions.play(true))
  }
  return (
    <div 
      className='flex justify-between items-center p-[10px] border-t border-gray-400 hover:bg-main-100 cursor-pointer'
      onClick={() => handleClickSong()}
    >
      <div className='flex items-center gap-3 flex-1'>
          {!isHide && <span><HiOutlineMusicNote /></span>}
          <img src={songData?.thumbnail} alt="thumbnailM" className='w-10 h-10 object-cover rounded-md hover:animate-scale-up-image' />
          <div className='flex flex-col gap-1 w-full'>
              <span className='text-sm font-semibold'>{songData?.title?.length > 20 ? `${songData?.title?.slice(0, 20)}...` : songData?.title}</span>
              <span className='text-xs text-gray-400'>{songData?.artistsNames?.length > 20 ? `${songData?.artistsNames?.slice(0, 20)}...` : songData?.artistsNames}</span>
          </div>
      </div>
      {!isHide && 
        <div className='flex-1 flex items-center justify-center'>
            {songData?.album?.title?.length > 25 ? `${songData?.album?.title?.slice(0, 25)}...` : songData?.album?.title}
        </div>
      }
      <div className='flex-1 flex justify-end text-xs'>
          {moment.utc(songData?.duration * 1000).format('mm:ss')}
      </div>
    </div>
  )
}

export default memo(Song)