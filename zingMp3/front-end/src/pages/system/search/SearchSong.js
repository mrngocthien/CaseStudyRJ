import React, { useEffect } from 'react'
import { SongList } from '../../../components'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../../store/actions'

const SearchSong = () => {
  const { searchData } = useSelector(state => state.music)
  const dispatch = useDispatch()
  // console.log(searchData)

  useEffect(() => { 
    dispatch(actions.getSearchSongs(searchData?.top?.id))
  }, [searchData])
  return (
    <SongList/>
  )
}

export default SearchSong