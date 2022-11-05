import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";

const ChatView = ({chatList}) => {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };

    return(
        <div className='classTemp'>
            <List component="nav" aria-label="main mailbox folders">
            {
            chatList.map((e, i) =>  
            <ListItemButton key={e.id}
            selected={selectedIndex === e.id}
            onClick={(event) => handleListItemClick(event, e.id)}
            >
                <ListItem button component={Link} to={`${e.id}`} key={e.id}>
                    <ListItemText primary={`Чат_${e.id}`}/>
                    
                </ListItem>
            </ListItemButton>)
            }
            </List>
        </div>
    )
}
export default ChatView;