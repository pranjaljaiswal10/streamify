import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice"
import searchReducer from "./searchSlice"
import chatReducer from "./chatSlice"

const appStore=configureStore({
    reducer:{
        menu:menuReducer,
        search:searchReducer,
        chat:chatReducer,
    }
})
export default appStore; 