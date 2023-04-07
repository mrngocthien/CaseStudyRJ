import React, { memo } from 'react'
import icons from '../../ultis/icons'
import moment from 'moment'
import * as actions from '../../store/actions'
import { useDispatch } from "react-redux";

const { HiOutlineMusicNote } = icons

const Song = ({songData}) => {
  const dispatch = useDispatch();
    // console.log({songData})
  const handleClickSong = () => { 
    dispatch(actions.setCurrentSongId(songData?.encodeId))
    dispatch(actions.playAlbum(true))
    dispatch(actions.play(true))
  }
  return (
    <div 
      className='flex justify-between items-center p-[10px] border-t border-gray-400 hover:bg-main-100 cursor-pointer'
      onClick={() => handleClickSong()}
    >
      <div className='flex items-center gap-3 flex-1'>
          <span><HiOutlineMusicNote /></span>
          <img src={songData?.thumbnail} alt="thumbnailM" className='w-10 h-10 object-cover rounded-md' />
            {/* <span className={`absolute ${isPlaying ? 'block' : 'hidden'}`}>
              <AudioPlayingBars/>
            </span> */}
          <div className='flex flex-col w-full'>
              <span className='text-sm font-semibold'>{songData?.title?.length > 20 ? `${songData?.title?.slice(0, 20)}...` : songData?.title}</span>
              <span className='text-gray-400'>{songData?.artistsNames}</span>
          </div>
      </div>
      <div className='flex-1 flex items-center justify-center'>
          {songData?.album?.title?.length > 25 ? `${songData?.album?.title?.slice(0, 25)}...` : songData?.album?.title}
      </div>
      <div className='flex-1 flex justify-end'>
          {moment.utc(songData?.duration * 1000).format('mm:ss')}
      </div>
    </div>
  )
}

export default memo(Song)