import React, { memo } from 'react'
import { useNavigate } from "react-router-dom";

const TrendingArtist = ({data}) => {
  const navigate = useNavigate();

  const handleClickedBanner = (item) => {
    const albumPath = item?.link.split('.')[0];
    navigate(albumPath)
  };

  return (
    <div className='mt-10 flex flex-col gap-4'>
      <h3 className='text-[20px] font-bold'>{data?.title}</h3>
      <div className='flex gap-8 items-center cursor-pointer'>
        {data?.items?.map(item => (
          <div key={item.encodeId} className='flex-1 flex flex-col gap-1'>
            <img 
              src={item.thumbnailM} alt="thumbnailM" 
              className='rounded-md object-contain'
              onClick={() => handleClickedBanner(item)}
            />
            <span className='text-gray-400'>{item.sortDescription}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default memo(TrendingArtist)