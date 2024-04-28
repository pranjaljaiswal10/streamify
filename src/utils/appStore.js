import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice"
import searchReducer from "./searchSlice"

const appStore=configureStore({
    reducer:{
        menu:menuReducer,
        search:searchReducer
    }
})
export default appStore; 