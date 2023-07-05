import { createSlice } from "@reduxjs/toolkit";
import deleteAllTasksAction from "../actions/actions"; //importing to use this in creating extra reducer for global use

const taskSlice = createSlice({
  name: "task", //name for the state
  initialState: [], //initial state value
  reducers: {
    //object of micro reducers
    addTask: (state, action) => {
      state.push(action.payload); //payload is the value passed from UI
    },
    removeTask: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
  // a reducer which has been created in a slice but we want to use it in other part then we can use it by placing
  // it in extra reducer
  extraReducers(builder) {
    //takes a builder parameter
    builder.addCase(deleteAllTasksAction, () => {
      //takes the imported action which is created and the function specified to do the task
      return [];
    });
  },
});

export default taskSlice;
export const { addTask, removeTask } = taskSlice.actions; //exporting action creators
