//to create a separate action which can be used globally

import { createAction } from "@reduxjs/toolkit";

const deleteAllTasksAction = createAction("deleteAllTasksAction");

export default deleteAllTasksAction;
