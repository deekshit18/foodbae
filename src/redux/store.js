import { configureStore } from "@reduxjs/toolkit";
import foodslice from "./foodslice";

const store =configureStore({
    reducer:{
        foodslice
    }
})

export default store 