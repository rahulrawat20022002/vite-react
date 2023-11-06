import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ text: "Test", id: "123" }],
};

const todoSlice = createSlice({
  name: "Todo",
  initialState,

  reducers: {
    addTodo: (state, action) => {
      const todo = {
        text: action.payload,
        id: nanoid(),
      };
      state.todos.push(todo);
    },
    deletTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
    },
    updaTodo: (state, action) => {
      const { id, text } = action.payload;
      state.todos.map((todo) =>
        todo.id === id ? (todo.text = text) : todo.text
      );
    },
  },
});

export const { addTodo, deletTodo, updaTodo } = todoSlice.actions;
export default todoSlice.reducer;
