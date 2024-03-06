import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentTab : 'sıcaklık'
};


const chartSlice = createSlice({
    initialState,
    name: 'chart',
    reducers: {

        changedTab: (state,action)=>{
            state.currentTab = action.payload
        }
    }

})


export default chartSlice.reducer;
 
export const {changedTab} = chartSlice.actions