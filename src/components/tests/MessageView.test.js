import { render, screen } from '@testing-library/react'
import MessageView from '../MessageView'

describe('Props Tests', () => {
  test('props render', () => {
    render(<MessageView author='Alex' text='Привет!' />)
    expect(screen.getByText(`Alex`)).toBeInTheDocument()
    expect(screen.getByText(`Привет!`)).toBeInTheDocument()
  })
})
