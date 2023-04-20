import React from 'react'
import { SongItem } from '..';
import { useSelector } from 'react-redux'

const FavouriteList = () => {
  const { favouriteSongs } = useSelector(state => state.music);

  return (
    <div>
        <div className='flex flex-wrap pt-2 gap-4 '>
            {favouriteSongs?.map(item => (
              <SongItem
                key={item.encodeId}
                data={item}
                size={['w-[50px] h-[50px]']}
                style= {['bg-main-100 hover:bg-dark-violet text-white w-1/3']}
              />
            ))}
          </div>
        <div className='w-full h-[100px]'></div>
    </div>
    
  );
}

export default FavouriteList