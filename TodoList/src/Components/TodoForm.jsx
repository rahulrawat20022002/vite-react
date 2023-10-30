import React, { useContext, useState } from "react";
import { useTodo } from "../Context";

function TodoForm() {
  const [input, setinput] = useState("");
  const { addTodo } = useTodo();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    addTodo({ todo: input });
    setinput("");
  };
  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setinput(e.target.value)}
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
