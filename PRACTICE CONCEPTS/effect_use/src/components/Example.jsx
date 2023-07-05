import { useState, useEffect } from "react";

const Example = () => {
  const [userList, setUserList] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const getUser = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return setUserList(data);
  };

  useEffect(() => {
    getUser();
  }, [refresh]);

  return (
    <div>
      <h1>Fetching from API</h1>
      <button onClick={() => setRefresh((refresh) => !refresh)}>Refresh</button>
      {userList.map((user, id) => (
        <h3 key={id}>{user.name}</h3>
      ))}
    </div>
  );
};
export default Example;
