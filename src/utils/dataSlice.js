
import { createSlice } from "@reduxjs/toolkit";


const dataSlice =createSlice({
    name:"data",
    initialState:{
        data:[]
    },
    reducers:{
        addVideo:(state,action)=>{
            state.data=action.payload
        }
    }
})

export default dataSlice.reducer;
export const {addVideo}=dataSlice.actions;
