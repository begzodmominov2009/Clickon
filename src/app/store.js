import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/CartSlice"
 
export const cartStore = configureStore({
    reducer: cartReducer
})