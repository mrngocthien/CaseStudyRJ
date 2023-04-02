import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as apis from "../../apis";
import moment from "moment";
import { SongList } from "../../components";
import { Scrollbars } from "react-custom-scrollbars-2";
import icons from "../../ultis/icons";

const { BsDot } = icons

const Album = () => {
  const { title, pid } = useParams();
  const [playlistData, setPlaylistData] = useState({});
  useEffect(() => {
    async function fetchDetailPlaylist() {
      const res = await apis.apiGetDetailPlaylist(pid);
      console.log(res);
      if (res.status === 200) {
        setPlaylistData(res.data?.data);
      }
    }
    fetchDetailPlaylist();
  }, [pid]);

  return (
    <div className="flex gap-8 w-full px-[59px]">
        <div className="flex flex-col gap-2 w-2/8 items-center">
            <img
            src={playlistData?.thumbnailM}
            alt="thumbnail"
            className="w-full object-contain rounded-lg"
            />
            <h3 className="text-[20px] font-bold">{playlistData.title}</h3>
            <div className="flex flex-col gap-1 items-center text-xs text-gray-400">
            <span className="flex gap-1 items-center">
                <span>Cập nhật: </span>
                <span>
                {moment
                    .unix(playlistData?.contentLastUpdate)
                    .format("DD/MM/YYYY")}
                </span>
            </span>
            <span className="text-center">{playlistData.artistsNames}</span>
            <span>{`${Math.round(
                playlistData?.like / 1000
            )}K người yêu thích`}</span>
            </div>
        </div>
        <div className="flex-auto flex flex-col gap-2 text-sm">
            <span>
                <span className="text-gray-400">Lời tựa </span>
                <span className="text-gray-200">{playlistData.sortDescription}</span>
            </span>
            <Scrollbars style={{ width: "100%", height: "100%" }}>
                <SongList
                    songs={playlistData?.song?.items}
                    totalDuration={playlistData?.song?.totalDuration}
                />
            </Scrollbars>
            <span className="flex items-center">
                <span>{`${playlistData?.song?.items.length} bài hát`}</span>
                <BsDot size={24} />
                <span>{moment.utc(playlistData?.song?.totalDuration * 1000).format('HH:mm:ss')}</span>
            </span>
        </div>
    </div>
  );
};

export default Album;
