const MessageView = ({ author, text }) => {
  return (
    <div className='alignCenter'>
      <hr />
      <h2>{author}</h2>
      <p>{text}</p>
      <hr />
    </div>
  ) 
}
export default MessageView
