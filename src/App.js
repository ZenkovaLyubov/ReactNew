import './App.css';
import React, {useState, useEffect} from 'react';
import MessageComponent from './components/MessageComponent';
import MessageView from './components/MessageView';

function App() {

  const [messageList, setMessageList] = useState([]);
  const ROBOT_MESSAGE = 'Сообщение получено';

  useEffect(() => {
    if(messageList.length > 0)
    {
      if(messageList[messageList.length-1].author != 'Robot') {
        const curMessageList=messageList.slice();
         setTimeout(() => {
          curMessageList.push({text: ROBOT_MESSAGE, author: 'Robot'});
          setMessageList(curMessageList);
         }, 1500)
      }
    }
    
  }, [messageList])

  return (
    <div className='app'>
      <MessageComponent setMessage = {setMessageList}></MessageComponent>
      {
        messageList.map((e, i) => <MessageView text = {e.text} author = {e.author} key={i}></MessageView>)
      }
      
    </div>
  );
}

export default App;

// function App() {
//   const [messageList, setMessageList] = useState([]);
//   const [messageBody, setMessageBody] = useState({
//     text: '',
//     author: ''
//   });

//   const ROBOT_MESSAGE = 'Сообщение получено';

//   useEffect(() => {
//     if(messageList.length > 0 && messageList.slice(-1)[0].author !== 'robot') {
//         setTimeout(() => {
//           setMessageList(prevstate => [...prevstate, {text: ROBOT_MESSAGE, author: 'robot'}])
//         }, 1500)
      
//     }
//   }, [messageList])

//   return (
//     <div className='app'>
//       <MessageComponent data = {messageBody} setData = {setMessageBody} setMessage = {setMessageList} />

//       <div className = "messageList">
//         {
//           messageList.map((e, i) => <MessageComponent text = {e.text} author = {e.author} key = {i}></MessageComponent>)
//         }
//       </div>
//       <h1>Tect</h1>
//     </div>

   
//   );
// }

// export default App;