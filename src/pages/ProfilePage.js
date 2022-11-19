import { useTheme } from '@emotion/react';
import Toggler from '../store/profile/toggler';

const ProfilePage = () =>{
    const theme = useTheme()
  
    return (
			<div>
				<h1 style={{ color: theme.palette.primary.main }}>Ваш профиль</h1>
				<Toggler />
			</div>
		)
  }
  export default ProfilePage