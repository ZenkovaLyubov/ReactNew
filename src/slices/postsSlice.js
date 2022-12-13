import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=10'
      )

      if (!response.ok) {
        throw new Error('Server Error!')
      }
      const data = response.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: null,
    err: null,
  },
  redusers: {},
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.status = 'loading'
      state.err = null
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts = [...action.payload]
      console.log(state.posts)
      state.status = 'resolved'
      state.err = null
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = 'rejected'
      state.err = action.payload
    },
  },
})
export const {} = postsSlice.actions
export const postsReducer = postsSlice.reducer
