import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: 'message',
    initialState:  [],
    reducers: {
        AddMessageList:(state, action)=>{
           return [...state, action.payload]
        },
        DelMessageList:(state, action)=>{
            return [...state.filter((x) => x.id !== Number(action.payload))]
        }
    }
})
export const {AddMessageList, DelMessageList} = messageSlice.actions
export const messageReducer = messageSlice.reducer