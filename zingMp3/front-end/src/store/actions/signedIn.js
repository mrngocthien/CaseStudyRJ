import actionTypes from "./actionTypes";
// import * as apis from '../../apis'

export const getSignIn = (flag) => ({
    type: actionTypes.GET_SIGNED_IN,
    flag 
});