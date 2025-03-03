import { createSlice } from "@reduxjs/toolkit";
const vipDetailSlice = createSlice({
    name:'vipDetail',
    initialState:{vipDetail:{Time_remaining:{},bonus:''}},
    reducers:{
        SetVipDetail(state,action){
            state.vipDetail = action.payload;
        },
        RemoveUserInfo(state){
            state.vipDetail = {};
        }
    }
});
export default vipDetailSlice;