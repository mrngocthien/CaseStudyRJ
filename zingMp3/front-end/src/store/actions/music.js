import actionTypes from "./actionTypes";

export const setCurrentSongId = (songId) => ({
    type: actionTypes.SET_CURRENT_SONG_ID,
    songId
});

export const play = (flag) => ({
    type: actionTypes.PLAY,
    flag 
});

export const playAlbum = (flag) => ({
    type: actionTypes.SET_ALBUM,
    flag 
});
