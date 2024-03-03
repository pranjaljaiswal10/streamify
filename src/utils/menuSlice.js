import { createSlice } from "@reduxjs/toolkit";

const menuSlice=createSlice({
    name:"menu",
    initialState:{
        toggleMenu:true
    },
    reducers:{
        toggleMenu:(state)=>{
            state.toggleMenu=!state.toggleMenu
        }
    }
})

export default menuSlice.reducer;
export const {toggleMenu}=menuSlice.actions