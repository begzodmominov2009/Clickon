import { createSlice } from "@reduxjs/toolkit"

const initialStateLike = {
    like: JSON.parse(localStorage.getItem("like") || "[]")
}
export const likeSlice = createSlice({
    name: "like",
    initialStateLike,
    reducers: {
        addToLike: (state, action) => {
            state.like.push(action.payload)
            localStorage.setItem("like", JSON.stringify(state.like));
            console.log(action.payload, state);
            
        },
        // removeToLike: (state, action) =>{
        //     state.like = state.like.filter((el) => el.id !== action.payload.id)
        //     localStorage.setItem("like", JSON.stringify(state.like));
        // }
    }
})

export const {addToLike} = likeSlice.actions
export default likeSlice.reducer