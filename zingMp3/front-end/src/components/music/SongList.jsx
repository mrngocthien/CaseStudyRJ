import React, { memo } from 'react'
import Song from './Song'
import icons from '../../ultis/icons'
import moment from 'moment'
import { useSelector } from 'react-redux'

const { BsDot } = icons

//received totalDuration prop from Album page
const SongList = ({ totalDuration, isOnRightSidebar }) => {
    const { songs } = useSelector(state => state.music)
    return (
            
        <div className='w-full flex flex-col text-xs'>
            {!isOnRightSidebar &&
                <div className='flex justify-between items-center p-[10px] font-semibold text-gray-400'>
                    <span>
                        <span>BÀI HÁT</span>
                    </span>
                    <span>ALBUM</span>
                    <span>THỜI GIAN</span>
                </div>
            }
            <div className='flex flex-col'>
                {songs?.map(item => (
                    <Song key={item.encodeId} songData={item}/>
                ))}
            </div>
            {(totalDuration) && 
                <div>
                    <span className="flex items-center">
                        <span>{`${songs?.length} bài hát`}</span>
                        <BsDot size={24} />
                        <span>{moment.utc(totalDuration * 1000).format('HH:mm:ss')}</span>
                    </span>
                </div>
            }
        </div>
    )
}

export default memo(SongList)