import React from 'react'
import { SongItem, SongList } from '../../components';
import { useSelector } from 'react-redux'

const RecentList = () => {
  const { currentSongData } = useSelector(state => state.music);
  return (
    <div>
      <SongItem 
        thumbnail={currentSongData.thumbnail}
        title={currentSongData.title}
        artistsNames={currentSongData.artistsNames}
        releaseDate={currentSongData.releaseDate}
        sid={currentSongData.encodeId}/>
      <SongList isHide />
    </div>
    
  );
}

export default RecentList