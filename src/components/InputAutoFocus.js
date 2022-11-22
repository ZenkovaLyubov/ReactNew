import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

const InputAutoFocus = (data) => {
  const ref = useRef(null)
  const messageList = useSelector((state) => state.messageList)

  useEffect(() => {
    ref.current?.focus()
  }, [messageList])

  return (
    <>
      <input
        ref={ref}
        id='text'
        placeholder='Текст'
        value={data.text}
        onChange={(e) => data.setText(e.target.value)}
      />
    </>
  )
}

export default InputAutoFocus
