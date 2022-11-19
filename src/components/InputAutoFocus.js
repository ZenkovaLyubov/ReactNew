import React, {useEffect, useRef} from 'react';

const InputAutoFocus = (data) => {
    const ref = useRef(null)

    useEffect(()=>{
      ref.current?.focus()
    }, [data.messageList])

    return(
      <>
            
      <input ref={ref} id = "text" placeholder = 'Текст' value = {data.text} onChange = {(e) => data.setText(e.target.value)} />
      
      </>
    )
  }

  export default InputAutoFocus;
  