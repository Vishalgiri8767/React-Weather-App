import { configureStore } from "@reduxjs/toolkit";
import weatherDataSlice from "./weatherDataSlice";

const store = configureStore({
    reducer:{
        app:weatherDataSlice,
    },
});
export default store;