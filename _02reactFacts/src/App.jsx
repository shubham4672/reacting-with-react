import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }
  return (
    <div className='container'>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <MainContent darkMode={darkMode} />
    </div>
  );
}

export default App;
