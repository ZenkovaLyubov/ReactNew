import React, {useState, useEffect} from 'react';
import ChatView from "../components/ChatView";
import { useTheme } from '@emotion/react';
import MessageForm from '../components/MessageForm';
import MessageView from '../components/MessageView';
import { useParams } from "react-router-dom";
import { Button } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { addChatList } from "../slices/chatSlice"
import { delChatList } from "../slices/chatSlice"
import { AddMessageList } from "../slices/messageSlice"
import { DelMessageList } from "../slices/messageSlice"
import { useNavigate } from "react-router-dom";

const ChatsPage = () => {
  const navigate = useNavigate();
  const chatList = useSelector(state => state.chat)
  const dispatch = useDispatch()

  const messageList = useSelector(state => state.message)
    
    let {chatId = 1} = useParams()  
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
                    
              setTimeout(() => {
                      dispatch(AddMessageList({text: ROBOT_MESSAGE, author: 'Robot', id: (Number(chatId))}))
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
        dispatch(addChatList(newObj))
        
    }
    const DelChat = () => {
      if(typeof(chatId) == "string")
      {
        dispatch(delChatList(chatId))
        dispatch(DelMessageList(chatId))
        
        let maxId = 0;
        if(chatList.length > 1) {
          const chl = chatList.filter(x => x.id !== Number(chatId))
          maxId = Math.max(...chl.map(x => x.id));
          navigate(`/chats/${maxId}`);
          chatId = maxId;
           
        }
        if(chatList.length === 1) {
          navigate(`/chats`);
        }
       
      }
        
    }
    
    const masIndex = messageList.filter(x => x.id === (Number(chatId)));
    
    return (
        <div className='chatPage'>

            <div className='chatPage_left'>
            <h1 style = {{color:theme.palette.primary.main}}>Выберите чат</h1>
            <Button variant="contained" onClick = {AddChat}>+ чат</Button>
            <Button variant="contained" onClick = {DelChat}>- чат</Button>
            <ChatView chatId={Number(chatId)}/>
            </div>
            <div className='chatPage_right'>

                <h2 style = {{color:theme.palette.primary.main}}>Сообщения</h2>
                       
            {
              chatList?.length
                ?<MessageForm index = {Number(chatId-1)}></MessageForm> : null

            }
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