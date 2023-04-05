import actionTypes from "../actions/actionTypes";

const initState = {
    categories: []
}
const topMusicReducer = (state = initState, action) => { 
    switch (action.type) {
        case actionTypes.GET_TOP_MUSIC:
            return {
                ...state,
                categories: action.topMusicData?.find(item => item.title === 'Nổi bật')?.items || null
            };
        default:
            return state;
    }
}

export default topMusicReducer;