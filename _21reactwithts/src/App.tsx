import { useState } from "react";
import "./App.css";
import Goals from "./components/Goals";
import Header from "./components/Header";

function App() {
  const [goals, setGoals] = useState([
    { id: 1, title: "learn ts", description: "ts from start" },
    { id: 2, title: "learn dsa", description: "dsa from start" },
  ]);
  const handleDeleteGoal = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((g) => g.id !== id));
  };
  return (
    <>
      <Header image={{ src: "/vite.svg", alt: "React icon" }}></Header>
      <Goals goals={goals} setGoals={handleDeleteGoal} />
    </>
  );
}

export default App;
