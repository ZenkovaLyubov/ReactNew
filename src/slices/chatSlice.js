import { createSlice } from '@reduxjs/toolkit'

const chatSlice = createSlice({
  name: 'chat',
  initialState: [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ],
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
