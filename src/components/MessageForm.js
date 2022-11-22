import React, { useState } from 'react'
import { useTheme } from '@emotion/react'
import InputAutoFocus from './InputAutoFocus'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { AddMessageList } from '../slices/messageSlice'

function MessageForm({ index }) {
  const [text, setText] = useState('')
  const [author, setAuthor] = useState('')

  const dispatch = useDispatch()

  const theme = useTheme()

  const submitForm = (e) => {
    e.preventDefault()
    if (text !== '' && author !== '') {
      dispatch(AddMessageList({ id: index + 1, text: text, author: author }))
      setText('')
      setAuthor('')
    }
  }

  return (
    <div style={{ background: theme.palette.secondary.main }}>
      <form className='alignCenter' onSubmit={submitForm}>
        <InputAutoFocus text={text} setText={setText} />

        <input
          placeholder='Автор'
          id='author'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <Button variant='contained' type='submit'>
          Отправить
        </Button>
      </form>
    </div>
  )
}

export default MessageForm
