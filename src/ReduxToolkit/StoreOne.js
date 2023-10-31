import { configureStore } from "@reduxjs/toolkit";
import cartReducerOne from "./Reducer/cartreducerOne";

export const StoreOne=configureStore({
    reducer:{
        cartReducerOne:cartReducerOne
    }
})
