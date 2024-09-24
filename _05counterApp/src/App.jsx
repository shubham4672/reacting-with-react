import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // if you need to use the old value of state to get the new value. you need to plan to pass a function to setCount
  const incre = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decre = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const reset = () => {
    setCount(0);
  };
  /**
   * Note: if you ever need the old value of state
   * to help you determine the new value of state,
   * you should pass a callback function to your
   * state setter function instead of using
   * state directly. This callback function will
   * receive the old value of state as its parameter,
   * which you can then use to determine your new
   * value of state.
   */
  return (
    <>
      <div className='section'>
        <h2>COUNTER APP</h2>
      </div>
      <h3>Count is: {count}</h3>
      {/* Method 1: where we directly changes the state of count. Use this when you don't know the value of previous counter*/}
      {/* <div className='options'>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count - 1)}>Increment</button>
      </div> */}

      {/* Method 2: where we are using callback functions to change the value according to our the prevCount. Use this when you know the previous count */}
      <div className='options'>
        <button onClick={decre}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={incre}>Increment</button>
      </div>
    </>
  );
}

export default App;
