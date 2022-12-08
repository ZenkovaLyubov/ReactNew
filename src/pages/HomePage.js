import { Navigate } from 'react-router-dom'
import { useTheme } from '@emotion/react'
import { useAuth } from '../hooks/useAuth'

const HomePage = () => {
  const isAuth = useAuth()
  const theme = useTheme()
  return isAuth.isAuth ? (
    <div>
      <h1 style={{ color: theme.palette.primary.main }}>
        Добро пожаловать, {isAuth.email}
      </h1>
    </div>
  ) : (
    <Navigate to={'/login'} />
  )
}
export default HomePage
