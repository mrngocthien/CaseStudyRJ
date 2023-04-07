import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as apis from "../../apis";
import moment from "moment";
import { SongList, AudioPlayingBars } from "../../components";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../store/actions'
import icons from "../../ultis/icons";

const {
  BsPlayCircle,
  BsPauseCircle,
} = icons;


const Album = () => {
  const { pid } = useParams();
  const { currentSongId, isPlaying, songs } = useSelector((state) => state.music);
  const [playlistData, setPlaylistData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchDetailPlaylist() {
      const res = await apis.apiGetDetailPlaylist(pid);
      console.log(res);
      if (res.data.err === 0) {
        setPlaylistData(res.data?.data);
        dispatch(actions.setPlaylist(res.data?.data?.song?.items))
      }
    }
    fetchDetailPlaylist();
  }, [pid]);

  const handleTogglePlayMusic = () => {
    dispatch(actions.setCurrentSongId(songs[0].encodeId))
    dispatch(actions.play(true))
  }
  return (
    <div className='flex gap-8 w-full h-[85%] px-[59px] pt-5'>
            <div className=' w-1/3 flex flex-col items-center gap-2'>
                <div className="flex flex-col items-center justify-center relative">
                  <img 
                    src={playlistData?.thumbnailM} 
                    alt="thumbnail" 
                    className={`w-full object-contain ${isPlaying ? 'rounded-full animate-rotate-slowly opacity-50' : 'rounded-md animate-rotate-faster'} shadow-md`} 
                  />
                  <span className={`absolute ${isPlaying ? 'block' : 'hidden'}`}>
                    <AudioPlayingBars/>
                  </span>
                </div>
                <div className='flex flex-col items-center gap-1'>
                    <h3 className='text-[20px] font-bold text-gray-100 text-center'>{playlistData?.title}</h3>
                    <span className='flex gap-2 items-center text-gray-400 text-xs'>
                        <span>Cập nhật:</span>
                        <span>{moment.unix(playlistData?.contentLastUpdate).format("DD/MM/YYYY")}</span>
                    </span>
                    <span className='flex gap-2 items-center text-gray-400 text-xs'>{playlistData?.artistsNames}</span>
                    <span className='flex gap-2 items-center text-gray-400 text-xs'>
                      {`${playlistData?.like > 10000 ? Math.round(playlistData?.like / 10000) : Math.round(playlistData?.like / 1000)}K người yêu thích`}
                    </span>
                </div>
                <button 
                  className="flex items-center gap-2 mt-2 bg-dark-violet hover:bg-light-violet hover:text-white text-gray-100 py-2 px-4 rounded-full"
                  onClick={handleTogglePlayMusic}
                >
                  <BsPlayCircle/>
                  <span>PHÁT ALBUM</span>
                </button>
            </div>
            <Scrollbars style={{ width: '100%', height: '80%' }}>
                <div className='flex-auto'>
                    <span className='text-sm'>
                        <span className='text-gray-400'>Lời tựa </span>
                        <span>{playlistData?.sortDescription}</span>
                    </span>
                    <SongList totalDuration={playlistData?.song?.totalDuration} />
                </div>
            </Scrollbars>
      </div>
  );
};

export default Album;
