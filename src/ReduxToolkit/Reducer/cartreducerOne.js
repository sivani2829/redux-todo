import { createReducer } from "@reduxjs/toolkit";
import { decrement, increment } from "../Action/action";
const initialState={
    cartValues:[],
    totalPrice:0
}

const cartReducerOne=createReducer(initialState,(builder)=>{
    // console.log('builder',builder)
    builder
    .addCase(increment,(state,action)=>{
        state.cartValues=[...state.cartValues,action.payload]
        const priceArray=state.cartValues.map((e)=>e.productPrice)
        state.totalPrice=priceArray.reduce((a,b)=>a+b);
    })
    .addCase(decrement,(state,action)=>{
        const index=state.cartValues.findIndex((e)=>e.productName===action.payload.productName)
            if(index>-1){
                state.cartValues.splice(index,1)
            }
            const priceArray=state.cartValues.map((e)=>e.productPrice)
            state.totalPrice=priceArray.reduce((a,b)=>a+b);
        
    })
    
})

export default cartReducerOne