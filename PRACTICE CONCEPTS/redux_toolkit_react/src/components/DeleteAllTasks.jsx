import { useDispatch } from "react-redux";
import deleteAllTasksAction from "../store/actions/actions";

const DeleteAllTasks = () => {
  const dispatch = useDispatch();
  const deleteAll = () => {
    dispatch(deleteAllTasksAction()); //calling it inside the handler function
  };
  return (
    <div>
      <button onClick={deleteAll}>Delete All Task</button>
    </div>
  );
};
export default DeleteAllTasks;
