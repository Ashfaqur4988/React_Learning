import { useState } from "react";
import { useFetch } from "../useFetch";

const Cats = () => {
  const [text, setText] = useState("");
  const { getData } = useFetch();

  const getFact = async () => {
    const data = await getData();
    setText(data);
  };

  return (
    <div>
      <h1>Cat facts</h1>
      <button onClick={getFact}>Get Cats Fact</button>
      <h3>{text}</h3>
    </div>
  );
};
export default Cats;
