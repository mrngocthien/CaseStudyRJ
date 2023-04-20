import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import * as apis from '../../apis'
import PageLoading from '../../components/forLoading/PageLoading';
import { Song, SingerAlbumItem } from '../../components';
import { Scrollbars } from "react-custom-scrollbars-2";

const Singer = () => {
  const { singer } = useParams();
  const [artisData, setArtisData] = useState(null)
  const [isHover, setIsHover] = useState(false)

  useEffect(() => { 
    const fetchArtistData = async () => {
      try {
        const res = await apis.apiGetArtist(singer)
        if (res.data.err === 0) {
          setArtisData(res.data.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchArtistData()
  }, [singer])

  if (!artisData) return <PageLoading />;
  console.log(artisData)

  return (
    <div className='flex flex-col w-full gap-4 h-[90%] overflow-y-hidden'>
      <Scrollbars>
        <div className='relative'>
          <img src={artisData?.cover} alt="banner" className='h-[400px] object-contain'/>
          <div className='absolute h-[400px] top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-gray-500 to-transparent'>
            <div className='absolute bottom-0 pb-6 px-[59px] flex flex-col gap-3'>
              <h1 className='text-5xl font-bold'>{artisData?.name}</h1>
              <span className='text-light-gray'>{`${Number(artisData?.totalFollow.toFixed(1)).toLocaleString()} người quan tâm`}</span>
            </div>
        </div>
        </div>
        <div className='pt-4 px-[59px]'>
          <div className='flex flex-col w-full gap-4'>
            {artisData && <h3 className='text-2xl font-bold'>{artisData?.sections[0]?.title}</h3>}
            <div className='flex justify-between flex-wrap w-full'>
              {artisData?.sections[0]?.items?.filter((item, index) => index <=15)?.map(item => (
                <div key={item.encodeId} className='flex-auto w-[45%] '>
                  <Song songData={item} isHideAlbum />
                </div>
              ))}    
            </div>
          </div>
        </div>
        <div className='pt-4 px-[59px]'>
          <SingerAlbumItem data={artisData?.sections[1]}/>
        </div>
        <div className='pt-4 px-[59px]'>
          <SingerAlbumItem data={artisData?.sections[2]}/>
        </div>
        {/* <div className='pt-4 px-[59px]'>
          <SingerAlbumItem data={artisData?.sections[5]} style="w-[80%]"/>
        </div> */}
        <div className='pt-4 px-[59px] flex flex-col gap-4'>
          {artisData && <h1 className='text-2xl font-bold'>{`Về ${artisData?.name}`}</h1>}
          <div className='flex gap-4'>
            <div className='w-[35%] pr-[20px]'>
              <img src={artisData?.thumbnailM} alt="avatar" className='rounded-md object-cover w-full'/>
            </div>
            <div className='w-[65%] px-[20px] flex flex-col justify-around'>
              <span className='text-dark-gray'>{artisData?.biography?.length > 278 ? `${artisData?.biography?.slice(0, 278)}...` : artisData?.biography}</span>
              <div className='flex flex-col gap-1'>
                <span className='text-2xl font-bold'>{Number(artisData?.totalFollow.toFixed(1)).toLocaleString()}</span>
                <span className='text-dark-gray'>người quan tâm</span>
              </div>
            </div>
          </div>
          
          
        </div>
        <div className='w-full h-[100px]'></div>
      </Scrollbars>
    </div>
  )
}

export default Singer