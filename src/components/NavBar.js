import React, {useState} from 'react';
import { Link } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@emotion/react';

const NavBar = () => {
    const [menuList, setMenuList] = useState([
        {
            href: '/',
            name: 'Главная'
        },
        {
            href: '/chats',
            name: 'Чаты'
        },
        {
            href: '/profile',
            name: 'Профиль'
        }
        
    ])
    const theme = useTheme()
        
    return(
        <div style = {{color:theme.palette.primary.main}}>
            <List component="nav" aria-label="main mailbox folders">
            {
            menuList.map((e, i) =>             
                <ListItem button component={Link} to={`${e.href}`} key={i}>
                    <ListItemText primary={e.name}/>
                </ListItem>)
            }
            </List>
        </div>

    )
  }
  export default NavBar;