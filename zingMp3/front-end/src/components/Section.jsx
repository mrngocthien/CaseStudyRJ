import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import moment from "moment";

const Section = () => {
    const { friday } = useSelector(state => state.app)
    console.log(friday)
    return (
        <div className='mt-12 px-[59px] flex flex-col gap-5'>
            <h3 className='text-2xl font-bold'>{friday?.title}</h3>
            <div className='flex gap-5 flex-wrap items-center justify-around'>
                {friday?.items?.all?.map(item => (
                    <div 
                        key={item.encodeId} 
                        className='flex flex-col gap-2 text-sm'
                    >
                        <img src={item.thumbnailM} alt="thumbnail" className='object-contain rounded-lg w-[100px]' />
                        <span className='font-semiblod'>{item.title}</span>
                        <span>{item.artistsNames}</span>
                        <span>{moment.unix(item.releaseDate).format("DD/MM/YYYY")}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default memo(Section) 