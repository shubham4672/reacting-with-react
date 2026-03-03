import "./App.css";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponetC from "./components/ComponetC";
import MyProvider from "./context/Context-Provider";

function App() {
  return (
    <>
      <MyProvider>
        <ComponentA />
        <ComponentB />
        <ComponetC />
      </MyProvider>
    </>
  );
}

export default App;
