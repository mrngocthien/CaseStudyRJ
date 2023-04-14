import React from 'react'
import { useSelector } from 'react-redux'
import { handleNumberFollower } from '../../../ultis/funtions'
import SongItem from '../../../components/music/SongItem'

const SearchAll = () => {
  const { searchData } = useSelector(state => state.music)
  console.log(searchData)
  return (
    <div className='w-full flex flex-col'>
      <div className='flex flex-col gap-4'>
        <h3 className='text-2xl font-bold'>Nổi bật</h3>
        <div className='flex gap-8'>
          {searchData?.top && 
            <div className='flex-1 flex gap-4 items-center bg-main-200 rounded-md hover:bg-main-100 cursor-pointer'>
              <img 
                src={searchData?.top?.thumbnail} alt="avatar" 
                className={`w-[84px] h-[84px] p-[8px] object-cover ${searchData?.top?.objectType === 'artist' ? 'rounded-full' : 'rounded-md'}`}
              />
              <div className='flex flex-col justify-center'>
                <span className='text-gray-400 text-sm'>{searchData?.top?.objectType === 'artist' ? 'Nghệ sĩ' : 'Bài hát'}</span>
                <span className='font-semibold'>{searchData?.top?.title || searchData?.top?.name}</span>
                <span className='text-gray-400 text-sm'>{`${handleNumberFollower(searchData?.artists[0]?.totalFollow)} quan tâm`}</span>
              </div>
            </div>}
          {searchData?.songs?.filter((item, index) => [...Array(2).keys()].some(item => item === index))?.map(item => (
            <SongItem 
              key={item.encodeId}
              sid={item.encodeId}
              thumbnail={item.thumbnail}
              title={item.title}
              artistsNames={item.artistsNames}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchAll