import React, { memo } from 'react'
import { useNavigate } from "react-router-dom";

const SearchPlaylistItem = ({data}) => {
  const navigate = useNavigate();

  const handleClickedBanner = (item) => {
    const albumPath = item?.link.split('.')[0];
    navigate(albumPath, {state: { playAlbum: false }})
  };

  return (
    <div className='mt-10 w-full flex flex-col gap-4'>
      {data && <h3 className='text-[20px] font-bold'>Playlist/Album</h3>}
      <div className='flex flex-wrap gap-8 px-[10px] items-start justify-start cursor-pointer'>
        {data?.map(item => (
          <div key={item.encodeId} className='flex flex-col w-1/6 gap-4'>
            <img 
              src={item.thumbnailM} alt="thumbnail" 
              className={`rounded-md object-cover hover:animate-scale-up-image`}
              onClick={() => handleClickedBanner(item)}
            />
            <div className='flex flex-col'>
              <span className='text-sm' > {item.title?.length > 20 ? `${item.title?.slice(0, 20)}...` : item.title}</span> 
              <span className='text-xs text-gray-400'>{item.artistsNames}</span>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full h-[100px]'></div>
    </div>
  )
}

export default memo(SearchPlaylistItem)