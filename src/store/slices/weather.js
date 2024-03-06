import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import process from "process";
import { formatter } from "../../hooks/data-formatter";

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (city, {rejectWithValue}) => {

        try {
    
            let result = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${import.meta.env.VITE_API_KEY}&lang=tr`)
            return result.data
        }
        catch(error){

            return rejectWithValue(error)
            
        }

    }
);


const initialState = {
    status: null,
    selectedTime : false
}

const weatherSlice = createSlice({

    initialState,
    name:'weather',
    reducers:{

    },
    extraReducers: (builder) => {
        builder.addCase(

            fetchWeather.fulfilled , (state , action) => {

                let parsedData = formatter(action.payload);
                state.selectedTime= parsedData.current;
                console.log(parsedData);
                state.status = 'fulFilled'
            }

        ),
        builder.addCase(
            fetchWeather.pending, (state,action)=>{

                state.status = 'pending'
            }
        ),

        builder.addCase(

            fetchWeather.rejected , (state , action) => {
                state.status = 'rejected'
                console.log(action.payload);
            }

        )
    }

});




export default weatherSlice.reducer