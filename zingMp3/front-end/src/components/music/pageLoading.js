import React, { memo } from 'react'
import { ProgressBar } from  'react-loader-spinner'


const PageLoading = () => {
  return (
    <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor = '#F4442E'
        barColor = '#51E5FF'
    />
  )
}

export default memo(PageLoading)