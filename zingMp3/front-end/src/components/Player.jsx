import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as apis from "../apis";
import icons from "../ultis/icons";
import { useToggle } from "../hooks";
import * as actions from '../store/actions'
import { toast } from 'react-toastify'
import moment from 'moment'
const {
  RxHeartFilled,
  RxHeart,
  BsThreeDots,
  IoRepeat,
  BsSkipEndFill,
  BsSkipStartFill,
  BsPlayCircle,
  IoShuffle,
  BsPauseCircle,
} = icons;

var intervalId;

const Player = () => {
    const { currentSongId, isPlaying, songs } = useSelector((state) => state.music);
    const [songInfo, setSongInfo] = useState(null);
    const [audio, setAudio] = useState(new Audio());
    const [currentSeconds, setCurrentSeconds] = useState(0)
    const [isShuffle, setIsShuffle] = useToggle();
    const [liked, setLiked] = useToggle();
    const thumbRef = useRef();
    const trackRef = useRef();
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchDetailSong() {
            const [res1, res2] = await Promise.all([
                apis.apiGetDetailSong(currentSongId),
                apis.apiGetSong(currentSongId)
            ]);
            if (res1.data.err === 0) {
                setSongInfo(res1.data.data);
                setCurrentSeconds(0)
            }
            if (res2.data.err === 0) {
                audio.pause();
                setAudio(new Audio(res2?.data?.data[128]));
            } else {
                audio.pause()
                setAudio(new Audio())
                setCurrentSeconds(0)
                thumbRef.current.style.cssText = 'right: 100%'
                dispatch(actions.play(false))
                toast.warning(res2.data.msg)
            }
        }
        fetchDetailSong();
    }, [currentSongId]);

    async function play() {
        await audio.play()
    }

    useEffect(() => {
        intervalId && clearInterval(intervalId)
        audio.pause()
        audio.load()
        if (isPlaying) {
            play();
            const thumbEl = document.getElementById('thumb-progress')
            intervalId = setInterval(() => {
                let percent = Math.round(audio.currentTime * 10000 / songInfo.duration) / 100
                thumbRef.current.style.cssText = `right: ${100 - percent}%`
                setCurrentSeconds(Math.round(audio.currentTime))
            }, 200)
        }
    },[audio])


    const handleTogglePlayMusic = () => { 
        if (isPlaying) {
            audio.pause();
            dispatch(actions.play(false))
        } else {
            audio.play()
            dispatch(actions.play(true))
        } 
    }

    const handleLikeMusic = () => { 
        setLiked();
    }

    const handleShuffle = () => { 
        setIsShuffle();
    }
    const handleNextSong = () => { 
        if (songs) {
            let currentSongIndex;
            songs?.forEach((item, index) => {
                if (item.encodeId === currentSongId) {
                    currentSongIndex = index
                }
            })
            dispatch(actions.setCurrentSongId(songs[currentSongIndex + 1].encodeId))
            dispatch(actions.play(true))
        }    
    }

    const handlePrevSong = () => { 
        if (songs) {
            let currentSongIndex;
            songs?.forEach((item, index) => {
                if (item.encodeId === currentSongId) {
                    currentSongIndex = index
                }
            })
            dispatch(actions.setCurrentSongId(songs[currentSongIndex - 1].encodeId))
            dispatch(actions.play(true))
        }    
    }
    const handleClickProgressBar = (e) => { 
        const trackRect = trackRef.current.getBoundingClientRect();
        const percent = Math.round((e.clientX - trackRect.left) * 10000 / trackRect.width) / 100;
        thumbRef.current.style.cssText = `right: ${100 - percent}%`
        audio.currentTime = percent * songInfo.duration / 100
        setCurrentSeconds(Math.round(percent * songInfo.duration / 100))
    }

    return (
        <div className="bg-main-100 h-full px-5 py-2 flex">
            <div className="w-[30%] flex-auto gap-3 flex items-center">
                <img
                    src={songInfo?.thumbnail}
                    alt="thumbnail"
                    className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex flex-col">
                    <span className="font-semibold texy-sm">{songInfo?.title}</span>
                    <span className="text-xs text-gray-400">{songInfo?.artistsNames}</span>
                </div>
                <div className="flex gap-4 pl-2">
                    <span onClick={handleLikeMusic} className="cursor-pointer">
                        {liked ? <RxHeartFilled size={18}/> : <RxHeart size={18} />}
                    </span>
                    <span className="cursor-pointer">
                        <BsThreeDots size={16} />
                    </span>
                </div>
            </div>
            <div className="w-[40%] flex-auto flex flex-col gap-3 items-center justify-center py-2">
                <div className="flex gap-6 items-center">
                    <span 
                        className={`cursor-pointer ${isShuffle && 'text-[#eb1eff]'}`}
                        title="Bật phát ngẫu nhiên"
                        onClick={handleShuffle}
                    >
                        <IoShuffle size={25}/>
                    </span>
                    <span 
                        className={`${!songs ? 'text-gray-500' : 'cursor-pointer'}`} 
                        onClick={handlePrevSong}>
                        <BsSkipStartFill size={25}/>
                    </span>
                    <span 
                        className="cursor-pointer hover:text-[#eb1eff]" 
                        onClick={handleTogglePlayMusic}>
                        {isPlaying ? <BsPauseCircle size={35} /> : <BsPlayCircle size={35}/>}
                    </span>
                    <span 
                        className={`${!songs ? 'text-gray-500' : 'cursor-pointer'}`} 
                        onClick={handleNextSong}>
                        <BsSkipEndFill size={25}/>
                    </span>
                    <span className="cursor-pointer" title="Bật phát lại tất cả">
                        <IoRepeat size={25}/>
                    </span>
                </div>
                <div className="w-full flex items-center justify-center gap-3 text-xs">
                    <div>{moment.utc(currentSeconds * 1000).format('mm:ss')}</div>
                    <div ref={trackRef} 
                        className="relative h-[3px] w-3/5 rounded-l-full rounded-r-full bg-gray-500 hover:h-[6px] cursor-pointer"
                        onClick={handleClickProgressBar}
                    >
                        <div ref={thumbRef} id='thumb-progress' className='bg-white absolute top-0 left-0 bottom-0 rounded-l-full rounded-r-full'></div>
                    </div>
                    <div>{moment.utc(songInfo?.duration * 1000).format('mm:ss')}</div>
                </div>
            </div>
            <div className="w-[30%] flex-auto">Volume Controller</div>
        </div>
    );
};

export default Player;
