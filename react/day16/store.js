import { configureStore } from "@reduxjs/toolkit";
import slicercreatedbyme from "./slice"
const userstore = configureStore({
    reducer:{
        slicer1:slicercreatedbyme
    }
})

export default userstore;