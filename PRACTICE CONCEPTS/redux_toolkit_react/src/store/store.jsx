import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./slices/taskSlice";

const store = configureStore({
  reducer: {
    tasks: taskSlice.reducer, //access to all the reducers in the slice
  },
});

export default store;

//to connect react app with the store we need to put a provider in main.jsx
// and pass the store in it as props
