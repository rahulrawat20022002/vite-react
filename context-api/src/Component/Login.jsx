import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, pass });
  };
  return (
    <>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Login
      </button>
    </>
  );
}

export default Login;
