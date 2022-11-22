import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'

export const robotMessage = createAsyncThunk(
  'message/robotMessage',
  async function ({ messageList, chatId }, { rejectWithValue, dispatch }) {
    const ROBOT_MESSAGE = 'Сообщение получено'
    if (messageList.length > 0) {
      if (messageList[messageList.length - 1].author !== 'Robot') {
        setTimeout(() => {
          dispatch(
            AddMessageList({
              text: ROBOT_MESSAGE,
              author: 'Robot',
              id: Number(chatId),
            })
          )
        }, 1500)
      }
    }
  }
)

const messageSlice = createSlice({
  name: 'message',
  initialState: [],
  reducers: {
    AddMessageList: (state, action) => {
      return [...state, action.payload]
    },
    DelMessageList: (state, action) => {
      return [...state.filter((x) => x.id !== Number(action.payload))]
    },
  },
  extraReducers: {
    [robotMessage.pending]: () => console.log('pending'),
    [robotMessage.fulfilled]: () => console.log('fullfiiied'),
    [robotMessage.rejected]: () => console.log('rejected'),
  },
})
export const { AddMessageList, DelMessageList } = messageSlice.actions
export const messageReducer = messageSlice.reducer
