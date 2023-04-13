import React from 'react'
import { Slider, Section } from '../../components';
import { useSelector } from 'react-redux'


const Home = () => {
  const { newRelease } = useSelector(state => state.app)
  return (
    <div className='px-[59px] h-[90%] overflow-y-hidden'>
        <Slider />
        <Section data={newRelease}/>
    </div>
  )
}

export default Home