import { createSlice } from "@reduxjs/toolkit";
const userInfoSlice = createSlice({
    name:'userInfo',
    initialState:{userInfo:{},isAuthenticated:false},
    reducers:{
        SetUserInfo(state,action){
            state.userInfo = action.payload;
            state.isAuthenticated = true;
        },
        RemoveUserInfo(state){
            state.userInfo = {};
            state.isAuthenticated = false;
        }
    }
});
export default userInfoSlice;