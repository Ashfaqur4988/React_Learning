import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import { MyContext } from "./MyContext";

function App() {
  const [text, setText] = useState(0);
  return (
    <>
      <MyContext.Provider value={{ text, setText }}>
        <h1>Context API</h1>
        <Counter />
      </MyContext.Provider>
    </>
  );
}

export default App;
