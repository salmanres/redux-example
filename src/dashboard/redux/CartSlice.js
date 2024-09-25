import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push({
                id: action.payload.id,
                name: action.payload.rname,
                price: action.payload.price
            })
        }
    }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;