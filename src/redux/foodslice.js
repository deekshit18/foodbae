import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchfood =createAsyncThunk('restaurantList/fetchfood',()=>{
    const result=axios.get('/food.json').then(response=>response.data.restaurants)
    console.log(result);
    return result
})



const foodslice=createSlice({
name:"restaurantList",
initialState:{
    loading:false, //pending
    allrest:[], //resolve
    searchrest:[],
    error:"" //reject
},
extraReducers:(builder)=>{
    //builder holds the value/response
    builder.addCase(fetchfood.pending,(state)=>{
        state.loading=true
    })
    builder.addCase(fetchfood.fulfilled,(state,action)=>{
        state.loading=false
        state.allrest=action.payload
        state.searchrest=action.payload
        state.error=""
        
    })
    builder.addCase(fetchfood.rejected,(state,action)=>{
        state.loading=false
        state.allrest=""
        state.error=action.error.message
    })
},reducers:{
    search:(state,action)=>{
        state.allrest=state.searchrest.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))
    }
}

})
export const {search}=foodslice.actions
export default foodslice.reducer