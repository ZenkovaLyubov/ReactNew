import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const ChatView = ({chatList}) => {
    return(
        <div className='classTemp'>
            <List component="nav" aria-label="main mailbox folders">
            {
            chatList.map((e, i) =>             
                <ListItem button key={i}>
                <ListItemText primary={e.name}/>
                </ListItem>)
            }
            </List>
        </div>
    )
}
export default ChatView;