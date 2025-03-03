import { createSlice } from "@reduxjs/toolkit";
const shoppingCartSlice = createSlice({
    name:'carts',
    initialState:{carts:[],shops:[]},
    reducers:{
        SetCarts(state,action){
            state.carts = action.payload;
        },
        RemoveCarts(state){
            state.carts = [];
        },
        SetShops(state,action){
            state.shops = action.payload;
        },
        RemoveShops(state)
        {
            state.shops =[];
        }
    }
});
export default shoppingCartSlice;