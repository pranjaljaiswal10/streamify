import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice"
import searchReducer from "./searchSlice"
import chatReducer from "./chatSlice"
import dataReducer from "./dataSlice"

const appStore=configureStore({
    reducer:{
        menu:menuReducer,
        search:searchReducer,
        chat:chatReducer,
        data:dataReducer,
       
    }
})
export default appStore; 