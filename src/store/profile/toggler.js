import { useDispatch, useSelector } from "react-redux"

const Toggler = () =>{
    
    const isChecked = useSelector(state => state)
    const dispatch = useDispatch()

    return(
        <>
            <input type='checkbox' value={isChecked} checked={isChecked} onChange = {()=>{
                dispatch({type:'SWITCH_TOGGLE'})
             
            }}/>
        </>
    )
}

export default Toggler