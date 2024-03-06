import { configureStore } from "@reduxjs/toolkit";
import weather from "./slices/weather";
import chart from "./slices/chart";

const  store = configureStore({
    reducer:{
        weather,
        chart
    }
})

export default store