import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import moment from "moment";
import { useDispatch } from 'react-redux'
import * as actions from '../store/actions'

const Section = () => {
    const { newRelease } = useSelector(state => state.app)
    const dispatch = useDispatch();
    const handleClickSong = (item) => { 
        dispatch(actions.setCurrentSongId(item.encodeId))
        dispatch(actions.playAlbum(true))
        dispatch(actions.play(true))
        // console.log(item.encodeId)
    }
    
    return (
        <div className='mt-12 px-[59px] flex flex-col gap-5'>
            <h3 className='text-2xl font-bold'>{newRelease?.title}</h3>
            <div className='flex gap-5 flex-wrap items-center justify-around'>
                {newRelease?.items?.all?.map((item, index) => {
                    if (index <= 5) {
                        return (
                            <div 
                                key={item.encodeId} 
                                className='flex flex-col gap-2 text-xs items-center'
                            >
                                <img 
                                    src={item.thumbnailM} 
                                    alt="thumbnail" 
                                    className='object-contain cursor-pointer rounded-lg w-[150px] transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-500 hover:rounded-lg' 
                                    onClick={() => handleClickSong(item)}
                                />
                                <span className='font-semiblod'>
                                    {item.title.length > 20 ? `${item.title.slice(0, 20)}...` : item.title}
                                </span>
                                <span className='text-gray-400'>
                                    {item.artistsNames.length > 22 ? `${item.artistsNames.slice(0, 22)}...` : item.artistsNames}
                                </span>
                                <span className='text-gray-400'>
                                    {moment.unix(item.releaseDate).format("DD/MM/YYYY")}
                                </span>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default memo(Section) 