import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../feature/tasks/taskSlice"
export const store = configureStore(
  {
    reducer:{
      tasks: taskReducer
    }
  }
)