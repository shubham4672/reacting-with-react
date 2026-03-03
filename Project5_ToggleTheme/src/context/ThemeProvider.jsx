import React, { useState } from "react";
import MyContext from "./theme-context.js";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("theme");
  const handleToggleTheme = () => {
    return setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  return (
    <MyContext.Provider value={{ theme, setTheme, handleToggleTheme }}>
      {children}
    </MyContext.Provider>
  );
};

export default ThemeProvider;
