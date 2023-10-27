import { useContext, createContext } from "react";

export const themeContext = createContext({
  theme: "light",
  darktheme: () => {},
  lighttheme: () => {},
});

export const ThemeProvider = themeContext.Provider;

export const UseTheme = () => {
  return useContext(themeContext);
};
