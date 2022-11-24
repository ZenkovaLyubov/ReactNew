import React, { useEffect } from 'react'
import { useTheme } from '@emotion/react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../slices/postsSlice'

const PostsPage = () => {
  const theme = useTheme()
  const { posts, status, err } = useSelector((state) => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  const loadPosts = () => {
    dispatch(fetchPosts())
  }
  return (
    <div>
      <div>
        <h1 style={{ color: theme.palette.primary.main }}>Статьи</h1>

        {status === 'loading' && <h2>Loading...</h2>}
        {err && <h2>An error occured: {err}</h2>}
        <button onClick={loadPosts}>Повторить загрузку</button>

        {posts.map((e) => (
          <div key={e.id}>
            <h5>{e.title}</h5>
            <p>{e.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default PostsPage
