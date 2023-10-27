import { useEffect, useState } from "react";

import ThemeBtn from "./Components/ThemeBtn";
import Card from "./Components/Card";
import { ThemeProvider } from "./ThemeContext/ThemeContext";
function App() {
  const [theme, setTheme] = useState("light");
  const lighttheme = () => {
    setTheme("light");
  };
  const darktheme = () => {
    setTheme("dark");
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark"),
      document.querySelector("html").classList.add(theme),
      [theme];
  });
  return (
    <ThemeProvider value={{ theme, lighttheme, darktheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
