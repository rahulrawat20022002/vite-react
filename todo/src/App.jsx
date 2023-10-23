import { useState } from "react";
import "./App.css";

function App() {
  const [todo, settodo] = useState("");
  const [todoarr, setodoarr] = useState([]);

  const setTask = () => {
    if (todo !== "") {
      setodoarr([...todoarr, todo]);
      settodo("");
    }
    // console.log(todoarr);
  };
  const deleteTask = (index) => {
    let copyarr = [...todoarr];
    console.log(index);
    copyarr.splice(index, 1);
    setodoarr(copyarr);
  };

  return (
    <>
      <h1>To DO App</h1>
      <input
        value={todo}
        type="text"
        onChange={(e) => settodo(e.target.value)}
      />
      <button onClick={setTask}>Add Task</button>

      {todoarr.map((task, index) => (
        <div>
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        </div>
      ))}
    </>
  );
}

export default App;
