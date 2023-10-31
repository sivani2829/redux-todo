import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Reducer/cartReducer";

export const Store=configureStore({
    reducer:{
        cartReducer:cartReducer
    }
})