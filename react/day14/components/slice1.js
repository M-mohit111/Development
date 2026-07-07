import { createSlice } from "@reduxjs/toolkit";
const slice1 = createSlice({
    name: "slice1",
    initialState:{count:0},
    reducers:{
        increase:(state)=>{state.count = state.count+1},
        decrease:(state)=>{state.count = state.count-1},
        reset:(state)=>{state.count = 0},
        customincreaser:(state,actions)=>{state.count+=actions.payload}
    }
})

export const {increase,decrease,reset,customincreaser} = slice1.actions;
export default slice1.reducer;