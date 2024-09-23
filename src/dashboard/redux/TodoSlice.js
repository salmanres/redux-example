import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, actions) => {
            state.todos.push({
                id: Date.now(),
                text: actions.payload
            });
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;