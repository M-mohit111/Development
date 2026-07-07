import { configureStore } from "@reduxjs/toolkit";
import slice1 from "./components/slice1"
import slice2 from "./components/slice2"
 const storeslices = configureStore({
    reducer:{
        slicer1: slice1,
        slicer2: slice2
    }
 })

export default storeslices;