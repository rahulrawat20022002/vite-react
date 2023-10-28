import { useContext, createContext } from "react";

export const todoContext = createContext({
  todos: {
    id: 1,
    todo: [],
    completed: "false",
  },
  updateTodo: () => {},
  deleteTodo: () => {},
  toggleTodo: () => {},
});

export const TodoProvider = todoContext.Provider;

export const useTodo = () => {
  return useContext(todoContext);
};
