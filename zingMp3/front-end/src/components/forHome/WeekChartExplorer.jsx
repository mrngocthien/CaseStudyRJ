import React, { memo } from 'react'
import { Link } from 'react-router-dom'

const WeekChartExplorer = ({data}) => {
  return (
    <div className='flex gap-2 items-center w-full mt-10 '>
        {data?.map(item => (
            <Link to={item?.link?.split('.')[0]} key={item.link} className='flex-1'>
                <img src={item.cover} alt="banner-cover" className='w-[80%] m-auto object-cover rounded-md hover:animate-scale-up-image'/>
            </Link>
        ))}
    </div>
  )
}

export default memo(WeekChartExplorer)