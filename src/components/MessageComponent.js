function MessageComponent({text_h1, text_p}) {
    return(
        <div className="message_Box">
            <h1 style={{color: 'green'}}>{text_h1}</h1>
            <p style={{color: 'blue'}}>{text_p}</p>
        </div>
    );
}

export default MessageComponent;