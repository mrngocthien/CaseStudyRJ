import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

function TopMusic() {
    const { top100 } = useSelector(state => state.app)
    console.log(top100)
    const navigate = useNavigate();

    const handleClickedBanner = (item) => {
        const albumPath = item?.link?.split('.')[0];
        // console.log(item?.link)
        navigate(albumPath, {state: { playAlbum: false }})
    };
    return (
       <div className='px-[59px] relative flex flex-col gap-4'>
            <h1 className='text-gray-200 font-semibold text-3xl'>Nổi bật</h1>
            <div className='flex gap-5 flex-wrap'>
                {top100?.map(item => {
                    return(
                        <img
                            key={item.encodeId}
                            src={item.thumbnailM}
                            alt='categories'
                            onClick={() => handleClickedBanner(item)}
                            className='w-1/6 rounded-md cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-500'
                        />
                    )
                })}
            </div>
       </div>
    )
}

export default TopMusic