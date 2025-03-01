import { createSlice } from "@reduxjs/toolkit";
const shoppingCartSlice = createSlice({
    name:'carts',
    initialState:{carts:[]},
    reducers:{
        SetCarts(state,action){
            state.carts = action.payload;
        },
        RemoveCarts(state){
            state.carts = [];
        }
    }
});
export default shoppingCartSlice;