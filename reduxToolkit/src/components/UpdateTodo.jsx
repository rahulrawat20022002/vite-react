import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updaTodo, deletTodo } from "../features/todo/TodoSlice";

function UpdateTodo({ todo }) {
  // console.log(todo.text);
  // console.log(todo.id);
  const [newtext, setText] = useState(todo.text);

  const [editable, setEditable] = useState(false);

  const dispatch = useDispatch();

  const handleUpdate = () => {
    if (newtext) {
      dispatch(updaTodo({ id: todo.id, text: newtext }));
      setEditable(false);
    }
  };

  return (
    <ul className="list-none">
      <li className="mt-4 flex gap-3 justify-between items-center bg-zinc-800 px-4 py-2 rounded text-white">
        {editable ? (
          <>
            {/* Save btn */}

            <input
              type="text"
              onChange={(e) => setText(e.target.value)}
              value={newtext}
              className="w-80 border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            ></input>
            <button
              className="bg-green-500 border-0 px-4 py-1 text-white focus:outline-none rounded text-md hover:bg-green-600"
              onClick={handleUpdate}
            >
              Save
            </button>
          </>
        ) : (
          <>
            {todo.text}

            {/* Edit btn */}
            <div className="flex gap-4 justify-center items-center">
              <button
                className="bg-green-500 border-0 px-4 py-1 text-white focus:outline-none rounded text-md hover:bg-green-600"
                onClick={() => setEditable(true)}
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(deletTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md w-full"
              >
                Delete
              </button>
            </div>
          </>
        )}
      </li>
    </ul>
  );
}

export default UpdateTodo;
