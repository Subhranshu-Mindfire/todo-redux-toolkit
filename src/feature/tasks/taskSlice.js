import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks : [
    {
      id: Date.now(),
      taskName: "test",
      completed: false
    }
  ]
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
      },
      deleteTask:(state,action)=>{
        const index = state.tasks.findIndex((task)=>task.id == action.payload.id)
        state.tasks.splice(index,1)
      },
      editTask:(state,action)=>{
        const index = state.tasks.findIndex((task)=>task.id == action.payload.task.id)
        state.tasks[index].taskName = action.payload.newTaskName
      }
    }
  }
)


export default taskSlice.reducer
export const {addTask,toggleCompletion,deleteTask,editTask} = taskSlice.actions