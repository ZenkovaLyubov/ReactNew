import React, {useState} from 'react';
function MessageComponent({setMessage}) {
   
    const [text, setText] = useState('')
    const [author, setAuthor] = useState('')
   
    const submitForm = (e) => {
        e.preventDefault()
        if((text != '') && (author != ''))
        {
            setMessage(prevstate => [...prevstate, {text: text, author: author}]);
            setText('')
            setAuthor('')
        }
    }

    return(
        
        <form className="alignCenter" onSubmit={submitForm}>
            <input placeholder = 'Имя' id = "text" value = {text} onChange = {(e) => setText(e.target.value)} />
            
            <input placeholder = 'Текст' id = "author" value = {author} onChange = {(e) => setAuthor(e.target.value)} />

            <button type='submit'>Отправить</button>
        </form>
    );
}

export default MessageComponent;