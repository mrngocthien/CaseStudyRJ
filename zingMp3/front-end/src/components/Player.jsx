import React, { useEffect, useState, useRef } from "react";
import { AudioPlayingBars, LoadingSong } from "../components";
import { useSelector, useDispatch } from "react-redux";
import * as apis from "../apis";
import icons from "../ultis/icons";
import * as actions from '../store/actions'
import { toast } from 'react-toastify'
import moment from 'moment'
const {
  RxHeartFilled, RxHeart, BsThreeDots, TbRepeat,
  TbRepeatOnce, BsSkipEndFill, BsSkipStartFill,
  BsPlayFill, IoShuffle, BsPauseFill, BsMusicNoteList,
  IoVolumeHigh, IoVolumeMedium, IoVolumeLow, IoVolumeMute 
} = icons;

var intervalId;

const Player = ({ isShowRightSidebar, setIsShowRightSidebar }) => {
    const { currentSongId, isPlaying, songs } = useSelector((state) => state.music);

    const [songInfo, setSongInfo] = useState(null);
    const [audio, setAudio] = useState(new Audio());
    const [currentSeconds, setCurrentSeconds] = useState(0)
    const [isShuffle, setIsShuffle] = useState(false)
    const [repeatMode, setRepeatMode] = useState(0)
    const [volumeValue, setVolumeValue] = useState(100)
    const [liked, setLiked] = useState(false)
    
    const [isLoadingSong, setIsLoadingSong] = useState(false)
    const thumbRef = useRef();
    const trackRef = useRef();
    const dispatch = useDispatch();

    async function play() {
        await audio.play()
    }

    //for fetch audio source
    useEffect(() => {
        async function fetchDetailSong() {
            setIsLoadingSong(true)
            const [res1, res2] = await Promise.all([
                apis.apiGetDetailSong(currentSongId),
                apis.apiGetSong(currentSongId)
            ]);
            setIsLoadingSong(false)
            if (res1.data.err === 0) {
                setSongInfo(res1.data.data);
                // console.log(res1.data.data)
                dispatch(actions.setCurrentSongData(res1.data.data))
                setCurrentSeconds(0)
            }
            if (res2.data.err === 0) {
                audio.pause();
                // console.log(res2?.data?.data)
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

    //for volume controller
    useEffect(() => { 
        audio.volume = volumeValue / 100;
    }, [volumeValue])
    
    //for progress bar
    useEffect(() => {
        intervalId && clearInterval(intervalId)
        audio.pause()
        audio.load()
        if (isPlaying) {
            play()
            intervalId = setInterval(() => {
                let percent = Math.round(audio.currentTime * 10000 / songInfo.duration) / 100
                thumbRef.current.style.cssText = `right: ${100 - percent}%`
                setCurrentSeconds(Math.round(audio.currentTime))
            }, 200)
        }
    },[audio, isPlaying])

    //for shuffle and repeat button
    useEffect(() => {
        const handleEnd = () => { 
            console.log(`shuffle: ${isShuffle} - repeat: ${repeatMode}`)
            if (isShuffle) {
                handleShuffle();
            } else if (repeatMode) {
                repeatMode === 1 ? handleRepeatOne() : handleNextSong()
            } else {
                audio.pause()
                dispatch(actions.play(false))
            }
        }
        audio.addEventListener('ended', handleEnd)
        return () => {
            audio.removeEventListener('ended', handleEnd)
        }
    }, [audio, isShuffle, repeatMode])

    const handleLiked = () => { 
        setLiked(prev => !prev);
        
    }
    const handleShowRightSiderbar = () => { 
        setIsShowRightSidebar(prev => !prev)
    }
    const handleMuted = () => { 
        setVolumeValue(prev => +prev === 0 ? 70 : 0)
    }
    const handleChangeVolume = (e) => { 
        setVolumeValue(e.target.value)
    }
    const handleTogglePlayMusic = () => { 
        if (isPlaying) {
            audio.pause();
            dispatch(actions.play(false))
        } else {
            audio.play()
            dispatch(actions.play(true))
        } 
    }
    const handleRepeatOne = () => {
        audio.play();
    }
    const handleShuffle = () => { 
        const randomIndex = Math.round(Math.random() * songs?.length) - 1;
        dispatch(actions.setCurrentSongId(songs[randomIndex].encodeId))
        dispatch(actions.play(true))
    }
    const handleNextSong = () => { 
        if (songs) {
            let currentSongIndex;
            songs?.forEach((item, index) => {
                if (item.encodeId === currentSongId) {
                    currentSongIndex = index
                }
            })
            if (currentSongIndex === songs.length -1) {
                dispatch(actions.setCurrentSongId(songs[0].encodeId))

            } else {
                dispatch(actions.setCurrentSongId(songs[currentSongIndex + 1].encodeId))
            }
            
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
        <div className="bg-main-100 h-full px-5 flex">
            <div className="w-[30%] flex-auto gap-3 flex items-center">
                <div className="relative">
                    <img
                        src={songInfo?.thumbnail}
                        alt="thumbnail"
                        className="w-16 h-16 object-cover rounded-md"
                    />
                    <span className={`absolute flex items-center justify-center top-0 left-0 right-0 bottom-0 ${isPlaying ? 'block' : 'hidden'}`}>
                        <AudioPlayingBars/>
                    </span>
                </div>
                <div className="flex flex-col">
                    <span className="font-semibold texy-sm">{songInfo?.title?.length > 25 ? `${songInfo?.title?.slice(0, 25)}...`: songInfo?.title}</span>
                    <span className="text-xs text-gray-400">{songInfo?.artistsNames}</span>
                </div>
                <div className="flex gap-4 pl-2">
                    <span 
                        onClick={handleLiked} 
                        className="cursor-pointer">
                        {liked ? <RxHeartFilled size={18}/> : <RxHeart size={18} />}
                    </span>
                    <span className="cursor-pointer">
                        <BsThreeDots size={16} />
                    </span>
                </div>
            </div>
            <div className="w-[40%] flex-auto flex flex-col gap-2 items-center justify-center py-2">
                <div className="flex gap-6 items-center">
                    <span 
                        className={`cursor-pointer ${isShuffle && 'text-light-violet'}`}
                        title="Bật phát ngẫu nhiên"
                        onClick={() => setIsShuffle(prev => !prev)}
                    >
                        <IoShuffle size={25}/>
                    </span>
                    <span 
                        className={`${!songs ? 'text-gray-500' : 'cursor-pointer'}`} 
                        onClick={handlePrevSong}>
                        <BsSkipStartFill size={25}/>
                    </span>
                    <span 
                        className="cursor-pointer p-2 border border-white rounded-full hover:text-light-violet hover:border-light-violet" 
                        onClick={handleTogglePlayMusic}> 
                        {isLoadingSong ? <LoadingSong /> : (isPlaying ? <BsPauseFill size={25} /> : <BsPlayFill size={25}/>)}
                    </span>
                    <span 
                        className={`${!songs ? 'text-gray-500' : 'cursor-pointer'}`} 
                        onClick={handleNextSong}>
                        <BsSkipEndFill size={25}/>
                    </span>
                    <span 
                        className={`cursor-pointer ${repeatMode && 'text-light-violet'}`} 
                        title="Bật phát lại tất cả"
                        onClick={() => setRepeatMode(prev => prev === 2 ? 0 : (prev + 1))}
                    >
                        {repeatMode === 1 ? <TbRepeatOnce size={25} /> : <TbRepeat size={25}/>}
                    </span>
                </div>
                <div className="w-full flex items-center justify-center gap-3 text-xs">
                    <div>{moment.utc(currentSeconds * 1000).format('mm:ss')}</div>
                    <div ref={trackRef} 
                        className="relative h-[3px] w-3/5 rounded-l-full rounded-r-full bg-gray-500 hover:h-[6px] cursor-pointer"
                        onClick={handleClickProgressBar}
                    >
                        <div ref={thumbRef} id='thumb-progress' className='bg-light-violet absolute top-0 left-0 bottom-0 rounded-l-full rounded-r-full'></div>
                    </div>
                    <div>{moment.utc(songInfo?.duration * 1000).format('mm:ss')}</div>
                </div>
            </div>
            <div className="w-[30%] flex-auto flex gap-2 items-center justify-end">
                <span 
                    className="cursor-pointer"
                    onClick={handleMuted}
                >
                    {+volumeValue >= 70 ? <IoVolumeHigh /> : +volumeValue >= 40 ? <IoVolumeMedium /> : +volumeValue === 0 ? <IoVolumeMute /> : <IoVolumeLow />}
                </span>
                <input 
                    type="range" name="volume" id="volume-control" step={1} min={0} max={100}
                    className="h-1 cursor-pointer"
                    value={volumeValue}
                    onChange={handleChangeVolume}
                />
                <span 
                    className={`${isShowRightSidebar ? "bg-light-violet" : "bg-gray-500"} p-1 rounded-md cursor-pointer hover:bg-light-violet`}
                    title="Danh sách phát"
                    onClick={handleShowRightSiderbar}
                >
                    <BsMusicNoteList size={20}/></span>
            </div>
        </div>
    );
};

export default Player;
