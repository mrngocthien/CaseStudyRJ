import appReducer from "./appReducer";
import musicReducer from "./musicReducer";
import { combineReducers } from 'redux';
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import topMusicReducer from "./topMusicReducer";

const commonConfig = {
    storage: storage,
    stateReconciler: autoMergeLevel2
}

const musicConfig = {
    ...commonConfig,
    key: 'music',
    whitelist: ["currentSongId"]
}

const rootReducer = combineReducers({
    app: appReducer,
    topMusic: topMusicReducer,
    music: persistReducer(musicConfig, musicReducer)
})

export default rootReducer;