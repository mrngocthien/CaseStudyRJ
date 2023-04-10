import React from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

function TopMusic() {
    const { topPlaylist } = useSelector(state => state.app)
    console.log(topPlaylist)
    const navigate = useNavigate();

    const handleClickedBanner = (item) => {
        const playlistPath = item?.link?.split('.')[0];
        console.log(item?.link)
        navigate(playlistPath)
    };
    return (
       <div className='px-[59px] relative flex flex-col gap-4'>
            <h1 className='text-gray-200 font-semibold text-3xl'>Nổi bật</h1>
            <div className='flex gap-5 flex-wrap'>
                {topPlaylist?.map(item => {
                    return(
                        <img
                            key={item.encodeId}
                            src={item.thumbnailM}
                            alt='categories'
                            onClick={() => handleClickedBanner(item)}
                            className='w-[200px] rounded-md cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-500'
                        />
                    )
                })}
            </div>
       </div>
    )
}

export default TopMusic