import './App.css'
import React, { useState, useEffect } from 'react'
import { Button, createTheme, ThemeProvider } from '@mui/material'
import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ChatsPage from './pages/ChatsPage'
import NotFoundPage from './pages/NotFoundPage'
import ProfilePage from './pages/ProfilePage'
import NavBar from './components/NavBar'
import PostsPage from './pages/PostsPage'
import { fetchPosts } from './slices/postsSlice'
import LoginPage from './pages/LoginPage'
import { margin } from '@mui/system'
import RecordsPage from './pages/RecordsPage'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ba3dba',
    },
    secondary: {
      main: '#e7b5e7',
    },
  },
})

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#24a0a4',
    },
    secondary: {
      main: '#c5ddde',
    },
    background: {
      paper: '#000',
    },
    text: {
      primary: '#24a0a4',
    },
  },
})

function App() {
  const [isDark, setIsDark] = useState(false)

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <div className='app'>
        <div className='left'>
          {/* <ChatView chatList={chatList}></ChatView> */}
          <NavBar />
        </div>

        <div className='right'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/list' element={<RecordsPage />} />
            <Route path='chats' element={<ChatsPage />}>
              <Route path=':chatId' element={<ChatsPage />} />
            </Route>
            <Route path='*' element={<NotFoundPage />} />
            <Route path='profile' element={<ProfilePage />} />
            <Route path='posts' element={<PostsPage />} />
          </Routes>
          <Button
            variant='contained'
            onClick={() => {
              setIsDark((pervstate) => !pervstate)
            }}
          >
            Сменить тему
          </Button>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
