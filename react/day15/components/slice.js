import { createSlice } from "@reduxjs/toolkit";

const foodslice = createSlice({
    initialState:{count:0},
    name:"slicer",
    reducers:{
        additem:(state)=>{state.count++},
        removeitem: (state)=>{state.count--},
    }
})

export default foodslice.reducer
export const { additem, removeitem } = foodslice.actions;