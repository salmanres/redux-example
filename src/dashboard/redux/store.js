import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './CounterSlice';
import todoReducer from './TodoSlice';

export const myStore = configureStore({
    reducer: {
        counter: counterReducer,
        todos : todoReducer
    }
});