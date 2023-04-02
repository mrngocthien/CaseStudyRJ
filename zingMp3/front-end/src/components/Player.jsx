import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as apis from "../apis";
import icons from "../ultis/icons";
import { useToggle } from "../hooks";

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

const Player = () => {
    const audioElement = new Audio('https://vnso-zn-10-tf-mp3-s1-zmp3.zmdcdn.me/c5d4fb1a7a5a9304ca4b/1403051332224350698?authen=exp=1680571642~acl=/c5d4fb1a7a5a9304ca4b/*~hmac=028fb84232c5c167f33df4030fc96b7b&fs=MTY4MDM5ODg0MjU1M3x3ZWJWNnwwfDExNy4yLjE3MS4xNzA')
    const { currentSongId, isPlaying } = useSelector((state) => state.music);
    const [songInfo, setSongInfo] = useState(null);
    const [source, setSource] = useState(null)
    const [isPlayingMusic, setIsPlayingMusic] = useToggle();
    const [liked, setLiked] = useToggle();

    useEffect(() => {
        async function fetchDetailSong() {
            const [res1, res2] = await Promise.all([
                apis.apiGetDetailSong(currentSongId),
                apis.apiGetSong(currentSongId)
            ]);
            if (res1.status === 200) {
                setSongInfo(res1.data.data);
            }
            if (res2.status === 200) {
                setSource(res2.data.data['128']);
            }
        }
        fetchDetailSong();
    }, [currentSongId]);

    // useEffect(() => { 
    // },[currentSongId])

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
                    <span onClick={setLiked} className="cursor-pointer">
                        {liked ? <RxHeartFilled size={18}/> : <RxHeart size={18} />}
                    </span>
                    <span className="cursor-pointer">
                        <BsThreeDots size={16} />
                    </span>
                </div>
            </div>
            <div className="w-[40%] flex-auto flex flex-col gap-2 items-center justify-center py-2">
                <div className="flex gap-6 items-center">
                    <span className="cursor-pointer" title="Bật phátt ngẫu nhiên">
                        <IoShuffle size={25}/>
                    </span>
                    <span className="cursor-pointer">
                        <BsSkipStartFill size={25}/>
                    </span>
                    <span className="cursor-pointer hover:text-[#eb1eff]" onClick={setIsPlayingMusic}>
                        {isPlayingMusic ? <BsPauseCircle size={35} /> : <BsPlayCircle size={35}/>}
                    </span>
                    <span className="cursor-pointer">
                        <BsSkipEndFill size={25}/>
                    </span>
                    <span className="cursor-pointer" title="Bật phát lại tất cả">
                        <IoRepeat size={25}/>
                    </span>
                </div>
                <div>progress bar</div>
            </div>
            <div className="w-[30%] flex-auto">Volume Controller</div>
        </div>
    );
};

export default Player;
