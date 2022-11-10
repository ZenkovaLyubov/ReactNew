import { useTheme } from '@emotion/react';

const NotFoundPage = () =>{
    const theme = useTheme()
    
    return(
      <div>
        <h1 style = {{color:theme.palette.primary.main}}>404 страница не найдена</h1>
      </div>
      )
  }
  export default NotFoundPage