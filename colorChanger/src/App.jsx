import { useState } from "react";

function App() {
  const [color, setColor] = useState("grey");
  const blue = () => {
    setColor("blue");
  };
  const green = () => {
    setColor("green");
  };
  const yellow = () => {
    setColor("yellow");
  };
  const reset = () => {
    setColor("grey");
  };
  return (
    <div>
      <div
        className="w-screen h-screen flex items-center justify-center"
        style={{
          backgroundColor: color,
        }}
      >
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5 "
          onClick={blue}
          onDoubleClick={reset}
        >
          Blue
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-5"
          onClick={green}
          onDoubleClick={reset}
        >
          Green
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded m-5"
          onClick={yellow}
          onDoubleClick={reset}
        >
          Yellow
        </button>
        <p className="text-lg text-white font-bold">Double Click to reset it</p>
      </div>
    </div>
  );
}

export default App;
