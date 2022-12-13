import { Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useDispatch } from 'react-redux'
import { removeUser } from '../slices/userSlice'
import { addPost, getAllPosts } from '../firebase/funcs'
import { useTheme } from '@emotion/react'
import { Button } from '@mui/material'
import RecordView from '../components/RecordView'
import RecordForm from '../components/RecordForm'

const RecordsPage = () => {
  const theme = useTheme()

  const dispatch = useDispatch()
  const isAuth = useAuth()

  const [data, setData] = useState([])
  const [loading, setLoading] = useState()

  const [formData, setFormData] = useState({
    body: '',
    user: '',
  })

  const getPostsHandler = async () => {
    setLoading(true)
    let data = await getAllPosts()
    setLoading(false)
    setData(data)
  }

  useEffect(() => {
    getPostsHandler()
  }, [])

  return isAuth.isAuth ? (
    <div>
      <h1 style={{ color: theme.palette.primary.main }}>Данные пользователя</h1>
      <div>
        <h2>Привет, {isAuth.email}!</h2>
      </div>

      <Button
        variant='contained'
        onClick={() => {
          dispatch(removeUser())
        }}
      >
        Выйти из аккаунта
      </Button>

      <div style={{ minHeigth: '50vh' }}>
        <RecordForm formData={formData} setFormData={setFormData} />

        <Button
          variant='contained'
          onClick={() => {
            addPost(formData)
            getPostsHandler()
          }}
        >
          Добавить запись
        </Button>

        {loading ? (
          <div>Идет загрузка</div>
        ) : (
          <RecordView data={data} user={isAuth.email} />
        )}
      </div>
    </div>
  ) : (
    <Navigate to={'/login'} />
  )
}
export default RecordsPage
