import { createSlice, nanoid } from "@reduxjs/toolkit";

const initalState = {
  todos: [{ text: "Test", id: "123" }],
};

const todoSlice = createSlice({
  name: "Todo",
  initalState,

  reducers: {
    addTodo: (state, action) => {
      const todo = {
        text: action.payload,
        id: nanoid(),
      };
      state.todos.push(todo)
    },
    deletTodo: (state, action) => {
        state.todos=state.todos.filter((todo)=>state.todo.id!=action)
    },
  },
});
