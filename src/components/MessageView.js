const MessageView = ({ author, text }) => {
  return (
    <div className='alignCenter'>
      <hr />
      <h1>{author}</h1>
      <p>{text}</p>
      <hr />
    </div>
  ) 
}
export default MessageView
