import {applyMiddleware, createStore, compose} from "redux";
import { toggleReducer } from "./profile/reducer";
import thunkMiddleware from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(toggleReducer,composeEnhancers(applyMiddleware(thunkMiddleware)))
window._store_ = store;

export default store;
