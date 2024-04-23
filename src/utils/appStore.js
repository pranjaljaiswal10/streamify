import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice"
import chatReducer from "./chatSlice"

const appStore=configureStore({
    reducer:{
        menu:menuReducer,
        chat:chatReducer,
    }
})
export default appStore; 