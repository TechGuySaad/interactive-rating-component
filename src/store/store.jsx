import { configureStore } from "@reduxjs/toolkit";
import clickReducer from "./slices/clickColorSlice";


const store = configureStore(
    {
        reducer: {
            clickState: clickReducer

        }
    }
)

export default store;