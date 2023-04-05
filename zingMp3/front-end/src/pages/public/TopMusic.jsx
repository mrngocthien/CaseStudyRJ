import React from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

function TopMusic() {
    const { categories } = useSelector((state) => state.topMusic);
    console.log(categories)
    const navigate = useNavigate();

    const handleClickedBanner = (item) => {
        const albumPath = item?.link?.split('.')[0];
        console.log(item?.link)
        navigate(albumPath)
    };
    return (
       <div className='px-[50px] relative flex flex-col gap-4'>
            <h1 className='text-gray-200 font-semibold text-3xl'>Nổi bật</h1>
            <div className='flex gap-5 flex-wrap'>
                {categories?.map(item => {
                    return(
                        <img
                            key={item.encodeId}
                            src={item.thumbnail}
                            alt='categories'
                            onClick={() => handleClickedBanner(item)}
                            className='rounded-md cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-200 hover:rounded-lg'
                        />
                    )
                })}
            </div>
       </div>
    )
}

export default TopMusic