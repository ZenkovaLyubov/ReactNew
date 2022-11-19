import {applyMiddleware, createStore, compose} from "redux";
import thunkMiddleware from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit'
import {profileReducer} from '../slices/slices'
import {chatReducer} from '../slices/chatSlice'
import {messageReducer} from '../slices/messageSlice'

const store = configureStore({
    reducer:{
        profile:profileReducer,
        chat:chatReducer,
        message:messageReducer
    }
})

export default store
