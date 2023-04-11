import React, { memo } from 'react'
import { RotatingLines } from  'react-loader-spinner'

const loadingSong = () => {
    return (
        <RotatingLines
            strokeColor="white"
            strokeWidth="5"
            animationDuration="0.75"
            width="25"
            visible={true}
        />
    )
}

export default memo(loadingSong)