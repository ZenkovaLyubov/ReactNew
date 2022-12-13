import { React } from 'react'

import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import LoginForm from '../components/LoginForm'

const LoginPage = () => {
  const isAuth = useAuth().isAuth

  return !isAuth ? <LoginForm /> : <Navigate to={'/list'} />
}
export default LoginPage
