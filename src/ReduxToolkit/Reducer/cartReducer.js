import { createSlice } from "@reduxjs/toolkit"

const initialState={
    cartValues:[],
    totalPrice:0
}

const cartReducer=createSlice({
    name:'cartReducer',
    initialState,
    reducers:{
        incrementcart:(state,action)=>{
            // state.cartValues.push(action.payload)
            state.cartValues=[...state.cartValues,action.payload]
            const priceArray=state.cartValues.map((e)=>e.productPrice)
            state.totalPrice=priceArray.reduce((a,b)=>a+b);
        },
        decrementcart:(state,action)=>{
            const index=state.cartValues.findIndex((e)=>e.productName===action.payload.productName)
            if(index>-1){
                state.cartValues.splice(index,1)
            }
            const priceArray=state.cartValues.map((e)=>e.productPrice)
            state.totalPrice=priceArray.reduce((a,b)=>a+b);
        }

    }
})
export const{incrementcart,decrementcart}=cartReducer.actions
export default cartReducer.reducer