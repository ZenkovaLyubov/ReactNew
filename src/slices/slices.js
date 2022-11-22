import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isChecked: false,
}
const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    toggleCheck: (state) => {
      return !state
    },
  },
})
export const { toggleCheck } = profileSlice.actions
export const profileReducer = profileSlice.reducer
