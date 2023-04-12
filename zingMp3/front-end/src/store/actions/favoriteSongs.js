import actionTypes from "./actionTypes";

export const addToFavoriteMusic = (favSongId) => ({
    type: actionTypes.ADD_TO_FAVORITE_MUSIC ,
    favSongId
})
  
export const removeFromFavoriteMusic = (favSongId) => ({
    type: actionTypes.REMOVE_FROM_FAVORITE_MUSIC,
    favSongId
})