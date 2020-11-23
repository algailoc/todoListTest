import {createStore, combineReducers, applyMiddleware} from "redux";
import {reducer} from "./reducer";
import createSagaMiddleware from "redux-saga";
// import rootSaga from "./sagas/root";

// const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    reducer: reducer,
});

const store = createStore(reducers);

// sagaMiddleware.run(rootSaga);

export default store;