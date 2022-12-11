import { fetchPosts } from '../postsSlice'

global.fetch = jest.fn()

describe('postsThunk', () => {
  it('should fetchPosts with resolved response', async () => {
    const mockPosts = [
      {
        userId: 1,
        id: 7,
        title: 'test',
        body: 'testtest',
      },
    ]
    fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockPosts),
    })

    const dispatch = jest.fn()
    const thunk = fetchPosts()

    await thunk(dispatch)

    const { calls } = dispatch.mock
    expect(calls).toHaveLength(2)

    const [start, end] = calls
    expect(start[0].type).toBe('posts/fetchPosts/pending')
    expect(end[0].type).toBe('posts/fetchPosts/fulfilled')
    expect(end[0].payload).toBe(mockPosts)
  })

  it.todo('should fetchPosts with rejected response', async () => {
    fetch.mockResolvedValue({
      ok: false,
    })

    const dispatch = jest.fn()
    const thunk = fetchPosts()

    await thunk(dispatch)

    const { calls } = dispatch.mock
    expect(calls).toHaveLength(2)

    const [start, end] = calls
    expect(start[0].type).toBe('posts/fetchPosts/pending')
    expect(end[0].type).toBe('posts/fetchPosts/rejected')
    expect(end[0].meta.rejectedWithValue).toBe(true)
    expect(end[0].payload).toBe('Server Error!')
  })
})
