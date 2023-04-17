import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom';

const SingerAlbumItem = ({data, style}) => {
  const navigate = useNavigate()

  const handleClickedBanner = (item) => {
    const albumPath = item?.link?.split('.')[0];
    navigate(albumPath, {state: { playAlbum: false }})
  };
  return (
    <div className='flex flex-col gap-6'>
        {data && <h3 className='text-2xl font-bold'>{data.title}</h3>}
        <div className='flex gap-8 px-[10px] items-center cursor-pointer'>
          {data.items?.filter((item, index) => index <=4)?.map(item => (
            <div key={item.encodeId} className='flex-1 flex flex-col gap-2'>
              <img 
              src={item.thumbnail} alt="" 
              className={`${style ? style : ''} rounded-md object-contain hover:animate-scale-up-image`}
              onClick={() => handleClickedBanner(item)}
            />
              <div className='flex flex-col'>
                <span className='font-semibold text-sm'>
                  {item.title?.length > 25 ? `${item.title?.slice(0, 25)}...` : item.title}</span>
                <span className='text-dark-gray text-sm'>{item.releaseDateText}</span>
              </div>
            </div>
          ))}    
        </div>
    </div>
  )
}

export default memo(SingerAlbumItem)