import React, {useState, useEffect} from 'react';
import ChatView from "../components/ChatView";
import { useTheme } from '@emotion/react';
// import MessageForm from '../components/MessageForm';
// import MessageView from '../components/MessageView';
import { useParams } from "react-router-dom";
import { Button } from '@mui/material';

const ChatsPage = () => {
    const [chatList, setChatList] = useState([
        {
          id: 1,
          name: "chat1",
          messages: ["Сообщение1 чата1", "Сообщение2 чата1", "Сообщение3 чата1"]
        },
        {
          id: 2,
          name: "chat2",
          messages: ["Сообщение1 чата2", "Сообщение2 чата2", "Сообщение3 чата2"]
        },
        {
          id: 3,
          name: "chat3",
          messages: ["Сообщение1 чата3", "Сообщение2 чата3", "Сообщение3 чата3"]
        },
        {
          id: 4,
          name: "chat4",
          messages: ["Сообщение1 чата4", "Сообщение2 чата4", "Сообщение3 чата4"]
        }
      ])
    const {chatId} = useParams()  
    
    const index = chatList.findIndex(x => x.id === Number(chatId))  
    const theme = useTheme()

    const [messageList, setMessageList] = useState([]);
    const ROBOT_MESSAGE = 'Сообщение получено';

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

    // const maxId = Math.max(сhatList.id); 
    const AddChat = () => {
        let maxId = 0;
        if(chatList.length !== 0) {
            maxId = Math.max(...chatList.map(x => x.id));
        }
        const newId = maxId + 1;
        const newObj = {id: newId, name: `chat${newId}`, messages: [`Сообщение1 чатa${newId}`, `Сообщение2 чата${newId}`, `Сообщение3 чата${newId}`]}
        setChatList([...chatList, newObj]);
    }
    const DelChat = () => {
        
        console.log("chatId " + chatId);
        console.log(chatList.filter(x => x.id !== Number(chatId)));
        setChatList(chatList.filter(x => x.id !== Number(chatId)));
        
    }
    
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
                <div style = {{background:theme.palette.secondary.main}}>
                    {
                        chatId && chatList[index]?.messages.map((e, i) => <p key={i}>{e}</p>)
                        
                    }
                </div>
            </div>
            

            {/* <MessageForm messageList = {messageList} setMessage = {setMessageList}></MessageForm>
            {
            messageList.map((e, i) => <MessageView author = {e.author} text = {e.text} key={i}></MessageView>)
            } */}

        </div>
    )
}
export default ChatsPage