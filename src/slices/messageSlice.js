import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { addMessagesFB } from '../firebase/funcs'

export const robotMessage = createAsyncThunk(
  'message/robotMessage',
  async function (
    { messageList, chatId, setMessageList, user },
    { rejectWithValue, dispatch }
  ) {
    const ROBOT_MESSAGE = 'Сообщение получено'
    if (messageList.length > 0) {
      if (
        messageList[messageList.length - 1].author !== 'Robot' &&
        messageList[messageList.length - 1].user === user &&
        messageList.length % 2 !== 0
      ) {
        setTimeout(() => {
          addMessagesFB({
            text: ROBOT_MESSAGE,
            author: 'Robot',
            id: Number(chatId),
            user: user,
          })
          setMessageList((prevstate) => [
            ...prevstate,
            {
              text: ROBOT_MESSAGE,
              author: 'Robot',
              id: Number(chatId),
              user: user,
            },
          ])
        }, 1500)
      }
    }
  }
)

const messageSlice = createSlice({
  name: 'message',
  initialState: [],
  reducers: {},
  extraReducers: {
    [robotMessage.pending]: () => console.log('pending'),
    [robotMessage.fulfilled]: () => console.log('fullfiiied'),
    [robotMessage.rejected]: () => console.log('rejected'),
  },
})
export const {} = messageSlice.actions
export const messageReducer = messageSlice.reducer
