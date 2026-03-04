import { useReducer } from "react";
import "./App.css";

function App() {
  const initialState = {
    counter: 0,
    step: 2
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "Increment":
        return { ...state, counter: state.counter + state.step };
      case "Decrement":
        return { ...state, counter: state.counter - state.step };
      case "Reset":
        return { ...state, counter: 0 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Counter app</h1>
      <h2>
        <span>{state.counter}</span>
      </h2>
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </>
  );
}

export default App;
