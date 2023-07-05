import { useContext } from "react";
import { MyContext } from "../MyContext";

const Counter = () => {
  const { text, setText } = useContext(MyContext);
  const add = () => {
    return setText(text + 1);
  };
  const sub = () => {
    return setText(text - 1);
  };
  return (
    <div>
      <button onClick={sub}>Sub</button>
      <h3>{text}</h3>
      <button onClick={add}>Add</button>
    </div>
  );
};
export default Counter;
