import { createSlice } from "@reduxjs/toolkit";

const weatherDataSlice = createSlice({
    name:"app",
    initialState:{
        weather_data:null,
    },
    reducers:{
        addWeaterData:(state,action)=>{
            state.weather_data = action.payload;
        },
    }
});

export const {addWeaterData} = weatherDataSlice.actions;
export default weatherDataSlice.reducer;