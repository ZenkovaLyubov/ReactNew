import { useTheme } from '@emotion/react';

const ProfilePage = () =>{
    const theme = useTheme()
  
    return(
      <div>
        <h1 style = {{color:theme.palette.primary.main}}>Ваш профиль</h1>
      </div>
      )
  }
  export default ProfilePage