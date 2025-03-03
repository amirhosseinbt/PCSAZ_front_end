import { configureStore, createSlice } from "@reduxjs/toolkit";
import {persistStore , persistReducer} from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import userInfoSlice from "./userInfo";
import shoppingCartSlice from "./shoppingCart";
import discountCodeSlice from "./discountCode";
import vipDetailSlice from "./vipDetail";
import ipSlice from "./ip";
const jwtSlice = createSlice({
    name:'jwt',
    initialState:{jwt:''},
    reducers:{
        Login(state,action){
            state.jwt = action.payload;
        },
        Logout(state){
            state.jwt = '';
        }
    }
});
const persistConfig = {
    key:'auth',
    storage:localStorage,
}
const persistedReducer = persistReducer(persistConfig,jwtSlice.reducer);
const store = configureStore({
    reducer:{jwt:persistedReducer,userInfo:userInfoSlice.reducer,carts:shoppingCartSlice.reducer,discountCode:discountCodeSlice.reducer,vipDetail:vipDetailSlice.reducer , ip:ipSlice.reducer},
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: ['persist/PERSIST'], // Ignore Redux Persist actions
          },
        }),
});
const persistor = persistStore(store);
export const jwtActions = jwtSlice.actions;
export const userINfoActions = userInfoSlice.actions;
export const cartsActions = shoppingCartSlice.actions;
export const codeActions = discountCodeSlice.actions;
export const vipDetailActions = vipDetailSlice.actions;
export const ipActions = ipSlice.actions;
export  {store , persistor};