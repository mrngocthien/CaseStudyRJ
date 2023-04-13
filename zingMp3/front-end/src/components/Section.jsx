import React, { memo, useEffect, useState } from 'react'
import moment from "moment";
import { useDispatch } from 'react-redux'
import * as actions from '../store/actions'
import icons from '../ultis/icons'
import { SongItem } from './'

const { HiOutlineMusicNote } = icons

const Section = ({data}) => {
    const dispatch = useDispatch();
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
    console.log(data)
    return (
        <div className='mt-12 flex flex-col gap-5 text-xs'>
            <div className='flex items-center justify-between'>
                <h3 className='text-[20px] font-bold'>{data?.title}</h3>
                <span className='text-xs'>TẤT CẢ</span>
            </div>
            <div className='flex items-center gap-4'>
                <button
                    type='button'
                    className={`${isActive === 0 && 'bg-light-violet'} py-1 px-4 rounded-l-full rounded-r-full border`}
                    onClick={() => setIsActive(0)}
                >VIỆT NAM
                </button>
                <button
                    type='button'
                    className={`${isActive === 1 && 'bg-light-violet'} py-1 px-4 rounded-l-full rounded-r-full border`}
                    onClick={() => setIsActive(1)}
                >QUỐC TẾ
                </button>
                <button
                    type='button'
                    className={`${isActive === 2 && 'bg-light-violet'} py-1 px-4 rounded-l-full rounded-r-full border`}
                    onClick={() => setIsActive(2)}
                >TẤT CẢ
                </button>
            </div>
            <div className='flex flex-wrap w-full gap-1'>
                {songType.map(item => (
                    <SongItem 
                        key={item.encodeId} 
                        thumbnail={item.thumbnail}  
                        title={item.title} 
                        artistsNames={item.artistsNames} 
                        releaseDate={item.releaseDate}
                    />
                ))}
            </div>
        </div>
    )
}

export default memo(Section) 