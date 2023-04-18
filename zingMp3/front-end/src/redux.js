import rootReducer from "./store/reducers/rootReducer";
import { legacy_createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { persistStore} from "redux-persist";
// import createSagaMiddleware from 'redux-saga';
// import rootSaga from './store/sagas/rootSaga';

const reduxConfig = () => { 
    const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
    const persistor = persistStore(store)
    return { store, persistor }
}

// const sagaMiddleware = createSagaMiddleware();
// const middleware = [sagaMiddleware];

// sagaMiddleware.run(rootSaga);

// const reduxConfig = () => { 
//     const store = legacy_createStore(rootReducer,applyMiddleware(...middleware));
//     const persistor = persistStore(store);
//     return { store, persistor }
// }

export default reduxConfig;