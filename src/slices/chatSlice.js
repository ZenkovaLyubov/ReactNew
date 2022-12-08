import { createSlice } from '@reduxjs/toolkit'

const chatSlice = createSlice({
  name: 'chat',
  initialState: [],
  reducers: {
    addChatList: (state, action) => {
      return [...state, action.payload]
    },
    delChatList: (state, action) => {
      return [...state.filter((x) => x.id !== Number(action.payload))]
    },
  },
})
export const { addChatList, delChatList } = chatSlice.actions
export const chatReducer = chatSlice.reducer
