import { useState } from "react";
import "./App.css";
import User from "./components/User";
import Example from "./components/Example";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Use Effect & Life Cycle Method</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      {count < 5 && <User />}
      <Example />
    </>
  );
}

export default App;
