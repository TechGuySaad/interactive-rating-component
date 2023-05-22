import { createSlice } from "@reduxjs/toolkit";


const clickColorSlice = createSlice({
    name: 'click-color',
    initialState: 0,
    reducers: {
        setClickState(state,action){
            return action.payload;
        },
        
    }
})

export default clickColorSlice.reducer;
export const {setClickState} = clickColorSlice.actions;