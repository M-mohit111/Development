import { createSlice } from "@reduxjs/toolkit";

const slice2 = createSlice({
    name: "slice2",
    initialState:{count:0},
    reducers:{
        increase:(state)=>{state.count = state.count+1},
        decrease:(state)=>{state.count = state.count-1},
        reset:(state)=>{state.count = 0}
    }
})
export const {increase,decrease,reset}= slice2.actions;
export default slice2.reducer;