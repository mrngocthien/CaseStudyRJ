import moment from 'moment'
import React, { memo } from 'react'
import 'moment/locale/vi'
import { useDispatch } from 'react-redux'
import * as actions from '../../store/actions'

const NewReleaseItem = ({thumbnail, title, artistsNames, releaseDate, sid}) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(actions.setCurrentSongId(sid))
    dispatch(actions.play(true))
  }

  return (
    <div className='w-[30%] m-2 justify-start p-[10px] gap-[10px] bg-main-200 flex hover:bg-main-100 rounded-md items-center' onClick={handleClick}>
      <img src={thumbnail} alt="thumbnail" className='w-[60px] h-[60px] object-cover rounded-md cursor-pointer hover:animate-scale-up-image'/>
      <div className='flex flex-col'>
        <span className='text-sm'>{title?.length > 25 ? `${title?.slice(0, 25)}...` : title}</span>
        <span className='text-gray-400'>{artistsNames}</span>
        {releaseDate && <span className='text-gray-400'>{moment(releaseDate * 1000).fromNow()}</span>}
      </div>
    </div>
  )
}

export default memo(NewReleaseItem)