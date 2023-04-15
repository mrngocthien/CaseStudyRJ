import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import * as apis from '../../apis'
const Singer = () => {
  const { singer } = useParams();
  const [artisData, setArtisData] = useState(null)

  useEffect(() => { 
    const fetchArtistData = async () => {
      try {
        const res = await apis.apiGetArtist(singer)
        if (res.data.err === 0) {
          setArtisData(res.data.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchArtistData()
  }, [singer])
  return (
    <div className='flex flex-col w-full'>
      <img src={artisData?.cover} alt="banner" className='mt-[-70px]' />
    </div>
  )
}

export default Singer