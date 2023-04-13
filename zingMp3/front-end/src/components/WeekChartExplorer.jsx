import React, { memo } from 'react'
import { Link } from 'react-router-dom'

const WeekChartExplorer = ({data}) => {
  return (
    <div className='flex gap-8 items-center w-full mt-10'>
        {data?.map(item => (
            <Link to={item?.link?.split('.')[0]} key={item.link} className='flex-1'>
                <img src={item.cover} alt="banner-cover" className='w-full object-cover rounded-md'/>
            </Link>
        ))}
    </div>
  )
}

export default memo(WeekChartExplorer)