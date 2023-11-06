import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updaTodo, deletTodo } from "../features/todo/TodoSlice";

function UpdateTodo(todo) {
  const [text, setText] = useState(todo.todo.text);

  const [editable, setEditable] = useState(false);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(updaTodo({ id: todo.todo.id, text: todo.todo.text }));
    setEditable(false);
  };
  return (
    <>
      <ul>
        
        <li
          className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
          key={todo.todo.id}
        >
          
          {editable ? (
            <>
              <input
                type="text"
                onChange={(e) => setText(e.target.value)}
                value={text}
                readOnly={!editable}
              ></input>
              <button onClick={handleUpdate}>Save</button>
            </>
          ) : (
            <>
            <div>

                
            </div>
              {todo.todo.text}
              <button onClick={() => setEditing(true)}>Edit</button>
              <button
                onClick={() => dispatch(deletTodo(todo.todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                Delete
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </>
          )}
        </li>
      </ul>
    </>
  );
}

export default UpdateTodo;
