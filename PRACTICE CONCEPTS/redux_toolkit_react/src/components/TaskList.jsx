import { removeTask } from "../store/slices/taskSlice";
import DeleteAllTasks from "./DeleteAllTasks";
import { useSelector, useDispatch } from "react-redux"; // to access the state for the UI

const TaskList = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    //accessing the state
    return state.tasks;
  });

  const delTask = (id) => {
    dispatch(removeTask(id)); //passing the key as id [index number]
    // console.log(id);
  };
  return (
    <>
      <div>
        <ul>
          {data.map((task, key) => {
            return (
              <li key={key}>
                <h4 style={{ display: "inline", margin: "1rem" }}>{task}</h4>
                <button onClick={() => delTask(key)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <DeleteAllTasks />
      </div>
    </>
  );
};
export default TaskList;
