import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import process from "process";

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (city, {rejectWithValue}) => {

        try {
    
            let result = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&appid=${import.meta.env.VITE_API_KEY}&lang=tr`)

            return result.data
        }
        catch(error){

            return rejectWithValue(error)
            
        }

    }
);


const initialState = {
    status: null
}

const weatherSlice = createSlice({

    initialState,
    name:'weather',
    reducers:{

    },
    extraReducers: (builder) => {
        builder.addCase(

            fetchWeather.fulfilled , (state , action) => {
                console.log(action.payload);
            }

        ),

        builder.addCase(

            fetchWeather.rejected , (state , action) => {
                console.log(action.payload);
            }

        )
    }

});




export default weatherSlice.reducer