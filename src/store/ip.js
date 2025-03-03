import { createSlice } from "@reduxjs/toolkit";
const ipSlice = createSlice({
    name:'ip',
    initialState:{ip:''},
    reducers:{
        SetIp(state,action){
            state.ip = action.payload;
        },
        RemoveIp(state){
            state.ip = '';
        }
    }
});
export default ipSlice;