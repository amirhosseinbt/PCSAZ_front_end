import { createSlice } from "@reduxjs/toolkit";
const discountCodeSlice = createSlice({
    name:'discountCode',
    initialState:{discountCode:{}},
    reducers:{
        SetCodes(state,action){
            state.discountCode = action.payload;
        },
        RemoveCodes(state){
            state.discountCode = {};
        }
    }
});
export default discountCodeSlice;