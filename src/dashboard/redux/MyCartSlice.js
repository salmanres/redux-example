import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalAmount: 0,
}

const myFoodCart = createSlice({
    name: "myFoodCart",
    initialState,
    reducers: {
        addFoodItem: (state, action) => {
            state.items.push(action.payload);
            state.totalAmount += action.payload.price;
        },
        removeFoodItem: (state, actions) => {
            state.items = state.items.filter((item) => item.id !== actions.payload.id);
            state.totalAmount -= actions.payload.price;
        }
    }
});

export const { addFoodItem, removeFoodItem } = myFoodCart.actions;
export default myFoodCart.reducer;

