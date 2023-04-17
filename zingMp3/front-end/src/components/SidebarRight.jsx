import React, { useEffect, useState } from 'react'
import icons from "../ultis/icons";
import { useSelector } from 'react-redux'
import { SongItem, RightSidebarSongItem} from './';
import * as apis from '../apis'
import { Scrollbars } from "react-custom-scrollbars-2";
import { AudioPlayingBars } from "../components";
const {
  RiDeleteBinFill 
} = icons;


const SidebarRight = () => {
  const [isRecent, setIsRecent] = useState(false)
  const { currentSongData, currentAlbumId, isPlaying, recentSongs, currentSongId } = useSelector(state => state.music);
  const [albumData, setAlbumData] = useState(null)

  const fetchDetailPlaylist = async () => {
    try {
      const res = await apis.apiGetDetailPlaylist(currentAlbumId)
      if (res?.data?.err === 0) {
        setAlbumData(res.data.data.song?.items)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => { 
    currentAlbumId && fetchDetailPlaylist()
  }, [])

  useEffect(() => { 
    if (currentAlbumId && isPlaying) fetchDetailPlaylist()
  }, [currentAlbumId, isPlaying])
  
  useEffect(() => { 
    isPlaying && setIsRecent(false)
  }, [isPlaying, currentSongId])

  return (
    <div className='w-full h-full bg-main-200 flex flex-col gap-1 text-xs text-gray-300'>
      {/* header tabs */}
      <div className='h-[70px] flex-none px-2 py-[14px] flex gap-8 justify-between items-center'>
        <div className='w-full flex-auto flex justify-center bg-main-500 rounded-l-full rounded-r-full p-[5px] cursor-pointer'>
          <span 
            className={`${!isRecent && 'bg-gray-600 text-white'} py-[5px] flex-1 flex justify-center rounded-l-full rounded-r-full`}
            onClick={() => setIsRecent(false)}
          >Danh sách phát</span>
          <span 
            className={`${isRecent && 'bg-gray-600 text-white'} py-[5px] flex-1 flex justify-center rounded-l-full rounded-r-full`}
            onClick={() => setIsRecent(true)}  
          >Nghe gần đây</span> 
        </div>
        <span className='p-1 bg-gray-600 hover:bg-dark-violet cursor-pointer rounded-full'><RiDeleteBinFill size={20}/></span>
      </div>
      
      {/* some things for playlist */}
      {!isRecent &&
        <div className='w-full flex flex-col px-2 relative'>
          {isPlaying && <span className='absolute top-4 left-3'><AudioPlayingBars /></span>}
          <SongItem
            key={currentSongData.encodeId}  
            data={currentSongData}
            size={['w-[40px] h-[40px]']}
            style= {['bg-main-100 hover:bg-dark-violet text-white']}
          />
        </div>
      }
      {!isRecent && 
        <div className='flex flex-col gap-6 pt-[5px] px-2 pb-[5px]'>
          <span className='text-[16px] text-dark-gray flex gap-1'>
            <span>Từ album</span>
            <span className='text-light-violet font-bold'>{currentSongData?.album?.title.length > 20 ? `${currentSongData?.album?.title?.slice(0, 20)}...` : currentSongData?.album?.title}</span>
          </span>
          <span className='text-[16px] font-semibold'>Gợi ý cho bạn</span>
        </div>
      }
      {!isRecent &&
        <Scrollbars>
          <div className='flex flex-col pt-2 gap-2'>
            {albumData?.map(item => (
              <RightSidebarSongItem
                key={item.encodeId}
                isHideReleaseDate
                data={item}
                size={['w-[40px] h-[40px]']}
                style= {['bg-main-100 hover:bg-dark-violet text-white py-2']}
              />
            ))}
          </div>
          <div className='w-full h-[100px]'></div>
        </Scrollbars>
      }

      {/* some things for recent list */}
      {isRecent &&
        <Scrollbars>
          <div className='flex flex-col pt-2 gap-2'>
            {recentSongs?.map(item => (
              <RightSidebarSongItem
                key={item.encodeId}
                isHideReleaseDate
                data={item}
                size={['w-[40px] h-[40px]']}
                style= {['bg-main-100 hover:bg-dark-violet text-white']}
              />
            ))}
          </div>
          <div className='w-full h-[100px]'></div>
        </Scrollbars>
      }
    </div>
  )
}

export default SidebarRight;