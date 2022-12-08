import { useDispatch, useSelector } from 'react-redux'
import { toggleCheck } from '../../slices/slices'

const Toggler = () => {
  const isChecked = useSelector((state) => state.profile)
  const dispatch = useDispatch()

  return (
    <input
      type='checkbox'
      value={isChecked}
      checked={isChecked}
      onChange={() => {
        dispatch(toggleCheck())
      }}
    />
  )
}

export default Toggler
