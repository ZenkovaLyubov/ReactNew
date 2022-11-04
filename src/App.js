import './App.css';
import React, {useState, useEffect} from 'react';
import { Button, createTheme, ThemeProvider } from '@mui/material';
import MessageComponent from './components/MessageComponent';
import MessageView from './components/MessageView';
import ChatView from './components/ChatView';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ba3dba'
    },
    secondary: {
      main: '#e7b5e7'
    }
  }
})

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#24a0a4'
    },
    secondary: {
      main: '#c5ddde'
    },
    background:{
      paper:'#000'
    },
    text:{
      primary: '#888888'
    }
  }
})

function App() {

  const [messageList, setMessageList] = useState([]);
  const ROBOT_MESSAGE = 'Сообщение получено';

  const [isDark, setIsDark] = useState(false)

  const [chatList, setChatList] = useState([
    {
      id: "1",
      name: "name1"
    },
    {
      id: "2",
      name: "name2"
    },
    {
      id: "3",
      name: "name3"
    },
    {
      id: "4",
      name: "name4"
    }
  ])

  useEffect(() => {
    if(messageList.length > 0)
    {
      if(messageList[messageList.length-1].author !== 'Robot') {
        const curMessageList=messageList.slice();
         setTimeout(() => {
          curMessageList.push({text: ROBOT_MESSAGE, author: 'Robot'});
          setMessageList(curMessageList);
         }, 1500)
      }
    }
    
  }, [messageList])

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <div className='app'>
      <div className="left">
        <ChatView chatList={chatList}></ChatView>
      </div>
      
      <div className="right">
        <MessageComponent messageList = {messageList} setMessage = {setMessageList}></MessageComponent>
        {
          messageList.map((e, i) => <MessageView author = {e.author} text = {e.text} key={i}></MessageView>)
        }
        <Button variant="contained" onClick={()=>{setIsDark(pervstate => !pervstate)}}>Сменить тему</Button>
      </div>
      
      </div>
    </ThemeProvider>
   
  );
}

export default App;