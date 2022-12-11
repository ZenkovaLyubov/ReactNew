import { postsReducer, fetchPosts } from '../postsSlice'

const initialState = {
  posts: [],
  status: null,
  err: null,
}

describe('postsSlice', () => {
  it('should change status with "fetchPosts.pending" action', () => {
    const state = postsReducer(initialState, fetchPosts.pending())

    expect(state.status).toBe('loading')
    expect(state.err).toBeNull()
  })
  it('should fetch posts with "fetchPosts.fullfilled" action', () => {
    const posts = [
      {
        userId: 1,
        id: 7,
        title: 'test',
        body: 'testtest',
      },
    ]
    const state = postsReducer(initialState, fetchPosts.fulfilled(posts))
    expect(state).toEqual({
      posts,
      status: 'resolved',
      err: null,
    })
  })
  it('should change status  and error with "fetchPosts.rejected"', () => {
    const action = {
      type: fetchPosts.rejected.type,
      payload: 'Server Error!',
    }
    const state = postsReducer(initialState, action)

    expect(state).toEqual({
      posts: [],
      status: 'rejected',
      err: 'Server Error!',
    })
  })
})
