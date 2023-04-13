import actionTypes from "../actions/actionTypes";

const initState = {
    banner: [],
    newRelease: {},
    top100: []
}
const appReducer = (state = initState, action) => { 
    switch (action.type) {
        case actionTypes.GET_HOME:
            return {
                ...state,
                banner: action.homeData?.find(item => item.sectionId === 'hSlider')?.items || null,
                newRelease: action.homeData?.find(item => item.sectionType === 'new-release') || {},
                top100: action.homeData?.find(item => item.sectionId === 'h100')?.items || null
            };
        default:
            return state;
    }
}

export default appReducer;