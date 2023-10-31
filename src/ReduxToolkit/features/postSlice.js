import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getData=createAsyncThunk('data/getData',async()=>{
    // return fetch("http://jsonplaceholder.typicode.com/posts").then(res=>res.json())
    return fetch("https://course-api.com/react-store-products").then(res=>res.json())
})

const postSlice=createSlice({
    name:"posts",
    initialState:{
        posts:[],
        loading:false,
        cartData:[],
        total:0
    },
    reducers:{
        postincrement:(state,action)=>{
            // state.cartValues.push(action.payload)
            state.cartData=[...state.cartData,action.payload]
            const priceArray=state.cartData.map((e)=>e.productPrice)
            state.total=priceArray.reduce((a,b)=>a+b);
        },
        postdecrement:(state,action)=>{
            const index=state.cartData.findIndex((e)=>e.productName===action.payload.productName)
            if(index>-1){
                state.cartData.splice(index,1)
            }
            const priceArray=state.cartData.map((e)=>e.productPrice)
            state.total=priceArray.reduce((a,b)=>a+b);
        }

    },

    // extraReducers:(builder)=>{
    //     // builder.addCase(getData.pending,(state,action)=>{state.loading=true})
    //     builder.addCase(getData.fulfilled,(state,action)=>{
    //         state.loading=false 
    //         state.posts=action.payload})
    //     // builder.addCase(getData.rejected,(state,action)=>{state.loading=false})

    // }

    extraReducers:{
        [getData.pending]:(state,action)=>{
            state.loading=true
        },
        [getData.fulfilled]:(state,action)=>{
            state.loading=false
            state.posts=action.payload
        },
        [getData.rejected]:(state,action)=>{
            state.loading=false
        }
    }

})
export const{postincrement,postdecrement}=postSlice.actions
export default postSlice.reducer;