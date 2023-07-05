import { useDispatch } from "react-redux"; //create dispatch function to call reducers and add data
import { addTask } from "../store/slices/taskSlice";
import { useRef } from "react";

const Task = () => {
  //to get the value from the input
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const addNewTask = () => {
    const taskVal = inputRef.current.value.trim(); //getting the value form the input
    dispatch(addTask(taskVal)); //calling the reducer to add task in the state
    inputRef.current.value = ""; //clearing the value
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={addNewTask}>Add Task</button>
    </div>
  );
};
export default Task;
