import { applyMiddleware, createStore, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit'
import { profileReducer } from '../slices/slices'
import { chatReducer } from '../slices/chatSlice'
import { messageReducer } from '../slices/messageSlice'
import { postsReducer } from '../slices/postsSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/es/stateReconciler/hardSet'
import { userReducer } from '../slices/userSlice'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  stateReconciler: hardSet,
}

const rootReducer = combineReducers({
  profile: profileReducer,
  chat: chatReducer,
  message: messageReducer,
  posts: postsReducer,
  user: userReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export default store
