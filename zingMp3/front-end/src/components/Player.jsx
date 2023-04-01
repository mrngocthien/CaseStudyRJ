import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as apis from "../apis";
import icons from "../ultis/icons";

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
  const { currentSongId } = useSelector((state) => state.music);
  const [songInfo, setSongInfo] = useState(null);
  useEffect(() => {
    async function fetchDetailSong() {
      const res = await apis.getDetailSong(currentSongId);
      if (res.status === 200) {
        setSongInfo(res.data.data);
        console.log(songInfo);
      }
    }
    fetchDetailSong();
  }, [currentSongId]);

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
                <span>
                    <RxHeart size={18} />
                </span>
                <span>
                    <BsThreeDots size={16} />
                </span>
            </div>
        </div>
        <div className="w-[40%] flex-auto flex flex-col gap-2 items-center justify-center py-2">
            <div className="flex gap-6 items-center">
                <span>
                    <IoShuffle size={25}/>
                </span>
                <span>
                    <BsSkipStartFill size={25}/>
                </span>
                <span>
                    <BsPlayCircle size={35}/>
                </span>
                <span>
                    <BsSkipEndFill size={25}/>
                </span>
                <span>
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
