import React, { memo, useState } from 'react'
import { handleNumberFollower } from '../../ultis/funtions'
import { Link } from 'react-router-dom';

const Artist = ({data}) => {
  const [isHover, setIsHover] = useState(false)
  return (
    <div className='flex flex-col gap-4'>
        <Link 
          className='relative overflow-hidden cursor-pointer rounded-full'
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          to={data?.link}
        >
          <img 
            src={data?.thumbnail} alt="avatar" 
            className={`rounded-full object-cover ${isHover ? "animate-scale-up-image" : 'animate-scale-down-image'}`}
          />
          {isHover && <div className='absolute top-0 left-0 right-0 bottom-0 bg-overlay-30 rouned-full'></div>}
        </Link>
        <div className='flex flex-col items-center'>
            <Link to={data?.link} className='font-bold'>{data?.name}</Link>
            <span className='text-gray-400 text-sm'>{`${handleNumberFollower(data?.totalFollow)} quan tâm`}</span>
        </div>
        <Link to={data?.link} 
          className='text-white text-center bg-dark-violet w-1/2 m-auto hover:bg-light-violet rounded-full px-2 py-1'
        >Tìm hiểu
        </Link>
    </div>
  )
}

export default memo(Artist)