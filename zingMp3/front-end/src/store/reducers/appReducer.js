import actionTypes from "../actions/actionTypes";

const initState = {
    banner: null,
    newRelease: null,
    top100: null,
    weekChart: null,
    trendingArtist: null
}
const appReducer = (state = initState, action) => { 
    switch (action.type) {
        case actionTypes.GET_HOME:
            return {
                ...state,
                banner: action.homeData?.find(item => item.sectionId === 'hSlider')?.items || null,
                newRelease: action.homeData?.find(item => item.sectionType === 'new-release') || null,
                top100: action.homeData?.find(item => item.sectionId === 'h100')?.items || null,
                weekChart: action.homeData?.find(item => item.sectionType === 'weekChart')?.items || null,
                trendingArtist: action.homeData?.find(item => item.sectionId === 'hArtistTheme') || null
            };
        default:
            return state;
    }
}

export default appReducer;