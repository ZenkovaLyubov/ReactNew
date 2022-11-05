import NavBar from '../components/NavBar';
import { useTheme } from '@emotion/react';

const HomePage = () => {
    const theme = useTheme()
    return (
        <div>
            <h1 style = {{color:theme.palette.primary.main}}>Добро пожаловать</h1>
            <NavBar />
        </div>
    )
}
export default HomePage