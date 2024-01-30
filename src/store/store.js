import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";

const store = configureStore({
    reducer:{
        homeSlice: homeSlice.reducer,
    },
})

export default store;