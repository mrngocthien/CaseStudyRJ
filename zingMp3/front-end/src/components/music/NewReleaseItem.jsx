import moment from 'moment'
import React, { memo } from 'react'
import 'moment/locale/vi'
import { useDispatch } from 'react-redux'
import * as actions from '../../store/actions'
import icons from '../../ultis/icons'

const { RiVipDiamondFill } = icons

const NewReleaseItem = ({data}) => {
  const dispatch = useDispatch()
  // console.log(data)

  const handleClick = () => {
    dispatch(actions.setCurrentSongId(data?.encodeId))
    dispatch(actions.play(true))
    dispatch(actions.setRecentSong({thumbnail: data.thumbnail, title: data.title, encodeId: data.encodeId, artistsNames: data.artistsNames}))

  }

  return (
    <div className='w-[30%] relative m-2 justify-start p-[10px] gap-[10px] bg-main-200 flex hover:bg-main-100 rounded-md items-center' onClick={handleClick}>
      <span className='cursor-pointer text-light-violet  absolute right-4 top-9' title='VIP'>
        {data?.streamingStatus === 2 && <RiVipDiamondFill size={15}/>}
      </span>
      <img src={data?.thumbnail} alt="thumbnail" className='w-[60px] h-[60px] object-cover rounded-md cursor-pointer hover:animate-scale-up-image'/>
      <div className='flex flex-col'>
        <span className='text-sm'>{data?.title?.length > 25 ? `${data?.title?.slice(0, 25)}...` : data?.title}</span>
        <span className='text-gray-400'>{data?.artistsNames}</span>
        {data?.releaseDate && <span className='text-gray-400'>{moment(data?.releaseDate * 1000).fromNow()}</span>}
      </div>
    </div>
  )
}

export default memo(NewReleaseItem)