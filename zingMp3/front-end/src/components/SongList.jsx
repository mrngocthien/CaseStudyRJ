import React, { memo } from 'react'
import Song from './Song'

const SongList = ({ songs, totalDuration }) => {
    console.log({songs, totalDuration})
    return (
        <div className='w-full flex flex-col text-xs'>
            <div className='flex justify-between items-center p-[10px] font-semibold text-gray-400'>
                <span>
                    <span></span>
                    <span>BÀI HÁT</span>
                </span>
                <span>ALBUM</span>
                <span>THỜI GIAN</span>
            </div>
            <div className='flex flex-col'>
                {songs?.map(item => (
                    <Song key={item.encodeId} songData={item}/>
                ))}
            </div>
        </div>
    )
}

export default memo(SongList)