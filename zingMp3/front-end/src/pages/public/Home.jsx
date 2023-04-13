import React from 'react'
import { Slider, Section, WeekChartExplorer, TrendingArtist } from '../../components';
import { useSelector } from 'react-redux'
import { Scrollbars } from "react-custom-scrollbars-2";

const Home = () => {
  const { newRelease, weekChart, trendingArtist } = useSelector(state => state.app)
  return (
    <div className='px-[59px] h-[90%] overflow-y-auto'>
      <Scrollbars style={{width: "100%", height: "90%"}}>
        <Slider />
        <Section data={newRelease}/>
        <WeekChartExplorer data={weekChart}/>
        <TrendingArtist data={trendingArtist} />
        <div className='w-full h-[100px]'></div>
      </Scrollbars>
        
    </div>
  )
}

export default Home