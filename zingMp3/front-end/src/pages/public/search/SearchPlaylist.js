import React from 'react'
import { useSelector } from 'react-redux'
import { SearchPlaylistItem } from '../../../components'

const SearchPlaylist = () => {
  const { searchData } = useSelector(state => state.music)
  return (
    <SearchPlaylistItem data={searchData?.playlists} />
  )
}

export default SearchPlaylist