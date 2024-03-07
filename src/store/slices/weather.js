import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
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
    currentTab : 'temps',
    currentDay: 0,
    selectedDates: ["2018-09-19T00:00:00.000Z"],
    status: 'pending',
    selectedTime : false,
    selectedTabData: false,
    days: false
}

const weatherSlice = createSlice({

    initialState,
    name:'weather',
    reducers:{

        changedTab: (state,action)=>{
            state.currentTab = action.payload
            state.selectedTabData = state.days[state.currentDay][state.currentTab];
        },
        changeDay : (state, action)=>{
            state.selectedTabData = state.days[action.payload][state.currentTab];
            state.selectedDates = state.days[action.payload].dates;
            state.currentDay = action.payload
        },

    },
    extraReducers: (builder) => {
        builder.addCase(

            fetchWeather.fulfilled , (state , action) => {

                let parsedData = formatter(action.payload);
                state.selectedTime= parsedData.current;
                console.log(parsedData);
                state.days = parsedData.days;
                state.selectedTabData = parsedData.days[state.currentDay][state.currentTab];
                state.selectedDates = parsedData.days[state.currentDay].dates
                state.status = 'fulFilled'
                console.log(state.status)
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
export const {changedTab, changeDay } = weatherSlice.actions