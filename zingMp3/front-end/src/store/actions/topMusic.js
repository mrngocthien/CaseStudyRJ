import actionTypes from "./actionTypes";
import * as apis from '../../apis';

export const getTopMusic = () => async (dispatch) => {
    try {
        const res = await apis.getTopMusicData();
        console.log(res.data.data[0])
        if (res.data.err === 0) {
            dispatch({
                type: actionTypes.GET_TOP_MUSIC,
                topMusicData: res.data.data
            })
        } else {
            dispatch({
                type: actionTypes.GET_TOP_MUSIC,
                topMusicData: null
            })
        }
    } catch (error) {
        console.error(error)
        dispatch({
            type: actionTypes.GET_TOP_MUSIC,
            topMusicData: null
        })
    }
}