import React, { memo } from 'react'
import moment from "moment";
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../store/actions'
import icons from '../ultis/icons'
import { Scrollbars } from "react-custom-scrollbars-2";

const { HiOutlineMusicNote } = icons

const Section = () => {
    const { newRelease } = useSelector(state => state.app)
    console.log(newRelease)
    const dispatch = useDispatch();
    
    const handleClickSong = (item) => { 
        dispatch(actions.setCurrentSongId(item.encodeId))
        dispatch(actions.play(true))
        dispatch(actions.setPlaylist(true))
    }
    
    return (
        <>
            <h3 className='mt-10 text-2xl font-bold'>{newRelease?.title}</h3>
            <Scrollbars style={{ width: '100%', height: '80%', marginTop: "20px" }}>
                <div className='pb-16 flex flex-col gap-5'>
                    <div className='flex justify-between items-center font-semibold text-gray-400'>
                        <span>
                            <span>BÀI HÁT</span>
                        </span>
                        <span className='ml-16'>CA SỸ</span>
                        <span>NGÀY PHÁT HÀNH</span>
                    </div>
                    <div className='flex flex-col'>
                        {newRelease?.items?.all?.map((item, index) => (
                            <div 
                                key={item.encodeId} 
                                className='flex border-t border-gray-500 py-2'
                            >
                                <div className='flex items-center gap-3 flex-1'>
                                    <span><HiOutlineMusicNote /></span>
                                    <img 
                                        src={item.thumbnailM} 
                                        alt="thumbnail" 
                                        className='object-contain cursor-pointer rounded-lg w-14 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-500 hover:rounded-lg' 
                                        onClick={() => handleClickSong(item)}
                                    />
                                    <span className='text-sm cursor-pointer' onClick={() => handleClickSong(item)}>
                                        {item.title.length > 30 ? `${item.title.slice(0, 30)}...` : item.title}
                                    </span>
                                </div>

                                
                                <span className='flex-1 flex text-gray-400 text-sm justify-center items-center'>
                                    {item.artistsNames.length > 30 ? `${item.artistsNames.slice(0, 30)}...` : item.artistsNames}
                                </span>
                                <span className='flex-1 flex text-gray-400 text-sm justify-end items-center'>
                                    {moment.unix(item.releaseDate).format("DD/MM/YYYY")}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </Scrollbars>
        </>
    )
}

export default memo(Section) 