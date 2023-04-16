import moment from 'moment'
import React, { memo } from 'react'
import 'moment/locale/vi'
import { useDispatch } from 'react-redux'
import * as actions from '../../store/actions'

const SongItem = ({data, size, style}) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(actions.setCurrentSongId(data.sid))
    dispatch(actions.play(true))
  }

  return (
    <div className={`${style || 'bg-main-200 hover:bg-main-100 gap-[10px]'} gap-[10px] flex rounded-md items-center`} onClick={handleClick}>
      <img src={data?.thumbnail} alt="thumbnail" className={`${size ? size : 'w-[60px] h-[60px]'} object-cover rounded-md cursor-pointer hover:animate-scale-up-image`}/>
      <div className='flex flex-col gap-1'>
        <span className='text-sm'>{data?.title?.length > 25 ? `${data?.title?.slice(0, 25)}...` : data?.title}</span>
        <span className='text-gray-400 text-xs'>{data?.artistsNames}</span>
        {data?.releaseDate && <span className='text-gray-400 text-xs'>{moment(data?.releaseDate * 1000).fromNow()}</span>}
      </div>
    </div>
  )
}

export default memo(SongItem)