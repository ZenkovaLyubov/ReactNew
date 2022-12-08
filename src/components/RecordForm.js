import { useAuth } from '../hooks/useAuth'

const RecordForm = ({ formData, setFormData }) => {
  const user = useAuth().email

  return (
    <div>
      <input
        placeholder='Добавьте запись'
        value={formData.body}
        onChange={(e) => {
          setFormData({ user, body: e.target.value })
        }}
      />
    </div>
  )
}
export default RecordForm
