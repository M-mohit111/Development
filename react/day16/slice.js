import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// pending , fullfiled, rejected
// createAsyncThunk is used to use two values
// first is action type and second is payload

const Fetchdata = createAsyncThunk(
    'coin/fetch',
    async (args,thunkapi) => {
        try{const reponse = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`);
        const data = await reponse.json();
        return data;}
        catch(error){
            return thunkAPI.rejectWithValue("Failed to fetch data");
        }
    }
)

const userslice = createSlice({
    name:"slicer1",
    initialState:{data:[],loading:false,error:null},
    reducers:{
        // increase:(state)=>(state.count++),
        // decrease:(state)=>(state.count--),
    },
    extraReducers:(builder)=>{
        builder
            .addCase(Fetchdata.pending,(state)=>{
                state.loading = true;
            })
            .addCase(Fetchdata.fulfilled,(state,action)=>{
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(Fetchdata.rejected,(state,action)=>{
                state.error = action.payload;
                state.loading = false;
            })
    }
})

export {Fetchdata};

export default userslice.reducer;