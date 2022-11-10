import React, {useState, useEffect} from 'react';
import ChatView from "../components/ChatView";
import { useTheme } from '@emotion/react';
import MessageForm from '../components/MessageForm';
import MessageView from '../components/MessageView';
import { useParams } from "react-router-dom";
import { Button } from '@mui/material';

const ChatsPage = () => {
    const [chatList, setChatList] = useState([
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3        
        },
        {
          id: 4         
        }
      ])
    const [messageList, setMessageList] = useState([]);
    const {chatId = 1} = useParams()  
    let index = 0;
    if(chatId){
      index = chatList.findIndex(x => x.id === Number(chatId)) 
    }
    
    const theme = useTheme()

    
    const ROBOT_MESSAGE = 'Сообщение получено';

    useEffect(() => {
        if(messageList.length > 0)
        {
            if(messageList[messageList.length-1].author !== 'Robot') {
                    
                    const curMessageList=messageList.slice();
                     setTimeout(() => {
                      curMessageList.push({text: ROBOT_MESSAGE, author: 'Robot', id: index+1, name: `chat${index+1}`});
                      setMessageList(curMessageList);
                     }, 1500)
                  }
   
        }
        
      }, [messageList])

    const AddChat = () => {
        let maxId = 0;
        if(chatList.length !== 0) {
            maxId = Math.max(...chatList.map(x => x.id));
        }
        const newId = maxId + 1;
        const newObj = {id: newId}
        setChatList([...chatList, newObj]);
    }
    const DelChat = () => {
      if(typeof(chatId) == "string")
      {
        setChatList(chatList.filter(x => x.id !== Number(chatId)));

      }
        
    }
    const masIndex = messageList.filter(x => x.id === (index + 1));
    
    return (
        <div className='chatPage'>

            <div className='chatPage_left'>
            <h1 style = {{color:theme.palette.primary.main}}>Выберите чат</h1>
            <Button variant="contained" onClick = {AddChat}>+ чат</Button>
            <Button variant="contained" onClick = {DelChat}>- чат</Button>
            <ChatView chatList={chatList}/>
            </div>
            <div className='chatPage_right'>

                <h2 style = {{color:theme.palette.primary.main}}>Сообщения</h2>
                {/* <div style = {{background:theme.palette.secondary.main}}>
                    {
                        chatId && chatList[index]?.messages.map((e, i) => <p key={i}>{e}</p>)
                        
                    }
                </div> */}
            
            {
              chatList?.length
                ?<MessageForm messageList = {messageList} setMessage = {setMessageList} index = {index}></MessageForm> : null

            }
                {/* <MessageForm messageList = {messageList} setMessage = {setMessageList} index = {index}></MessageForm> */}
                {
                    masIndex?.length
                      ?masIndex.map((e, i) => <MessageView author = {e.author} text = {e.text} key={i}></MessageView>)  
                        : null  
                             
                }
            </div>

        </div>
    )
}
export default ChatsPage