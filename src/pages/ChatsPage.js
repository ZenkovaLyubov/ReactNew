import React, { useEffect, memo } from 'react'
import ChatView from '../components/ChatView'
import { useTheme } from '@emotion/react'
import MessageForm from '../components/MessageForm'
import MessageView from '../components/MessageView'
import { useParams } from 'react-router-dom'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { robotMessage } from '../slices/messageSlice'
import { getAllChats, addChatFB, getAllMessages } from '../firebase/funcs'
import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { Navigate } from 'react-router-dom'

const ChatsPage = () => {
  const dispatch = useDispatch()
  const isAuth = useAuth()
  const user = isAuth.email

  const [chatList, setChatList] = useState([])
  const [messageList, setMessageList] = useState([])

  const getPostsHandler = async () => {
    let data = await getAllChats()
    setChatList(data)
  }

  useEffect(() => {
    getPostsHandler()
    console.log('test')
  }, [])

  useEffect(() => {
    getPostsHandlerMess()
  }, [])
  const getPostsHandlerMess = async () => {
    let data = await getAllMessages()
    setMessageList(data)
  }

  let { chatId = 1 } = useParams()

  const theme = useTheme()

  useEffect(() => {
    dispatch(robotMessage({ messageList, chatId, setMessageList, user }))
  }, [messageList])

  const AddChat = () => {
    let maxId = 0
    if (chatList.length !== 0) {
      maxId = Math.max(...chatList.map((x) => x.id))
    }
    const newId = maxId + 1
    const newObj = { id: newId, user: user }

    setChatList((prevstate) => [...prevstate, newObj])
    addChatFB(newObj)
  }

  const masIndex = messageList.filter(
    (x) => x.id === Number(chatId) && x.user === user
  )

  return isAuth.isAuth ? (
    <div className='chatPage'>
      <div className='chatPage_left'>
        <h1 style={{ color: theme.palette.primary.main }}>Выберите чат</h1>
        <Button variant='contained' onClick={AddChat}>
          + чат
        </Button>

        <ChatView
          chatId={Number(chatId)}
          chatList={chatList}
          user={isAuth.email}
        />
      </div>
      <div className='chatPage_right'>
        <h2 style={{ color: theme.palette.primary.main }}>Сообщения</h2>

        {chatList?.length ? (
          <MessageForm
            index={Number(chatId - 1)}
            setMessageList={setMessageList}
            user={user}
          ></MessageForm>
        ) : null}
        {masIndex?.length
          ? masIndex.map((e, i) =>
              e.user === user ? (
                <MessageView
                  author={e.author}
                  text={e.text}
                  key={i}
                ></MessageView>
              ) : null
            )
          : null}
      </div>
    </div>
  ) : (
    <Navigate to={'/login'} />
  )
}
export default ChatsPage
