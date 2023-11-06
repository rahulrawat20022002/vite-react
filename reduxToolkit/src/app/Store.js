import { configureStore } from "@reduxjs/toolkit";
import TodoReducers from "../features/todo/TodoSlice";
export const store = configureStore({ 
    reducer:TodoReducers
});
