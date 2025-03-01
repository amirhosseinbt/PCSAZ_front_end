import { configureStore, createSlice } from "@reduxjs/toolkit";
import {persistStore , persistReducer} from "redux-persist";
import localStorage from "redux-persist/lib/storage";
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
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: ['persist/PERSIST'], // Ignore Redux Persist actions
          },
        }),
});
const persistor = persistStore(store);
export const jwtActions = jwtSlice.actions;
export  {store , persistor};