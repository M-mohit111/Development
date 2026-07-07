import { configureStore } from "@reduxjs/toolkit";
import cardslice from "./slice";
const storeslice = configureStore({
    reducer:{
        slice:cardslice
    }
})
export default storeslice;