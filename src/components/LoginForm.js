import { React, useState } from 'react'
import { useTheme } from '@emotion/react'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useAuth } from '../hooks/useAuth'
import { createUserThunk, loginThunk } from '../slices/userSlice'

const LoginForm = () => {
  // function LoginForm() {
  const theme = useTheme()

  const isAuth = useAuth().isAuth

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const dispatch = useDispatch()
  return (
    <div>
      <h1 style={{ color: theme.palette.primary.main }}>Авторизация</h1>

      <div>
        <input
          type='text'
          placeholder='email'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />

        <input
          type='password'
          placeholder='password'
          value={pass}
          onChange={(e) => {
            setPass(e.target.value)
          }}
        />

        <div>
          <Button
            variant='contained'
            onClick={() => {
              dispatch(createUserThunk({ email, pass }))
            }}
          >
            Регистрация
          </Button>

          <Button
            variant='contained'
            onClick={() => {
              dispatch(loginThunk({ email, pass }))
            }}
          >
            Войти
          </Button>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
