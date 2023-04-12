import React, { useState } from 'react'
import SongList from '../music/SongList';


const RecentList = () => {
  return (
    <div className='overflow-y-scroll'>
      <SongList />
    </div>
    
  );
}

export default RecentList