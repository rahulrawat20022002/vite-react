import React from "react";
import UserContext from "./UserContext";
const [user, setUser] = React.useState(null);
function UserContextProvider({ children }) {
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
