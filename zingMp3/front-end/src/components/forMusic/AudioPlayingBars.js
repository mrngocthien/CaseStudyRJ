import React, { memo } from 'react'
import { Audio } from  'react-loader-spinner'


const AudioPlayingBars = () => {
  return (
    <Audio
      height="30"
      width="30"
      color="#ffff"
      ariaLabel="audio-loading"
      wrapperStyle={{}}
      wrapperClass="wrapper-class"
      visible={true}
    />
  )
}

export default memo(AudioPlayingBars)