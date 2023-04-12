import actionTypes from "../actions/actionTypes";

const initState = {
    favoriteMusic: []
}

  // Reducer function
const favoriteMusicReducer = (state = initState, action) => {
    switch(action.type) {
      case actionTypes.ADD_TO_FAVORITE_MUSIC:
        return {
          ...state,
          favoriteMusic: action.favSongId || null
        }
      case actionTypes.REMOVE_FROM_FAVORITE_MUSIC:
        return {
          ...state,
          favoriteMusic: state.favoriteMusic.filter(songId => songId !== action.favSongId)
        }
      default:
        return state
    }
}

export default favoriteMusicReducer;