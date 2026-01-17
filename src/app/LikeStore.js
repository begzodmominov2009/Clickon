import { configureStore } from "@reduxjs/toolkit";
import likeReducer from "../features/LikeSlice"

export const likeStore = configureStore({
    reducer: likeReducer
})