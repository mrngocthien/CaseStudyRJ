import actionTypes from "./actionTypes";
import * as apis from '../../apis'

export const setCurrentSongId = (songId) => ({
    type: actionTypes.SET_CURRENT_SONG_ID,
    songId
});

export const setCurrentSongData = (data) => ({
    type: actionTypes.SET_CURRENT_SONG_DATA,
    data
});

export const play = (flag) => ({
    type: actionTypes.PLAY,
    flag 
});

export const playAlbum = (flag) => ({
    type: actionTypes.SET_ALBUM,
    flag 
});

export const setPlaylist = (songs) => ({
    type: actionTypes.PLAYLIST,
    songs 
});


export const search = (keyword) => async (dispatch) => {
    try {
        const res = await apis.apiSearch(keyword);
        if (res.data.err === 0) {
            dispatch({
                type: actionTypes.SEARCH,
                data: res.data.data,
                keyword: keyword
            })
        } else {
            dispatch({
                type: actionTypes.SEARCH,
                data: null,
                keyword: ''
            })
        }
    } catch (error) {
        console.error(error)
        dispatch({
            type: actionTypes.SEARCH,
            data: null,
            keyword: ''
        })
    }
}

export const getSearchSongs = (artistId) => async (dispatch) => {
    try {
        const res = await apis.apiGetArtistSong(artistId)
        // console.log(res)
        if (res.data.err === 0) {
            dispatch({
                type: actionTypes.PLAYLIST,
                songs: res.data.data.items
            })
        } else {
            dispatch({
                type: actionTypes.PLAYLIST,
                songs: null
            })
        }
    } catch (error) {
        console.error(error)
        dispatch({
            type: actionTypes.PLAYLIST,
            songs: null
        })
    }
}

