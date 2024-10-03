import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './CounterSlice';
import todoReducer from './TodoSlice';
import cartReducer from './CartSlice';
import foodCartReducer from './MyCartSlice';

export const myStore = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todoReducer,
        cart: cartReducer,
        myFoodCart: foodCartReducer,
    }
});