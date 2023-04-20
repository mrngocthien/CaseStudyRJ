import React, { memo, useEffect, useState } from 'react'
import { NewReleaseItem } from '..'


const Section = ({data}) => {
    const [isActive, setIsActive] = useState(0)
    const [songType, setSongType] = useState([])

    useEffect(() => { 
        if (isActive === 0) {
            setSongType(data?.items?.vPop)
        } else if (isActive === 1) {
            setSongType(data?.items?.others)
        } else {
            setSongType(data?.items?.all)
        }
     
    }, [isActive, data])
    return (
        <div className='mt-10 flex flex-col gap-5 text-xs'>
            <h3 className='text-[20px] font-bold'>{data?.title}</h3>
            <div className='flex items-center gap-4'>
                <button
                    type='button'
                    className={`${isActive === 0 && 'bg-light-violet text-black font-semibold'} py-1 px-4 rounded-l-full rounded-r-full border`}
                    onClick={() => setIsActive(0)}
                >VIỆT NAM
                </button>
                <button
                    type='button'
                    className={`${isActive === 1 && 'bg-light-violet text-black font-semibold'} py-1 px-4 rounded-l-full rounded-r-full border`}
                    onClick={() => setIsActive(1)}
                >QUỐC TẾ
                </button>
                <button
                    type='button'
                    className={`${isActive === 2 && 'bg-light-violet text-black font-semibold'} py-1 px-4 rounded-l-full rounded-r-full border`}
                    onClick={() => setIsActive(2)}
                >TẤT CẢ
                </button>
            </div>
            <div className='flex flex-wrap'>
                {songType?.map(item => (
                    <NewReleaseItem key={item.encodeId} data={item}/>
                ))}
            </div>
        </div>
    )
}

export default memo(Section) 