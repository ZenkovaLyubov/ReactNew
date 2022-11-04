import React, {useState} from 'react';
import { useTheme } from '@emotion/react';
import InputAutoFocus from './InputAutoFocus';
import { Button } from '@mui/material';

function MessageComponent({messageList, setMessage}) {
   
    const [text, setText] = useState('')
    const [author, setAuthor] = useState('')

    const theme = useTheme()
   
    const submitForm = (e) => {
        e.preventDefault()
        if((text !== '') && (author !== ''))
        {
            setMessage(prevstate => [...prevstate, {text: text, author: author}]);
            setText('')
            setAuthor('')
        }
    }

    return(
        <div style = {{background:theme.palette.secondary.main}}>
            <form className="alignCenter" onSubmit={submitForm}>
                              
                <InputAutoFocus text = {text} setText = {setText} messageList = {messageList} />

                <input placeholder = 'Автор' id = "author" value = {author} onChange = {(e) => setAuthor(e.target.value)} />

                <Button variant="contained" type='submit'>Отправить</Button>
                               
            </form>
        </div>
    );
}

export default MessageComponent;