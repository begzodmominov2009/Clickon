import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: JSON.parse(localStorage.getItem("cart") || "[]")
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload)
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        removeToCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
            localStorage.setItem("cart", JSON.stringify(state.cart));

        }
    }
})
export const { addToCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer 