import { useState } from "react";
import { useQuery } from "react-query";

const Cats = () => {
  const [text, setText] = useState("");

  const { isLoading, error, data, refetch } = useQuery("cats", async () => {
    const res = await fetch("https://catfact.ninja/fact");
    const data = await res.json();
    return data;
  });

  if (isLoading) {
    return <h1>Loading.........</h1>;
  }

  if (error) {
    return <h1>Error Has Occurred</h1>;
  }

  const getData = () => {
    // console.log(data);
    setText(data.fact);
    refetch();
  };

  return (
    <div>
      <h2>Cat facts</h2>
      <button onClick={getData}>Get Fact</button>
      <h4>{text}</h4>
    </div>
  );
};
export default Cats;
