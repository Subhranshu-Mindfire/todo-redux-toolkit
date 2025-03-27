import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks : [
    {
      id: Date.now(),
      taskName: "test",
      completed: false
    }
  ],
  no: 10
}

const taskSlice =  createSlice(
  {
    name: "task",
    initialState,
    reducers:{
      addTask:(state,action)=>{
        state.tasks.push(action.payload)
        console.log(state);
      },
      change:(state)=>{
        state.no -= 1
      }
    }
  }
)


export default taskSlice.reducer
export const {addTask,change} = taskSlice.actions