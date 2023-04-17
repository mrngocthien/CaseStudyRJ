import actionTypes from "../actions/actionTypes";

const initState = {
    currentSongId: null,
    currentSongData: null,
    isPlaying: false,
    atAlbum: false,
    songs: null,
    searchData: null, 
    keyword: '',
    artistData: null,
    currentAlbumId: null,
    recentSongs: []
}

const musicReducer = (state = initState, action) => { 
    switch (action.type) {
        case actionTypes.SET_CURRENT_SONG_ID:
            return {
                ...state,
                currentSongId: action.songId || null
            };
        case actionTypes.PLAY:
            return {
                ...state,
                isPlaying: action.flag
            }
        case actionTypes.SET_ALBUM:
            return {
                ...state,
                atAlbum: action.flag
            }
        case actionTypes.PLAYLIST:
            return {
                ...state,
                songs: action.songs || null
            }
        case actionTypes.SET_CURRENT_SONG_DATA:
            return {
                ...state,
                currentSongData: action.data || null
            }
        case actionTypes.SET_CURRENT_ALBUM_ID:
            return {
                ...state,
                currentAlbumId: action.albumId || null
            }
        case actionTypes.SET_RECENT:
            let songs = state.recentSongs
            if (action.data) {
                if (state.recentSongs.some(item => item.endcodeId === action.data.endcodeId)) {
                    songs = songs.filter((item) => item.endcodeId !== action.data.endcodeId)
                }

                if (songs.length > 4) {
                    songs = songs.filter((item, index, self) => index !== self.length -1)
                }
                songs = [action.data, ...state.recentSongs]
            }
            // 
            return {
                ...state,
                recentSongs: songs
            }
            
        case actionTypes.SEARCH:
            return {
                ...state,
                searchData: action.data || null,
                keyword: action.keyword || ''
            }
        default:
            return state;
    }
}

export default musicReducer;