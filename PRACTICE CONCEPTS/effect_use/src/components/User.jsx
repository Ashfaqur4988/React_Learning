import { useEffect } from "react";
import { dbConnection } from "./dbConnection";

const User = () => {
  const conn = dbConnection();
  //console log is acting as a side effect here, it is executing on every rendering.
  // to control this we need to use useEffect hooks.
  //   console.log("re rendering.... outside useEffect");

  //use effect takes a function that we want to control
  //and another argument, an array of dependencies to decide on which situation we want to execute
  //use effect hook is use to handle the lifecycle of a component in functional component
  // because we don't have lifecycle methods in functional components

  //during first only mounting time then we need to pass an empty array
  useEffect(() => {
    // console.log("re rendering.....");
    conn.connect();

    //unmounting
    return () => {
      //   console.log("unmounting");
      conn.disconnect();
    };
  }, []);

  //[] -> mounting phase -> only once
  //[stateName] -> for first and for every time of rendering then we pass the particular state in the dependency array
  // for unmounting -> closing any connection, return a function that will handle the logic in unmounting phase

  return (
    <div>
      <h1>User Component</h1>
    </div>
  );
};
export default User;
