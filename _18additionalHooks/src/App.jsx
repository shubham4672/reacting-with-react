import { useState, memo, useMemo, useCallback } from "react";
import "./App.css";
import Count from "./Count";

function App() {
  const [count, setCount] = useState(0);
  // useMemo to optimize the value of the object
  const BioData = useMemo(() => {
    return { name: "abc", age: 12 };
  }, []);
  const increment = useCallback(()=> {
    setCount(prevCount => prevCount + 1);
  }, []);
  return (
    <>
      <h1>
        <span>{count}</span>
      </h1>
      <Expensive />
      <Count onClick={increment} />
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <Clicks count={count} data={BioData} />
    </>
  );
}

const Expensive = () => {
  const sum = () => {
    let i = 0;
    for (i = 0; i < 1000000000; i++) {
      i + 1;
    }
    return i;
  };

  const total = useMemo(() => sum(), []);
  return <p>sum - {total}</p>;
};

const Clicks = memo(function ({ count, data }) {
  return (
    <>
      <h4>
        Clicked the button {count} times, with name {data.name}
      </h4>
      <p>not calling even in case of object</p>
    </>
  );
});

export default App;
