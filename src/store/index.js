import { configureStore } from "@reduxjs/toolkit";
import weather from "./slices/weather";

const  store = configureStore({
    reducer:{
        weather
    }
})

export default store