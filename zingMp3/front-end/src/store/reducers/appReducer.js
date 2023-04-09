import actionTypes from "../actions/actionTypes";

const initState = {
    signedIn: false,
    banner: [],
    newRelease: {},
    topPlaylist: []
}
const appReducer = (state = initState, action) => { 
    switch (action.type) {
        case actionTypes.GET_HOME:
            return {
                ...state,
                banner: action.homeData?.find(item => item.sectionType === 'banner')?.items || null,
                newRelease: action.homeData?.find(item => item.sectionType === 'new-release') || {}
            };
        case actionTypes.GET_TOP_MUSIC:
            return {
                ...state,
                topPlaylist: action.topMusicData?.find(item => item.title === 'Nổi bật')?.items || null
            };
        case actionTypes.GET_SIGNED_IN:
            return {
                ...state,
                signedIn: action.flag
            };
        default:
            return state;
    }
}

export default appReducer;