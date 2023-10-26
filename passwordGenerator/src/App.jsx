import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useCallback } from "react";
function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passref = useRef(null);
  const copyToClickBoard = () => {
    passref.current?.select();
    passref.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  };
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += " !#$%&'()*+,-./:;<=>?@[]^_`{|}~ ";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  useEffect(
    () => passwordGenerator(),
    [length, charAllowed, numAllowed, passwordGenerator]
  );

  return (
    <>
      <div className="w-full h-36 max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3 pt-5">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 gap-4">
          <input
            type="text"
            value={password}
            placeholder="password"
            className="outline-none w-full py-1 px-3 rounded-lg"
            readOnly
            ref={passref}
          />
          <button
            onClick={copyToClickBoard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-lg"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              className="cursor-pointer"
              min={6}
              max={100}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
            <input
              type="checkbox"
              className="cursor-pointer"
              defaultChecked={numAllowed}
              onChange={(e) => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label>Number</label>
            <input
              type="checkbox"
              className="cursor-pointer"
              defaultChecked={charAllowed}
              onChange={(e) => {
                setcharAllowed((prev) => !prev);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
