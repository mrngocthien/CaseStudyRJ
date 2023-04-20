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
    recentSongs: [],
    favouriteSongs: []
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
            let songs = [...state.recentSongs]
            if (action.data) {
                if (songs?.some((item) => item.encodeId === action.data.encodeId)) {
                    songs = songs.filter(item => item.encodeId !== action.data.encodeId)
                }
                if (songs.length > 9) {
                    songs = songs.filter((item, index, self) => index !== self.length -1)
                }
                songs = [action.data, ...songs]
            }
            return {
                ...state,
                recentSongs: songs
            }
        case actionTypes.SET_FAVOURITE:
            let favSongs = [...state.favouriteSongs]
            if (action.data) {
                if (favSongs?.some((item) => item.encodeId === action.data.encodeId)) {
                    favSongs = favSongs.filter(item => item.encodeId !== action.data.encodeId)
                }
                if (favSongs.length > 9) {
                    favSongs = favSongs.filter((item, index, self) => index !== self.length -1)
                }
                favSongs = [action.data, ...favSongs]
            }
            return {
                ...state,
                favouriteSongs: favSongs
            }
        case actionTypes.DEL_FAVOURITE_SONG:
            let updateFavSongs = [...state.favouriteSongs]
            if (action.data) {
                if (updateFavSongs?.some((item) => item.encodeId === action.data.encodeId)) {
                    updateFavSongs = updateFavSongs.filter(item => item.encodeId !== action.data.encodeId)
                }
            }
            return {
                ...state,
                favouriteSongs: updateFavSongs
            }
        case actionTypes.CLEAR_RECENT:
            return {
                ...state,
                recentSongs: action.data || null
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