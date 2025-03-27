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
      toggleCompletion:(state,action)=>{
        const index = state.tasks.findIndex((task)=>task.id == action.payload.id)
        state.tasks[index].completed = !state.tasks[index].completed
      }
    }
  }
)


export default taskSlice.reducer
export const {addTask,toggleCompletion} = taskSlice.actions