import profileSlice, { profileReducer, toggleCheck } from '../slices'

describe('profileSlice', () => {
  test('should reducer return initial state ', () => {
    const result = profileReducer(undefined, { type: '' })
    expect(result).toEqual({ isChecked: false })
  })
  test('should reducer toggle state ', () => {
    const isCheck = { isChecked: false }
    const action = { type: toggleCheck.type, payload: true }

    const result = profileReducer(isCheck, action)

    expect(result).toEqual(false)
  })
})
